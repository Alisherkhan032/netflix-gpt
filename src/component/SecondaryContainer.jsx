import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store.movies);
  
  return (
    <div className='md:-mt-40 md:pl-10 pl-2 bg-black'>
      <MovieList title={"New on Netflix"} movies={movies["NowPlayingMovies"]} />
      <MovieList 
        title={"Popular Movies"} 
        movies={movies["PopularMovies"]} 
      />
      <MovieList title={"Top Rated Movies"} movies={movies["TopRatedMovies"]} />
      <MovieList 
        title={"Upcoming Movies"} 
        movies={Array.isArray(movies["UpcomingMovies"]) ? [...movies["UpcomingMovies"]].reverse() : []} 
      />
      {/* <MovieList title={"Horror Movies"} movies={movies["NowPlayingMovies"]} />  */}
    </div>
  )
}

export default SecondaryContainer