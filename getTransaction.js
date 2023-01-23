import Web3 from'web3';

async function App(){
const web3 = await new Web3('url..');
const transaction = await web3.eth.getTransactionReceipt('0xc737531f440c8526c1b5eace67c08fd7ed188ea012a7b47db3f97469c9a01e8a');
console.log(transaction)
}
App()