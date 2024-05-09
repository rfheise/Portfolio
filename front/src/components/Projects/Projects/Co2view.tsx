import ProjectLoader from "../ProjectLoader"
import Section from '../../Blog/Section'
import Text from '../../Blog/Text'
import List from '../../Blog/List'
import ListItem from '../../Blog/ListItem'
export default function Co2View() {
    return (
        <ProjectLoader route = "co2">
        <Section title = "What it Does">
            <Text>
            It tracks emission data from cars using data from the epa. You can upload a picture of your license plate and it will determine your car’s emissions profile. It tells you what percentile your car is in for emissions. It was entered in Purdue’s Boilermake 2021 competition.
            </Text>
        </Section>
        <Section title = "Who Worked On The Project">
            <List>
                <ListItem>
                    <Text>
                    Ryan Heise(Me): Front End Dev & Set Up Api’s
                    </Text>
                </ListItem>
                <ListItem>
                    <Text>
                    Hunter Haglid: Processed EPA data
                    </Text>
                </ListItem>
                <ListItem>
                    <Text>
                    Adam Rutledge -  Machine Learning
                    </Text>
                </ListItem>
                <ListItem> 
                    <Text>Rohan Potar - Machine Learning</Text>
                </ListItem>
            </List>
        </Section>
        <Section title = "How it Works">
            <Text>
            We gathered emissions data from the past 20 years from the epa. The data wasn’t nicely formatted, the file format was different from year to year. It was also hard to process the data because the headers were also different from year to year. In order to process the emissions data we had to create a different way to process each type of file. When you uploaded a photo of your license plate, we queried an api that got the state and license number. We then took that data and queried another api that gave us the cars make and model. We then used the make and model to search through the emissions data and find the emissions of your car. 
            </Text>
        </Section>
        <Section title = "What I Learned">
            <Text>
            In the beginning our plan was to put a camera in a parking garage and use our system to determine the emissions of a single parking garage throughout the day. However, we spent a lot of time trying to spice things up and eventually ran out of time creating the more important features. I learned that when you are under a time crunch it’s best to finish all the important parts of the project and then go back and make it look nice/work faster. 
            </Text>
        </Section>
        </ProjectLoader>
    )
   
}