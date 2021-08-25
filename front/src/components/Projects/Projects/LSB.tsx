import ProjectLoader from "../ProjectLoader"
import Section from '../../Blog/Section'
import Text from '../../Blog/Text'

export default function LSB() {
    return (
        <ProjectLoader route = "lsb">
        <Section title = "What it Does">
            <Text>
            It encrypts data into the least two significant bits of each pixel byte in a bitmap. Essentially, it stores text data into the pixels of the image. 
            </Text>
        </Section>
        <Section title = "How it Works">
            <Text>
                It takes in the image that you upload and the text you want to store inside the image. It then uses a PILLOW in python to convert the image to a bmp. It then uses CPython to use my custom c++ package to store the data into the image. In order to accomplish this it first reads the bmp meta data to get the image size and other details about the bitmap (bmp). It then makes sure the amount of data you are trying to store will fit inside the bitmap. The way it stores the data is it takes two bits of information from your data into the last two bits of each pixel. Since there are 8 bits of information in a byte it uses 4 bytes in the image to store a byte of your data. Since the data you are storing might not be the same size as the data of the image it has to store metadata. It stores the size of the image in the first 8 bytes of the image and then stores 1 bit of metadata into the file to preserve the endianness of the architecture used to encrypt the image. This way it should work on any device that supports c++. It then stores your data 1 byte at a time into the image. Most of the time you can’t even tell the image was altered from the original image. This is because you usually can tell the difference from an RGB value flipping from 255 to 252. I watched a video from Mike Pound on computerphile about it here, and thought it was really cool. You can check out the implementation on my site using the link in the project description.
            </Text>
        </Section>
        <Section title = "What I Learned">
            <Text>
            I learned CPython as a way to connect my c++ code into a python library. It took a while to shift through the documentation but it also worked out pretty well. I learned a lot about basic steganography, or the study of storing secret information into places that are not so secret. 
            </Text>
        </Section>
    </ProjectLoader>
    )
   
}