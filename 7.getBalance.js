const Web3 =require ('web3');


async function balance(){
const  web3 = new Web3("https://sepolia.infura.io/v3/3418d04467cd490188b6674cdf6cfc2e");
const address='0xBB7495884F80849f3828FC1339CeDD288434Ad59';
const balance = await web3.eth.getBalance(address);
console.log(balance)
}
balance()
