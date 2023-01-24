import Web3 from 'web3';

import contractABI from './abis/abi.json' ;

import * as dotenv from 'dotenv';
dotenv.config();

const key = process.env.INFURA_URL
const contractAddress = process.env.CONTRACT_ADDRESS 

// creating instance of contract
const web3 = new Web3(provider);
const contractInstance = new web3.eth.Contract(contractABI , contractAddress );

