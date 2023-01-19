import Web3 from'web3';
import HDWalletProvider from "@truffle/hdwallet-provider";

// initialize web3 using private key and provider


const myPrivateKeyHex = "123123123";
const localKeyProvider = new HDWalletProvider({
    privateKey: [myPrivateKeyHex],
    providerOrUrl: provider,
  });
const web3 = new Web3(localKeyProvider);

