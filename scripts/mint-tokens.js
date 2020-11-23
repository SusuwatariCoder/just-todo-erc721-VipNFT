const Token = artifacts.require("./Token.sol");
// artifacts.require（）方法告诉 Truffle 我们想要与哪些合约进行交互。 
// 这个方法类似于Node的 require，但在我们的例子中，它特别返回了一个 合约抽象 contract abstraction，我们可以在其余的部署脚本中使用它

module.exports = async (callback) => {
  try {
    const contract = await Token.deployed()
    const tokenURI = "https://ipfs.io/ipfs/IPFS_File_Hash"

    // Token Holder accounts
    const accounts = [
      "Public_KEY_1"
    ]

    for (const account of accounts) {
      try {
        console.log("=================================================")
        console.log("MINTING TOKEN:\n")
        console.log(account)
        console.log(tokenURI)
        console.log("\n")

        const result = await contract.mint(
          account,
          tokenURI
        )

        console.log(`SUCCESS:\n`)
        console.log(`https://ropsten.etherscan.io/tx/${result.tx}`)
        console.log("\n\n")
      }
      catch(error) {
        console.log(error)
      }
    }
  }
  catch(error) {
    console.log(error)
  }

  callback()
}