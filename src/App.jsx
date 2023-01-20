import { useState, useEffect } from 'react'
import './App.css'
import GiphyImage from './GiphyImage/GiphyImage'
import Form from './Form/Form'

function App() {
  const [image, setImage] = useState({});
  const [searchInfo, setSearchInfo] = useState("");

  function liftSearch(search){
    setSearchInfo(search)
  };

  useEffect(() => {
    const randomImgUrl = "https://api.giphy.com/v1/gifs/random?api_key=kBMnlJoZPY9NJYJpo7L17qaO2kHRbyr1&tag=&rating=g" 
    
    async function makeApiCall(){
      try {
        const res = await fetch(randomImgUrl)
        console.log(res, "Response from API")
        const data = await res.json()
        // console.log(data.data.images.downsized, "Data from API")
        setImage(data.data.images.downsized.url)
      } catch(err) {
        console.log(err, "Error in API Call")
      }
    }
    makeApiCall()
  }, [searchInfo])

  return (
    <div className="App">
      <h1>Giphy Project</h1>
        <Form liftSearch={liftSearch} />
        <GiphyImage image={image} />
        
    </div>
  )
}

export default App
