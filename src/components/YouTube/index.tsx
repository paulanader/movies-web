import { MovieType } from "../../@types/MovieType";
import { Size } from "./styles";

interface IYoutubeProps {
  videoId: MovieType;
}

const YouTubeVideo: React.FC<IYoutubeProps> = ({ videoId }) => {
  const id = videoId.trailer.split("=");
  return (
    <Size
      src={`https://www.youtube.com/embed/${id[1]}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};
export default YouTubeVideo;
