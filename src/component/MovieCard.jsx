import React from 'react'
import {IMG_CDN_URL} from "../utils/constants";
import { useSelector } from 'react-redux';

const MovieCard = ({ImgPath}) => {
  if(!ImgPath) return null;
  return (
    <div className='w-32 cursor-pointer md:w-56' >
        <img src={IMG_CDN_URL+ImgPath} alt="movie-card" />
    </div>
  )
}

export default MovieCard