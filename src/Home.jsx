import React from 'react'
import Dapp from './components/dapp/Dapp';
import Dapp2 from './components/dapp/Dapp2';
import Landing from './components/landing/Landing';
import Navbar from './components/navbar/Navbar';


const Home = () => {
  return (
<>
<Navbar />
<div className='main_body'>
  <Landing />
  <Dapp />
</div>
</>

)
}

export default Home