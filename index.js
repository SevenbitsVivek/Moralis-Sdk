const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
const abi = require("./abi.json")["abi"];

const runApp = async () => {
  await Moralis.start({
    apiKey: "Gv9JyULJru7l3Vj7klNWuAHXEAtu631qKbu2Lcsqg0ep7anDiS9fJh2fttkZY1PM",
  });

  const chain = EvmChain.BSC_TESTNET;

  const address1 = "0x0a406146aeFF78fED0fD63501AcE89cbC40f7699";
  const address2 = "0xccdb17b8eF68ffFdbCA4bf4AB6B765e41d61733A";
  const address3 = "0xBd56f4A19d527E37028aADc37f49842Bd1b979Ff";
  const address4 = [ "0xBd56f4A19d527E37028aADc37f49842Bd1b979Ff"];

  // token 0 address, e.g. WETH token address
  const functionName = "getBuyTokenPrice";

  const swapContractresponse = await Moralis.EvmApi.utils.runContractFunction({
    address: address1,
    functionName,
    abi,
    chain,
  });

  const getNativeBalanceResponse = await Moralis.EvmApi.balance.getNativeBalance({
    address: address2,
    chain,
  });

  const getWalletTokenBalancesResponse = await Moralis.EvmApi.token.getWalletTokenBalances({
    address: address3,
    chain,
  });

  const getTokenTransfersResponse = await Moralis.EvmApi.token.getTokenTransfers({
    address: address3,
    chain,
  });

  const getWalletTokenTransfersResponse = await Moralis.EvmApi.token.getWalletTokenTransfers({
    address: address2,
    chain,
  });

  const getTokenMetadataResponse = await Moralis.EvmApi.token.getTokenMetadata({
    addresses: address4,
    chain,
  });

//   console.log("swapContractresponse ===>", swapContractresponse.toJSON());
//   console.log("getNativeBalanceResponse ===>", getNativeBalanceResponse.toJSON());
//   console.log("getWalletTokenBalancesResponse ===>", getWalletTokenBalancesResponse.toJSON());
//   console.log("getTokenTransfersResponse ===>", getTokenTransfersResponse.toJSON());
//   console.log("getWalletTokenTransfersResponse ===>", getWalletTokenTransfersResponse.toJSON());
  console.log("getTokenMetadataResponse ===>", getTokenMetadataResponse.toJSON());
};

runApp();