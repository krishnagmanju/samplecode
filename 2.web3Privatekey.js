import Web3 from'web3';
import HDWalletProvider from "@truffle/hdwallet-provider";
import * as dotenv from 'dotenv';
dotenv.config();
// initialize web3 using private key and provider
const url = process.env.INFURA_URL;
 const key =process.env.PRIVATE_KEY;
const myPrivateKeyHex = key;
const localKeyProvider = new HDWalletProvider({
    privateKey: [myPrivateKeyHex],
    providerOrUrl: url,
  });
const web3 = new Web3(localKeyProvider);
console.log(web3)

