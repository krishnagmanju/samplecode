import Web3 from'web3';

import * as dotenv from 'dotenv';
dotenv.config();


async function App(){
const key = process.env.INFURA_URL
const web3 = new Web3(key);
const transaction = await web3.eth.getTransactionReceipt('0xc737531f440c8526c1b5eace67c08fd7ed188ea012a7b47db3f97469c9a01e8a');
console.log(transaction)
}
App()