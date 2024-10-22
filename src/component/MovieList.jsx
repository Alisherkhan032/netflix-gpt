import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='px-2  relative z-10'>
      <h1 className='py-3 text-xl text-white'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-none'>
        <div className='flex gap-3'>
          {movies && movies?.map((movie)=>(
            <MovieCard key={movie.id} ImgPath={movie["poster_path"]} />
          ))}
        </div>
    </div>
    </div>
  )
}

export default MovieList