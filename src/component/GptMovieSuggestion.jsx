import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const {movieNames, movieResults} = useSelector((store) => store.gpt)

  console.log('moviesNames r', movieNames);

  if(!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black bg-opacity-80 text-white'>
     <div>
        {movieNames.map((movieName, idx)=>(
          <MovieList key={idx} title={movieName}  movies={movieResults[idx]} />
        ))}
     </div>
    </div>
  )
}

export default GptMovieSuggestion