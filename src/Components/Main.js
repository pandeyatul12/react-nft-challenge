import React, {useState, useEffect} from 'react' 
import instagramlogo from '../assets/owner/instagram.png'
import twitterlogo from '../assets/owner/twitter.png'
import moreicon from '../assets/owner/more.png'
import './Main.css'


const Main = ({ selectedPunk, punkListData }) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])
    console.log(selectedPunk)
    console.log(punkListData[selectedPunk])

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])
    
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img className='selectedPunk' src={activePunk.image_original_url} alt='' />
                    </div>
                </div>

                <div className='punkDetails' style={{color: '#fff'}}>
                    <div className='title' >
                        {activePunk.name}
                    </div>
                    <span className='itemNumber' >.#{activePunk.token_id}</span>
                </div>
                <div className='owner'>
                    
                        <div className='ownerLink'>
                            <img src={instagramlogo} alt='' />
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterlogo} alt='' />
                        </div>
                        <div className='ownerLink'>
                            <img src={moreicon} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Main
