const { expect } = require("chai");
const ReactDom= require ("react-dom")
const web3 = require ("web3")
const { ethers } = require("hardhat");
const { Signer, BigNumber, ContractFactory, Contract } =require("ethers");
const etherprojectprovider = require ("@ethersproject/providers")
const etherprojectnetwork = require ("@ethersproject/networks")
const {SignerWithAddress} = require("@nomiclabs/hardhat-ethers/signers");
//const { expect } = require( "chai");
const chai  = require("chai");
const chaiaspromised = require("chai-as-promised");
const { Wallet } = require("ethers");

const assert = require('assert');
//const { doesNotMatch } = require("assert");
let dotenv =require('dotenv');
dotenv.config()

let gnosissafeaddresshere;
let provider; 
let contractaddress; 
let gnosisSafeGetAddressescontractx;

let signer;
let gnosissafestring; 

let myaddress = "0x06Da25591CdF58758C4b3aBbFf18B092e4380B65";
let signeraddress;
let walletaddress;
let safestring ="0x345";




  
  //it("Should deploy via metamask and web3 provider", async () => {
  
 //   if (typeof window !== 'undefined' ) {

 //     provider = new ethers.providers.Web3Provider(window.ethereum);
 //     console.log("This is " +provider)
    // await provider.send("eth_requestAccounts", []);
 //}
 
 
  //});

   //  provider = new ethers.providers.getDefaultProvider("ropsten");
  //  signer = provider.getSigner()

     //signeraddress =signer._address;

    // `beforeEach` will run before each test, re-deploying the contract every
  // time. It receives a callback, which can be async.
  beforeEach(async function () {
    // Get the ContractFactory and Signers here.


   
      
      });
    

     describe("Token contract", function () {
        //  const signer = await  ethers.getSigners()
     //   console.log ("This is the signer ", signer[0])
        

      it("Deployment should assign the total supply of tokens to the owner", async function () {
  
   //    const network = await etherprojectnetwork.getNetwork('ropsten')
     //   console.log(network)

         
      const provider = await etherprojectprovider.InfuraProvider.getUrl('ropsten',String(process.env.ROPSTEN_KEY));


       console.log("This is my provider" + provider);
        let GnosisSafeGetAddresses = await ethers.getContractFactory("GnosisSafeGetAddresses");
        let gnosisSafeGetAddressescontract = await GnosisSafeGetAddresses.deploy();
         console.log("This is deployment" + await gnosisSafeGetAddressescontract);
        
         
       gnosissafeaddresshere=  await gnosisSafeGetAddressescontract.deployed();
       console.log ("This is after being deployed " + await gnosissafeaddresshere )
      
     let transactiontx = await gnosisSafeGetAddressescontract.storeGnosisSafeAddress(myaddress,safestring);
         


    

     })
    
     })
    
    
    
    //beforeEach(async function () {

    
  
      // MetaMask requires requesting permission to connect users accounts
     
    
      // The MetaMask plugin also allows signing transactions to
      // send ether and pay to change state within the blockchain.
      // For this, you need the account signer...
    //   signer = provider.getSigner()
      //console.log ("This is the signer" + signer)
  
  
     // expect(await gnosisSafeGetAddressescontract.greet()).to.equal("Hello, world!");
  
     // await greeter.setGreeting("Hola, mundo!");
    //  expect(await greeter.greet()).to.equal("Hola, mundo!");
   // });

     // it("It should pass the store of gnosis safes", async () => {
     
    
      
    //  })
    
