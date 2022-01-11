import {ethers} from "ethers"
import NFTABI from "./NFTABI.json"
export const address = "0x2572bDBC94140F198296aBC91091D78cF3f0846d"

async function getEthereum() {
    let {ethereum} = window 
    if (!ethereum) {
        alert("Get MetaMask Wallet")
        return null
    }
    if(ethereum.networkVersion != 4) {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x4' }], // chainId must be in hexadecimal numbers
          });
    }
    return ethereum
}

export async function getDefaultWallet() {
    return await getWallet("eth_accounts")
}   

export async function connectWallet() {
    return await getWallet("eth_requestAccounts")
}

export function getContract() {
    let provider = new ethers.providers.Web3Provider(window.ethereum)
    let signer = provider.getSigner()
    return new ethers.Contract(address, NFTABI.abi, signer)
}

async function getWallet(method) {
    let ethereum = await getEthereum();
    if (!ethereum) {
        return
    }
    let accounts = await ethereum.request({method:method})
    if (accounts.length == 0) {
        return null;
    }
    return accounts[0];
}   
