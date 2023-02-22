
const Web3 = require('web3');
const Tx = require("ethereumjs-tx").Transaction;
const HDWalletProvider = require("@truffle/hdwallet-provider");

async function tokentransfer() {
    // const tokenContractAddress = process.env.TOKEN_CONTRACT_ADDRESS;
    const tokenContractAddress = "0x7a97e743eEA0494A0546B8B50A0aB9C2e6380cba";
    const tokenContractABI = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "subtractedValue",
                    "type": "uint256"
                }
            ],
            "name": "decreaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "addedValue",
                    "type": "uint256"
                }
            ],
            "name": "increaseAllowance",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "mint",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ];
    // const web3 = await new Web3('https://goerli.infura.io/v3/3418d04467cd490188b6674cdf6cfc2e');
    const localKeyProvider = new HDWalletProvider(
        ['692b77e7c9a4a208b7e28baad27a026c8186295cd38743683c5f4e8117a20fdf'],
        'https://goerli.infura.io/v3/3418d04467cd490188b6674cdf6cfc2e',
    );
    const web3 = new Web3(localKeyProvider);
    const tokenContract = new web3.eth.Contract(tokenContractABI, tokenContractAddress);
    console.log(tokenContract)

    const tx = await tokenContract.methods.transfer('0x3EEaD2B9beC2A2E72A33C900824A3601eEAEE5b1', 1).send({ from: "0xdD1b45a4F6f11eAdB554B6241E042d5B29e7AAc8" });
    console.log(tx)

    //   const receipt=await web3.eth.sendTransaction(options);
    //   console.log(receipt)

//     const contractAddress = "0x7a97e743eEA0494A0546B8B50A0aB9C2e6380cba";
//     const transactionHash = "0x12d0e6c76f8a8649cd77e93109e8e178b2b6243d30eef20f2859a188e7fe5281";
//     // const contractAddress = "0x302fd86163cb9ad5533b3952dafa3b633a82bc51";
//     // const transactionHash = "0xc4a5518b2c62095361d3cc5bfa7f4f7fde89ca5160ff479fc564cdb39037bf3e";

//     // Get the transaction receipt
//     const receipt =await web3.eth.getTransactionReceipt(transactionHash)
//         .then(transactionReceipt => {
//             // Get the logs from the transaction receipt
//             const logs = transactionReceipt.logs;
//             console.log(logs)
           
//             // Loop through the logs and find the one with the contract address
//             logs.forEach(log => {
               

//                 if (log.address === contractAddress) {
                    
//                     // Get the data from the log
//                     const data = log.data;
//                     // console.log(data)
//                    const amount = web3.utils.hexToNumberString(data);
//                    console.log(amount)
//                     // Decode the data to get the token amount transferred
//                     // (Note: this will depend on the specific token contract and encoding)
//                     // const tokenAmount = ...

//             // console.log("Token Amount Transferred:", tokenAmount);
//         }
//     });
//   });
   

// 
// const contractAddress = "0x7a97e743eEA0494A0546B8B50A0aB9C2e6380cba";
// const transactionHash = "0x4d63f686af19f20b7f0391766599406cd63244f494fb4ae2f77b3d8fba4f07dc";
// // Get the transaction receipt

//     const receipt = await web3.eth.getTransactionReceipt(transactionHash)
//     console.log("ree", receipt)
//     receipt.logs.map((log) => {
//         if (log.address.toLowerCase() === contractAddress.toLowerCase()) {
//             const data = log.data;
//             let tokenAmount = parseInt(data.slice(data.length - 64), 16) / 10 ** 18;
//             console.log("data", tokenAmount.toFixed(18))
//         }
//     })
}
    

tokentransfer();
