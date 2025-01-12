import React, { useState } from "react"
import { FaSpotify } from "react-icons/fa";
import axios from "axios";

function App() {
  const[url,setUrl]=useState('')
 
  const songUrl = (e) => {
    e.preventDefault();
    setUrl(e.target.value)
  }
  console.log(url)

const songDownloader = async() => {
  setUrl("")
  const options = {
    method: 'GET',
    url: 'https://spotify-downloader9.p.rapidapi.com/downloadSong',
    params: {
      songId: `${url}`
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_API_KEY,
      'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
    }
  };
  try {
    const resp = await axios.request(options)
    console.log(resp.data.data.downloadLink)
    window.location.href=resp.data.data.downloadLink
  } catch (error) {
    console.log(error)
  }
}



  return (
    <div className="h-screen w-screen  bg-gradient-to-l from-fuchsia-900 via-purple-400 to-indigo-700 flex items-center justify-center flex-col gap-y-10">
      <div className=" flex items-center justify-center gap-x-3 text-2xl font-black">
        <FaSpotify size={100} />
        <p> Spotify Downloader</p>
      </div>
      <div className="flex gap-x-3">
        <input type="url" placeholder="Enter URL" className="text-black bg-violet-300 h-10 w-[450px] outline-none border-none rounded-lg px-5" onChange={songUrl} value={url} />
        <button className="bg-violet-300 h-10 px-2 rounded-lg font-bold hover:bg-fuchsia-800" onClick={songDownloader}>Downlaod</button>
      </div>
    </div>
  )
}

export default App
