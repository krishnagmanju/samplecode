const Web3 = require('web3');


// creating instance of contract
const web3 = new Web3(provider);
const contractInstance = new web3.eth.Contract(contractAbi , contractAddress );
