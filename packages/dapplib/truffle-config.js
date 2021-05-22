require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember hospital hunt logic front slogan'; 
let testAccounts = [
"0x2cbcdacb648df9353c0090b6c6235b8b1d925cf33f20963666379d7f80925a1f",
"0x65b710ae4d9980761e72dbec372f9f8a160161bf28d802761da822cfb09fe1d5",
"0x4bc1b6a4aeee18f746b8fe022c199c3c798301c2c5db115a104a53efb9674a4f",
"0x4a28a9090c4d889d1ce51165eabb0284df75f9f107728041e916139e0968559e",
"0xef2af76506e019036dd0971560564cc8d52d5789d1009bee46282c6b214122f3",
"0xb108aab9d10f91eb99a46048444107f0a16c7f8f5b13acc1dfa30d2d5459c825",
"0x87e1462b24ef98b3ce372b67e20e258c310cc9b5634982d6d3d86b67e196f57d",
"0xbe9fd8410187b1ea53fe149e3aa79cb9414729695943f73cfbcc5d5fba45cb8c",
"0x4faf2a508d85f1a97156174c780ea04f8684ddc1c1a9e715067d89b75789e0c3",
"0xf9db1aa1a55a9000e0ee0ba2d5dddcedb4cc2558edd5ef4551fcf9d4d0c22702"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
