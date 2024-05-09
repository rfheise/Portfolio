import ProjectLoader from "../ProjectLoader"
import Section from '../../Blog/Section'
import Text from '../../Blog/Text'
import List from '../../Blog/List'
import ListItem from '../../Blog/ListItem'
export default function Youndle() {
    return (
        <ProjectLoader route = "youndle">
        <Section title = "What it Does">
            <Text>
            In high school my friend, Aran Jacobs, and I realized that there were a lot of small businesses in our local area that desperately needed work. We were also constantly asked by our peers if we knew any place that was hiring. It seemed as though there was a disconnect between these two groups that needed to be solved. Most teenagers went and got a job at larger companies because they had the means to advertise. We wanted to provide a cost effect platform to small businesses so they could connect with teenage workers. So we set out to make Youndle LLC a web application platform designed to connect teenagers with small businesses looking for teenage workers. We were entered into the Purdue Anvil startup accelerator to help us take off with our idea. We met with local businesses around the Lafayette area to get feedback and ways to improve our product. 
            </Text>
        </Section>
        <Section title = "Who Worked On The Project">
            <List>
                <ListItem>
                    <Text>
                    Ryan Heise(Me): Lead Developer/Co-Founder
                    </Text>
                </ListItem>
                <ListItem>
                    <Text>
                    Aran Jacobs: Head of Business Opeations/Co-Founder
                    </Text>
                </ListItem>
            </List>
        </Section>
        <Section title = "How it Works">
            <Text>
                I built the web platform using django and react. I then deployed the project to an AWS EC2 instance and used an RDS PostgreSQL database to store our users data. There were a bunch of different parts to the site. The initial build was just pure django however it wasn’t very user friendly (more on that later). In order to have better control over the front end I eventually decided to incorporate React. This made it 100x easier to make a good looking and feeling user interface. There were two main types of accounts on the site, business and student accounts. Business would first start off by creating an account and fill out basic information about their business. They would then be able to fill out a job posting and post it to the site. After that businesses would then create a custom page. This page would provide them with a custom link that they could post on their website or social media. If any potential applicant clicked on the page they would be greeted with a description about the business and their current job postings. They could then directly apply to the positions from there. The student accounts worked a little differently. Students would first start off by creating an account and filling out a common job application. Users could then access our job search engine that would allow that to search for any job by location, business, or title. As a side note, I wanted to make the search engine really fast so I loaded in 100,000 random postings into a database and just optimized the sql queries until I received the results I was happy with. Needless to say when using a relational database using the join command efficiently and effectively speeds up the results significantly. I also used a pagination system so that only 20 results would be displayed to the user at a time. If the user was on desktop these results were separated into pages. If the user was on mobile, I added an infinite scroll that would allow users to scroll “forever”. When users found an application they were interested in they could add it to their current job application list. Once the jobs were in the application list students could then fill out specific questions related to that job. When they were finished they could apply to that application. When a student applied, businesses could view all students that applied to that position and could filter them based upon availability. When a business viewed a student's application they would get access to the student’s common application and job specific application and choose to contact them from there. Whew, that was a lot… Anyway deploying the site was another challenge. I didn’t have much experience with AWS so I had to figure it out quick and make sure security was up to par since we were storing sensitive user data. On the application side I made sure to prevent XSS with csrf tokens (django has this feature built in). I also made sure to keep the user's passwords hashed and salted and sanitized all database inputs. On the server side I created a password protected custom vpn. On our web server I then created AWS security groups to make sure that the IP of our vpn was the only device that could access inbound server data on our ssh port. I also made sure to disable password authentication and only used public private key pairs. I then used a different port instead of port 22 to ssh into the server as port 22 is a commonly used port. After the web server was thoroughly protected, I had to ensure the database keeping all our user data was secure. Using amazon security groups I made sure the only device that could access the database was our web server. This way not even we could access the database without going through our web server which required us to go through our vpn. 

            </Text>
        </Section>
        <Section title = "What I Learned">
            <Text>
            There were multiple challenges with a project of this size. One of the biggest technical problems that occurred early on was creating a “trustable” user interface. I didn’t have much design experience so I went through Adobe XD and created multiple designs until one “looked right”.  The initial design of Youndle was just downright hideous. The design looked so bad I If I were a customer I would probably have trusted a “click here to claim a free ipad” email more than our site. After testing the site out with some of my peers, I learned that a good design has to explain how to use the site without directly telling them how to use the site.  It took me a while to get the hang of designing a good user interface and experience but eventually I think it turned out pretty good. Ultimately, I think the downfall of Youndle was that it didn’t require a technological solution. After talking with local businesses it seemed like the market needed a way to find teenagers for the businesses, rather than a platform to connect the two. Both my co-founder and I didn’t have any experience with marketing so we decided it was best to continue our journey on other projects. Looking back on it, I learned so much stuff through Youndle that even though it didn’t pan out in the end it was worth it. If you browse through the Youndle code base you could see the vast improvement of my programming skills. It goes from pretty scummy rookie code with random variable names and no comments, to a clean a precise object oriented design with well documented classes and methods. I learned that hard way that unclean and undocumented code just isn’t scalable. If you want to right a long lasting and solid code base do it right the first time!

            </Text>
        </Section>
    </ProjectLoader>
    )
   
}