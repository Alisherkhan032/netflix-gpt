import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import Spinner from '../component/Spinner'

const GptMovieSuggestion = () => {
  const {movieNames, movieResults} = useSelector((store) => store.gpt)

  if(!movieNames) return null
  console.log(movieResults)
  return (
    <div className='p-4 m-4 bg-black bg-opacity-80 text-white'>
      {movieNames.map((movieName, idx)=>(
          <MovieList key={idx} title={movieName}  movies={movieResults[idx]} />
      ))}
    </div>
  )
}

export default GptMovieSuggestion