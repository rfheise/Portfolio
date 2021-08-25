import ProjectLoader from "../ProjectLoader"
import Section from '../../Blog/Section'
import Text from '../../Blog/Text'

export default function Melody() {
    return (
        <ProjectLoader route = "melody">
        <Section title = "What it Does">
            <Text>
            I worked with the owners of the Melody Drive-in to help bring their ancient website into the 2020’s. It had been a while and their website needed an upgrade as it had been over a decade since they had revitalized it. It allows their customers to view what movies are currently playing, all their menu items, and weekly announcements. It is currently my most used project and has over 10,000 monthly visitors.
            </Text>
        </Section>
        <Section title = "How it Works">
            <Text>
                I used django to create a content management system that allows the owners to customize all the content on the site. They can create their own navbar links, edit the movies in now showing, update the homepage slideshow, update menu items, and much more. One of the requirements was that the admin interface had to be user friendly. I decided to use django’s built-in admin interface as it was easy to setup and provided a user-friendly way for the owners of the Drive-in to update their site.
            </Text>
        </Section>
        <Section title = "What I Learned">
            <Text>
            REDUCE YOUR FILE SIZES!!! This was definitely the biggest issue I had faced when creating the site. Currently, the website is hosted on an AWS EC2 instance. It was kind of scary knowing that my site would be put in front of thousands of people overnight. I was worried there would be a bug I didn’t catch and the site would go down. Thankfully, that didn’t happen (or so I thought). The issue with getting thousands of users overnight is when they access the site they have to download all of the site images. Most of the original background images on the site were about 5mb and most of the slideshow images were also a few mb large. Now each user used about 30mb of data. This doesn’t sound like much and I didn’t think much of it. However, when you have 10,000 users it builds up really quickly. 30 * 10,000 ~ 300,000 mb of data or roughly 300 GB. AWS charges for data used after 15 GB of data. I realized the AWS bill was a lot higher than anticipated that first month 😬. I quickly fixed this by reducing the size and format of the images to reduce them to about ~500 kb each. I also added a cap on the file sizes of the images the owners of the drive-in could upload as well. TLDR please reduce file sizes. It reduces network usage (and costs) and makes for a better user experience as the site will load faster.
            </Text>
        </Section>
    </ProjectLoader>
    )
   
}