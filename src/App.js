import logo from './logo.svg';
import Home from './Home.jsx'
import { ethers } from "ethers";
import './App.css';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom'  
import '@rainbow-me/rainbowkit/styles.css';
import {darkTheme } from '@rainbow-me/rainbowkit';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { useState } from 'react';
import Dapp2 from './components/dapp/Dapp2';
import Navbar from './components/navbar/Navbar';




const getacc = async() => {
  const getttt = await window.ethereum.request({
    method:"eth_requestAccounts",

  })
  return getttt[0]

} 



const BSCchain = {
  id: 56, 
  name: 'BSC',
  network: 'BSC',
  iconUrl: 'https://example.com/icon.svg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Smart Chain',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: 'https://bsc-dataseed1.ninicoin.io',
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://bscscan.com' },
    etherscan: { name: 'SnowTrace', url: 'https://bscscan.com' },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [chain.mainnet,BSCchain, chain.polygon, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);



const { connectors } = getDefaultWallets({
  appName: 'Matrix Labs',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


const App = () => {
  return (
    <Router>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme({
        accentColor: '#00C88C',
        accentColorForeground: 'white',
        borderRadius: 'medium',
        fontStack:"10px"
      })}
      >
        <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/step2" element={<><Navbar /><Dapp2/></>} />  4
      </Routes>
            </RainbowKitProvider>
    </WagmiConfig>
    </Router>
  );
};

export default App;