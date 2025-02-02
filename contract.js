import { tigerAddress, tigerAbi } from './contracts/tiger-fight-club.js';
import { wordsAddress, wordsAbi } from './contracts/cryptowords.js';
import { web3 } from './connectWallet.js';

export let address;
export let abi;

if (window.location.hostname.includes('cryptowords')) {
  address = wordsAddress;
  abi = wordsAbi;
} else if (window.location.hostname.includes('tigersfightclub.com')) {
  address = tigerAddress;
  abi = tigerAbi;
}

export let contract = new web3.eth.Contract(abi, address);
