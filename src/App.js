import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import CollectionCard from './Components/CollectionCard'
import PunkList from './Components/PunkList'
import Main from './Components/Main'
import {useState, useEffect} from 'react' 
import axios from 'axios'


function App() {
const [punkListData, setPunkListData] =useState([])
const[selectedPunk, setSelectedPunk] =useState(0)
useEffect(() => {
  const getmyNFTs = async () => {
    const openseaData = await axios.get('https://cors-anywhere.herokuapp.com/https://testnets-api.opensea.io/assets?asset_contract_address=0x4D35f7FAC082f89F7D8A5bD6E5F7Cbf332E4eE72&order_direction=asc'
    )
    console.log(openseaData.data.assets)
    setPunkListData(openseaData.data.assets)
  }

  return getmyNFTs()
}, [])
  return (
   <div className="app" >
     <Header />
     {
      
       punkListData.length > 0 && (
        <>
        <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
        <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} 
        />
        </>
       )
     }
   </div>
  )
}

export default App;
