const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey:"J2PssSLgubh4ainuAWiwR0KFw1U4sERe1sp3XsLVD0oXRJq3dOJL3LeRe5GuTycT",
  });

  const transactionHash =
    "0xc737531f440c8526c1b5eace67c08fd7ed188ea012a7b47db3f97469c9a01e8a";

  const chain = EvmChain.GOERLI;

  const response = await Moralis.EvmApi.transaction.getTransaction({
    transactionHash,
    chain,
  });

  console.log(response.toJSON());
};

runApp();