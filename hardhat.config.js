require("@nomicfoundation/hardhat-toolbox");
//require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("./tasks/block-number")
require("@nomiclabs/hardhat-etherscan")
require("solidity-coverage")
require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
module.exports = {
  defaultNetwork:"hardhat",
  neworks:{
    goerli:{
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId:5,

    },
   
  },
  solidity: "0.8.17",
};
