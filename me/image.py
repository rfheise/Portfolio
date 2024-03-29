from stegano import encrypt_string, decrypt_to_string, decrypt_to_file
from django.shortcuts import render,redirect
from django.http import HttpResponse
import time
import os
from PIL import Image
#encrypts post request file
def encrypt(request):
    if request.method == "GET":
        return render(request,"encrypt.html")
    elif request.method == "POST":
        try:
            infile = f"epic{time.time()}"
            outfile = f"out{time.time()}.bmp"
            encrypt = request.FILES['planet']
            with open(infile, "wb+") as f:
                for chunk in encrypt.chunks():
                    f.write(chunk)
            e = Image.open(infile)
            e.save(infile+".bmp")
            os.remove(infile)
            infile += ".bmp"
            encrypt_string(infile, request.POST['string'], outfile)
            with open(outfile,"rb") as f:
                data = f.read()
            response = HttpResponse(data, content_type='image/bmp')
            response['Content-Disposition'] = 'attachment; filename="out.bmp"'
            os.remove(outfile)
            os.remove(infile)
            return response
        except:
            return render(request,"message.html",{"message":"An error occured"})
def decrypt(request):
    if request.method == "GET":
        return render(request, "decrypt.html")
    elif request.method == "POST":
        try:
            decrypt = request.FILES['planet']
            readfile = f"read{time.time()}.bmp"
            with open(readfile,"wb+") as f:
                for chunk in decrypt.chunks():
                    f.write(chunk)
            string = decrypt_to_string(readfile)
            os.remove(readfile)
            return render(request,"message.html",{"message":string})
        except:
            return render(request,"message.html",{"message":"An error occured"})
def decrypt_file(request):
    if request.method == "GET":
        return render(request,"decrypt.html",{"file":True})
    elif request.method == "POST":
        decrypt = request.FILES['planet']
        readfile = f"read{time.time()}.bmp"
        outfile = f"out{time.time()}"
        with open(readfile, "wb+") as f:
            for chunk in decrypt.chunks():
                f.write(chunk)
        decrypt_to_file(readfile,outfile)
        os.remove(readfile)
        buffer = None
        with open(outfile, "rb+") as f:
            buffer = f.read()
        os.remove(outfile)
        if not buffer:
            return render(request,"message.html",{"message":"an error has occured"})
        response = HttpResponse()
        response = HttpResponse(buffer, content_type='application/force-download')
        response['Content-Disposition'] = 'attachment; filename="Sheeesh🥶.txt"'
        return response
        
        
        
            