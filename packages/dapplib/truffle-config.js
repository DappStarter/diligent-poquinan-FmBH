require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remind assume imitate prize fortune seat'; 
let testAccounts = [
"0x3eefba8f065a392d5d2c785f140faa0533e6c58f6a4e37c295d5b1bc92d3ddd7",
"0x2596be41783fd9b0f3ba9b97c763b2d0e0b4c05d3f27cef8b6921193cd8334a3",
"0x9ea3c9cfc1e43f687fe7b1d3b49c84dbb0c857c7246912806ae52208a9dad6a5",
"0x9ac4a5456c40b55f4a9544d0ea58a2845974d31d8d4caf2dd9ac311e4422645e",
"0x4f8af62c35b8bc3f8588205ef3cfe1e2a33dc758dd7a091564aca011ee7cb0a8",
"0xe222455f859e95bb1593fa35e25556ef423667105981a99d174c3afdd02340fe",
"0x70f5a3100d899f5672809d0acbf5707ad7667bd8e5b79089d6fe9da6982211a2",
"0x6777c7ef5847987093d8c635f55de188c88efdb7e4b7973d1b563ae0e62fedfb",
"0x1314a5d2462d12a07776730353d0d987812d9930078bc6eaef209069964610e1",
"0x4c47fa6f4399359bad7740c776739bc127ab257721f3c45d1ab877a50fafaa78"
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
            version: '^0.8.0'
        }
    }
};

