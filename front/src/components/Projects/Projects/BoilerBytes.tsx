import ProjectLoader from "../ProjectLoader"
import Section from '../../Blog/Section'
import Text from '../../Blog/Text'
import List from '../../Blog/List'
import ListItem from '../../Blog/ListItem'
export default function Co2View() {
    return (
        <ProjectLoader route = "boiler">
        <Section title = "What it Does">
            <Text>
            A dapp that allows a user to mint an nft of some of the professors in the Purdue CS department. It allows you to take your minted nft’s and battle them against “Mitch Daniels”. These NFTs can also be traded on any NFT trading platform like opensea. 

            </Text>
        </Section>
        <Section title = "How it Works">
            <Text>
            The application is deployed to the rinkeby testnet. When you connect your wallet to the application and mint an nft it will send a transaction to the blockchain and create your nft. All of the character data is stored on the chain i.e. your characters health and name is stored on the chain. However, the images are stored off chain on my website as storing whole images on the blockchain is expensive. When you “fight” Mitch Daniles it calls a function on my smart contract that decreases his health depending on the amount of damage your character inflicts. I also wanted to learn more about how the ERC-721 smart contract worked internally. The ERC-721 interface is a specification that creates a common standard for how an NFT should work. Having an NFT standard makes it easier for sites to recognize an NFT. If everyone implemented an NFT differently it would be hard to create a trading platform that all NFTs could be traded on. Anyway, I decided to create one from scratch to understand how the interior of the contract works instead of using an OpenZeppelin library. I also found this aspect of the nft really hard to debug because I was having an issue getting my custom specification to connect to OpenSea and Rarible initially. 


            </Text>
        </Section>
        <Section title = "What I Learned">
            <Text>
            Developing for the blockchain is a lot different than developing a program for a traditional computer. On-Chain computation is expensive; you have to be a lot more mindful of the cost of your computations. Storage on the blockchain is also extremely expensive. In today’s world most of the time you are trying to optimize runtime complexity and ignore space complexity as memory is relatively cheap. Granted there are times this isn’t true like if you are developing for embedded systems but generally this holds up. However, since storage is so expensive on the blockchain you often find yourself trying to optimize space complexity rather than runtime complexity. It’s also important to understand the distinction between memory and storage in solidity. Storage is any data that will be stored permanently on the chain. This is what is super expensive! However, memory is only temporary storage used during a function call. Memory is still relatively expensive with today's gas prices but it is a hell of a lot cheaper than storage. You can think of it as memory is to storage as ram is to a hard-drive. 


            </Text>
        </Section>
        </ProjectLoader>
    )
   
}