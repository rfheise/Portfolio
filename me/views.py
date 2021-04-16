from django.shortcuts import render


def server(html):
    def func(request):
        return render(request, html)
    return func