import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv"
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  /**
   * In order to estimate gas when MetaMask connects to the Hardhat network, it is necessary to set @initialBaseFeePerGas equal to 0.
   */
  networks: {
    hardhat:{
      accounts:{
        mnemonic: process.env.MNEMONIC,
        count: 10,
        accountsBalance: "100000000000000000000"
      },
      gasPrice: 5*1e9,
      initialBaseFeePerGas:0,
    },
  },
};


export default config;
