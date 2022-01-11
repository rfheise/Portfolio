import React, { useEffect,useState } from 'react'
import "./Home.css"
import NFT from "./NFT.js"
import bg from "./christmas.jpeg"
import loadingIcon from "./loading.png"
import { getContract, getDefaultWallet,connectWallet } from './Wallet';
export default function Christmas() {
    const [contract, setContract] = useState(null);
    const [loading, setLoading] = useState(false)
    const [nfts, setNFTs] = useState([])
    const [error, setError] = useState("")
    function updateContract() {
        let contract = getContract()
        setContract(contract)
    }
    useEffect(function() {
        (async function() {
            let wallet = await getDefaultWallet();
            console.log(wallet)
            if (wallet) {
                updateContract()
            }
            if (window.ethereum) {
                window.ethereum.on('accountsChanged', updateContract)
            }
        })()
    }, [])
    async function getNFTs() {
        setLoading(true)
        //get nft ids
        let nftIds = await contract.getNFTs()
        if (nftIds.length === 0) {
            alert("No NFTs Found on Account")
        }
        let nfts = []
        //get token uri from nft id's and extract token json
        for (let i = 0; i < nftIds.length; i++) {
            let nftData = await contract.tokenURI(nftIds[i])
            let data = await fetch(nftData)
            let nft = await data.json()
            nft.id = nftIds[i]
            nfts.push(nft)
        }
        //update nfts with valid info
        setNFTs(nfts)
        setLoading(false)
    }
    async function connectWalletToApp() {
        let wallet = await connectWallet()
        updateContract()
    }
    return (
        <div className = "nft-main-body">
            <div className = "nft-main-overlay flex">
                <h1 className ="h1">
                    Christmas NFT
                </h1>
                {error &&
                <h1 className = "h1" style = {{color:"red"}}>
                    {error}
                </h1>
                }

                {nfts.map(nft => (<NFT key = {nft.id} {...nft}/>))}
                {loading &&
                    <img className = "loading" alt = "loading" src = {loadingIcon}/>
                }
                <div className = "buttons">
                {contract?
                <button className = "a" onClick = {getNFTs}>
                    View NFTs
                </button>
                :
                (<button className = "a" onClick = {connectWalletToApp}>
                    Connect Wallet
                </button>)
                }   
                <a className = "a" href = "https://ryanfheise.com/christmas">Claim Amazon Gift Card</a>
                </div>
            </div>
            <div className = "nft-overlay">

            </div>
            <div className = "bg-img">
                <img className = "christmas-img"  src = {bg} />
            </div>
        </div>
    )
}