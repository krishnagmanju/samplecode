const  Web3 =require('web3');

const contractABI = require ('./abis/abi.json');
require ('dotenv').config();


const key = process.env.INFURA_URL
const contractAddress = process.env.CONTRACT_ADDRESS 

// creating instance of contract
const web3 = new Web3(key);
const contractInstance = new web3.eth.Contract(contractABI , contractAddress );
console.log(contractInstance)

