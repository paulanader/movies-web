import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { MovieType } from "../../@types/MovieType";

interface IGalleryCarouselProps {
  movies: MovieType[];
}

const GalleryCarousel: React.FC<IGalleryCarouselProps> = ({ movies }) => {
  const images = movies.map((movie) => ({
    src: `${movie.cover}`,
  }));
  <h1>Button</h1>;

  return (
    <>
      <Carousel
        images={images}
        isAutoPlaying={true}
        canAutoPlay={true}
        thumbnailHeight={"30%"}
        hasMediaButton
        style={{ height: 500, width: 800 }}
      />
    </>
  );
};

export default GalleryCarousel;
