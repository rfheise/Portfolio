import ProjectLoader from "../ProjectLoader"
import Section from '../../Blog/Section'
import Text from '../../Blog/Text'
import List from '../../Blog/List'
import ListItem from '../../Blog/ListItem'

export default function HeisePow() {
    return (
        <ProjectLoader route = "heise">
        <Section title = "What it Does">
            <Text>
            
            Every year my family plays this game every NFL season. We have a perpetual trophy that gets passed around to the winner every year. It is a really simple game, you just pick one team each week and if they win you get a win on your record. If they lose you get a loss. You can’t pick the same team twice. We also take a vote at the beginning of the year to determine what 3 teams we are going to ban because we believe they will be too overpowered. You win by having the best record and highest average margin of victory. Before I made the website we used to have to calculate everything by hand. It also was stressful trying to figure out who everyone picked and validating their picks. When it was time to calculate the winner most years we had a time. Therefore, we would use the average margin of victory as a tiebreaker (calculating this by hand was tedious and took forever). I first built a very very very simple version of the website in high school to improve the efficiency of our system. It has since evolved into what it is today. Currently, it allows players to upload their own profile picture and has a much better user experience than the mk1 website.

            </Text>
        </Section>
        <Section title = "How it Works">
            <Text>
            I created an API using the Django Rest Framework to communicate with an entirely React Front End. When a user accesses a page it queries an api to get JSON data and then renders that data using react to display it to the user. It uses Token authentication rather than session authentication to authenticate users. I decided to use token authentication and integrate it more seamlessly with the react. In the future I also intend on creating a React-Native application for the site so by using token authentication I can use the same api endpoints as I do for the website. I also decided to learn how to use React Hooks with Typescript. I must say all the rumors are true about Typescript. It is essentially just javascript done right. Once you go typescript you never want to go back. Typescript is just essentially typed javascript but it uses interfaces for objects. These interfaces make the code a lot more clean and self documenting. If you are mainly a javascript developer I highly implore you to check out Typescript.
            </Text>
        </Section>
        <Section title = "What I Learned">
            <Text>
            This was the first project I used an entirely React front end. Most of the time my projects had been a hybrid between react and another back-end framework for rendering front-end content. Since I was using react entirely, I had to figure out a different authentication scheme, rather than session authentication, because I was using Cross Origin Requests to communicate with the API. I had to use Token authentication and this came with a number of challenges. I essentially had to include the auth token inside of the request header everytime I used the API. Writing that into the code each time I queried the API would have been overwhelming. I decided to extrapolate that into an API class that allowed me to use that class as If I was just normally querying an api using the fetch function. This allowed me to have a more structured query system for gathering data from the back-end api. Another challenge that occurred with using Token authentication was that I had to figure out how to store the token on client side since I couldn’t just store a standard session cookie. I ended up using the localStorage browser api to achieve this. So for every request I grab the token from localStorage and then use that to query the api. If the token is no longer valid I redirect the user to log back in to get a new token.
            </Text>
        </Section>
        </ProjectLoader>
    )
   
}