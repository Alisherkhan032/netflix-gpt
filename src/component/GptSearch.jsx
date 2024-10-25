import React from 'react'
import GptSearchBar from './GptSearchBar.jsx'
import GptMovieSuggestion from './GptMovieSuggestion'
import netflixBG from "../assets/netflix-background.jpg"

const GptSearch = () => {
  return (
    <div>
      <div>
        <img className="fixed h-screen w-screen object-cover -z-10" src={netflixBG} alt="" />
      </div>
      <div className='pt-40 md:pt-0'>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  )
}

export default GptSearch