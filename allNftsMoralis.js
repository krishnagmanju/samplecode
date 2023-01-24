const Moralis =require("moralis").default;
const { EvmChain } =require ("@moralisweb3/common-evm-utils");

const runApp = async () => {
  
  await Moralis.start({
    apiKey: "J2PssSLgubh4ainuAWiwR0KFw1U4sERe1sp3XsLVD0oXRJq3dOJL3LeRe5GuTycT",
   
  });

  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
     address,
     chain,
  });

  console.log(response.toJSON());
}

runApp();