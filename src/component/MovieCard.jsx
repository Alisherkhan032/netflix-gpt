import React from 'react'
import {IMG_CDN_URL} from "../utils/constants";
import { useSelector } from 'react-redux';

const MovieCard = ({ImgPath}) => {
  
  return (
    <div className='w-56 cursor-pointer'>
        <img src={IMG_CDN_URL+ImgPath} alt="movie-card" />
    </div>
  )
}

export default MovieCard