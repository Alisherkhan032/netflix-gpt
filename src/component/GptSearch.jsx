import React from 'react'
import GptSearchBar from './GptSearchBar.jsx'
import GptMovieSuggestion from './GptMovieSuggestion'
import netflixBG from "../assets/netflix-background.jpg"

const GptSearch = () => {
  return (
    <div>
      <div>
        <img className="absolute -z-10" src={netflixBG} alt="" />
      </div>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch