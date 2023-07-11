import { useState } from 'react'
import './Style.css'
import BigImage from './components/BigImage'
import ImgData from './components/ImgData'


function App() {

  const [imgSrc, setImgId] = useState(0)

  const [imgData,setImgData] = useState(ImgData)

  function changeHandler(id) {

    setImgId(id)
  }

  function clearHandler(e){
    console.log(imgData)
    setImgData([])
  }

  
  

  return (
    <>
      <div className='container'>
        <div className='imageBig'>
          <BigImage bigImgSrc={ImgData[`${imgSrc}`].src} />
        </div>
        <br />
        <h2>{imgData.length} More photo found...</h2>
      </div>
      <div className='grid'>
        <div className='thumb'>
        {
          imgData.map((item, index) => <img
            onClick={() => changeHandler(index)}
            className='thumbImg'
            src={item.src}
            key={index}
             />
            )
            
        }
        </div>
        
        <button 
       
        onClick={()=>clearHandler()}
        className='clearButton'>All Clear</button>
      </div>
      


    </>
  )
}

export default App
