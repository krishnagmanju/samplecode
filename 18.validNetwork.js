const Web3 = require('web3');
const networkUrl="https://goerli.infura.io/v3/3418d04467cd490188b6674cdf6cfc2e";
async function validateNetwork() {
  const web3 = new Web3(networkUrl);
  console.log(web3)

  try {
    const networkId = await web3.eth.net.getId();
    console.log(networkId)
    console.log(`Connected to Ethereum network with ID: ${networkId}`);
    return true;
  } catch (error) {
    console.error(`Error connecting to Ethereum network: ${error.message}`);
    return false;
  }
}
validateNetwork();