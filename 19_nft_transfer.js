const Web3 = require('web3');
const web3 = new Web3('https://goerli.infura.io/v3/3418d04467cd490188b6674cdf6cfc2e'); // Replace with your own Infura project ID or Ethereum node URL
const contractABI = require ('./abis/abi1.json');

const contractAddress = '0x5f2C2401da6E9a5A0195a7B2Ad9466Bee5dAeDd5'; // Replace with the NFT contract address
const privateKey = '692b77e7c9a4a208b7e28baad27a026c8186295cd38743683c5f4e8117a20fdf'; // Replace with the sender's private key
const fromAddress = '0x758ED5580B5Abad3cb71B5B597E58aaEF8f62788'; // Replace with the sender's Ethereum address
const toAddress = '0x3EEaD2B9beC2A2E72A33C900824A3601eEAEE5b1'; // Replace with the recipient's Ethereum address
const tokenId = 1; // Replace with the ID of the NFT to transfer


async function nftTransfer(){
// Create a new web3 contract instance
const contract = await new web3.eth.Contract(contractABI, contractAddress);
console.log(contract)
// Get the current owner of the NFT
const owner = await contract.methods.ownerOf(tokenId).call();

if (owner.toLowerCase() !== fromAddress.toLowerCase()) {
  console.error('The sender is not the current owner of the NFT.');
  return;
}

// Get the current nonce of the sender's Ethereum address
const nonce = await web3.eth.getTransactionCount(fromAddress, 'latest');

// Create the transfer transaction
const data = contract.methods.transferFrom(fromAddress, toAddress, tokenId).encodeABI();
const gasPrice = await web3.eth.getGasPrice();
const gasLimit = await contract.methods.transferFrom(fromAddress, toAddress, tokenId).estimateGas({ from: fromAddress });

const tx = {
  from: fromAddress,
  to: contractAddress,
  nonce: nonce,
  gasPrice: gasPrice,
  gasLimit: gasLimit,
  data: data,
};

// Sign the transaction with the sender's private key
const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

// Send the signed transaction
const txReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

console.log(`NFT transferred successfully. Transaction hash: ${txReceipt.transactionHash}`);
}
nftTransfer();