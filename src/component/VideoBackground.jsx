import { useSelector } from "react-redux";
import UseMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  UseMovieTrailer(movieId);
  const trailer = useSelector((state) => state.movies?.trailerVideo);

  return (
    <div>
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&loop=1&playlist=${trailer?.key}&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
