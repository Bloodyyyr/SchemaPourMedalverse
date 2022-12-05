require("dotenv").config();
const express = require("express");
const app = express();
const { ethers } = require("ethers");
const { mintAbi } = require("./mintAbi")
const args = require("args-parser")(process.argv);

const infuraProvider = process.env.INFURA
const walletPrivateKey = process.env.PRIVATE_KEY_OWNER

const provider = new ethers.providers.JsonRpcProvider(infuraProvider);

const wallet = new ethers.Wallet(walletPrivateKey, provider)

const contractAddress = process.env.CONTRACT_ADDRESS
// const signer = provider.getSigner(wallet.address)
const contract = new ethers.Contract(contractAddress, mintAbi, wallet)

const test = "test"
const royalty = 123
const address = "0x804eb287f65331109664A28624503D04588A20b1"

async function mint() {
  /*let orga = args["orga"];
  let event = args["event"];
  let sport = args["sport"];
  let epreuve = args["epre"];
  let royalty = args["royalty"];
  let uri = args["uri"];
  let to = args["to"];
  let medailleId = args["medalId"];*/
  try{
    await contract.mint(test, test, test, test, royalty, test, address, test)
    console.log("mint done !");
  }catch(e){
    console.log(e)
  }
}

// mint()

const PORT_BACK = process.env.PORT_BACK || 6000

app.listen(PORT_BACK, function () {
    console.log(`Le serveur express est en route sur le port: http://localhost:${PORT_BACK}`);
  });