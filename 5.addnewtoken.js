// Import web3
const Web3 =require ('web3');
// import contractABI from "./abi.json";
const contractABI = require ('./abis/abi.json');
require ('dotenv').config();

async function network(){
// Connect to the Ethereum network
const key = process.env.INFURA_URL
const contractAddress = process.env.CONTRACT_ADDRESS 

const web3 = new Web3(new Web3.providers.HttpProvider(key));

// Create an instance of the contract
const contract =new web3.eth.Contract(contractABI, contractAddress);

// check that the token is ERC-20


// Fetch the token name
const name = await  contract.methods.name().call()
    console.log(name);

// Fetch the token symbol
const symbol =await  contract.methods.symbol().call()
    console.log(symbol);

// balance of tokens

const balance = await contract.methods.balanceOf('0xF6038896Aef6bEceE7AeD46Ed1bA22b11478627c').call()
    console.log(balance);
}

network()
