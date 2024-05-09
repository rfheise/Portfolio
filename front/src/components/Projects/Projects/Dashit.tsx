import ProjectLoader from "../ProjectLoader"
import Section from '../../Blog/Section'
import Text from '../../Blog/Text'
import List from '../../Blog/List'
import ListItem from '../../Blog/ListItem'
export default function Co2View() {
    return (
        <ProjectLoader route = "dashit">
        <Section title = "What it Does">
            <Text>
            Winner of the 2020 Hello World Purdue freshman hackathon. Dash-it allows restaurants to predict their current wait times using the number of bluetooth devices in an area. We predicted the wait times at the Jersey Mikes on campus by placing a raspberry pi underneath one of their tables. We were going to do Chick-fil-a but they’re closed on Sundays. 

            </Text>
        </Section>
        <Section title = "Who Worked On The Project">
            <List>
                <ListItem>
                    <Text>
                    Ryan Heise
                    </Text>
                </ListItem>
                <ListItem>
                    <Text>
                    Hunter Haglid
                    </Text>
                </ListItem>
                <ListItem>
                    <Text>
                    Oliver Miller
                    </Text>
                </ListItem>
                <ListItem> 
                    <Text>Stephen Feria</Text>
                </ListItem>
            </List>
        </Section>
        <Section title = "How it Works">
            <Text>
            We created an api endpoint using django that the pi could send the bluetooth data to. We created a bash script that would run the raspberry pi command (bluetoothctl) and then every 60s it would send that data to our api end-point. We then processed this data on our django server. We used a regex string to count the number of devices scanned by the pi. Sometimes we would get random spikes in the data so we made sure to remove outliers. We then averaged out our calculated time with the previous 5 minutes data that way there also wouldn’t be any dramatic spikes in the data. We also used django to create a front-end that would allow people to view the current wait times in real time. Our website displayed the data points on a graph showing the estimated wait times at a given point in time. On a side note, Purdue gives all the dorms on campus static ip addresses to be able to track what students are doing on their network. For some reason though they don’t have any inbound restrictions. This allowed us to host the django web server off a different pi in our dorm.

            </Text>
        </Section>
        <Section title = "What I Learned">
            <Text>
            The hardest part of this project was getting the data to look right. The issue we had with the data we collected is that there was a lot of noise. Your phone only emits a bluetooth signal that can be discovered from devices when it is searching for devices to connect to. The bluetooth signals we picked up were headphones and things of the like. Generally there was a decent correlation between the number of headphones and the number of people in an area. However, sometimes  a group of people wearing headphones would sit near the pi for an extended duration of time and throw off the wait time. We only had 24 hours to build the software so the math to try and remove these outliers was a little scuffed. If I could go back and fix one area of the project it would be the statistical calculations that we used to estimate run time. Our team's work schedule was also a little off. I would say that probably 75% of the work was done in the last 6 hours so looking back on it we probably should have had better time management.

            </Text>
        </Section>
        </ProjectLoader>
    )
   
}