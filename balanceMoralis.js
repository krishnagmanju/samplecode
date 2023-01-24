const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');

const runApp = async () => {
  await Moralis.start({
    apiKey: "J2PssSLgubh4ainuAWiwR0KFw1U4sERe1sp3XsLVD0oXRJq3dOJL3LeRe5GuTycT",
   
  });
  
  const address = '0xBB7495884F80849f3828FC1339CeDD288434Ad59';

  const chain = EvmChain.GOERLI;

  const response = await Moralis.EvmApi.token.getWalletTokenBalances({
    address,
    chain,
  });
  
  console.log(response.toJSON());
}

runApp();