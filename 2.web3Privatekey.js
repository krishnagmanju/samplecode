const Web3 =require ('web3');
const HDWalletProvider =require ("@truffle/hdwallet-provider");
require ('dotenv').config();
const ethers = require('ethers')
const secp256k1 = require('secp256k1');
const { bufferToHex, privateToAddress } =require ('ethereumjs-util');

// dotenv.config();
// initialize web3 using private key and provider
// const url = process.env.INFURA_URL;
// console.log(url)
//  const key =process.env.PRIVATE_KEY;
// const myPrivateKeyHex = key;
// console.log(myPrivateKeyHex)
// const localKeyProvider = new HDWalletProvider(
//   ['7d59d30f1d4e7d73b3c11dcf849790e3327c65855e29e1aa1e1996a8bd9bb3f0'],
//    'https://goerli.infura.io/v3/3418d04467cd490188b6674cdf6cfc2e',
// );
// const web3 = new Web3(localKeyProvider);
// console.log(web3)


function getPrivateKey () {
  
    const privateKey = "7d59d30f1d4e7d73b3c11dcf849790e3327c65855e29e1aa1e1996a8bd9bb3f0";
    const privateKeyBuffer = Buffer.from(privateKey, 'hex');
   const isvalid = secp256k1.privateKeyVerify(privateKeyBuffer);
   console.log(isvalid)
   const publickeyBuffer = privateToAddress(privateKeyBuffer);
   console.log(publickeyBuffer)
   const public_key = bufferToHex(publickeyBuffer);
  console.log(public_key)
    
  }

getPrivateKey ();




