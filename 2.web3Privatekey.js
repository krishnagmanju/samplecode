const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");

// initialize web3 using private key and provider


const myPrivateKeyHex = "123123123";
const localKeyProvider = new HDWalletProvider({
    privateKey: [myPrivateKeyHex],
    providerOrUrl: provider,
  });
const web3 = new Web3(localKeyProvider);

