// Import web3
const Web3 =require ('web3');
// import contractABI from "./abi.json";
const contractABI = require ('./abis/abi.json');
require ('dotenv').config();

async function App(){
const key = process.env.INFURA_URL
const web3 = new Web3(key);
const transaction = await web3.eth.getTransactionReceipt('0x8fce40ec4a30b3c69adf31f092fc58cd93756e94252c737899dad0c7306ab1e9');
console.log(transaction)
 const tx = await web3.eth.getTransactionReceipt('0xc737531f440c8526c1b5eace67c08fd7ed188ea012a7b47db3f97469c9a01e8a')
console.log(tx)

}
App()
// 0xc737531f440c8526c1b5eace67c08fd7ed188ea012a7b47db3f97469c9a01e8a