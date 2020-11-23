require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { API_URL, PRIVATE_KEY } = process.env;   // 来自第三方及你的钱包

module.exports = {

  // 关于区块链网络节点的配置
  networks: {

    // 本地 Ganache 测试区块链
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*", // Match any network id
      gas: 5000000
    },

    // 以太坊测试网 Ropsten, 测试网络一般使用第三方节点服务，不用私自搭建节点
    ropsten: {
      provider: function() {
        return new HDWalletProvider(PRIVATE_KEY, API_URL)
      }, 
      network_id: 3
    }

  },
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  }
}