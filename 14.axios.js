const { default: axios } = require('axios');
const Web3 = require('web3');
async function balance() {
  const web3 = new Web3("https://goerli.infura.io/v3/3418d04467cd490188b6674cdf6cfc2e");
  const address = '0xBB7495884F80849f3828FC1339CeDD288434Ad59';
  // const bal = await web3.eth.getBalance(address);
  let bal = 0
  web3.eth.getBalance(address)
    .then(wei => {
      let ether = web3.utils.fromWei(wei, 'ether');
      console.log(`Balanceinn ETH is ${ether} `);
      bal = ether
      console.log(bal)
      convertBalance(ether, 'USD', 'ETH')
    });
}
balance();
async function convertBalance(bal, toBeConverted, netWork) {
  const ethereumPriceURL = `https://min-api.cryptocompare.com/data/price?fsym=${netWork}&tsyms=${toBeConverted}`;
  let resp = await axios.get(ethereumPriceURL)
  console.log("Response from cryptocompare ", resp.data)
  const value = resp.data[Object.keys(resp.data)[0]]
  convertToCurrency(bal, value)
}
async function convertToCurrency(cryptoBalance, currencyBalance) {
  const totalbal = cryptoBalance * currencyBalance;
  console.log("totalBal", totalbal)
}