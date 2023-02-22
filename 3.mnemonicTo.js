const bip39 = require ('bip39');
const { hdkey } = require ('ethereumjs-wallet');


var mnemonic;
function generate() {
   // const mnemonic = bip39.generateMnemonic();
   // console.log(mnemonic)

   const seed = bip39.mnemonicToSeedSync("stem meat final error cup clinic intact correct open sun beach used");
   console.log(seed)
   const hdwallet = hdkey.fromMasterSeed(seed);
   console.log(hdwallet)
   const wallet = hdwallet.derivePath(`m/44'/60'/0'/0/0`).getWallet();
            const publicaddress = "0x" + wallet.getAddress().toString("hex");
            const privateKey = wallet.getPrivateKey().toString("hex");
            const publicKey = wallet.getPublicKey().toString("hex");
            console.log(publicaddress)
            console.log(privateKey)
            console.log(publicKey)

}
generate()
