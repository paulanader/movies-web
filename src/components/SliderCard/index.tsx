import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ADecoration, Cover, LinkDecoration } from "./styles";
import { MovieType } from "../../@types/MovieType";
import { Fragment } from "react";
import { MdPlayArrow } from "react-icons/md";
import { GoStar } from "react-icons/go";

const responsive = [
  {
    breakpoint: 1400,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 750,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

interface ISliderImageProps {
  images: MovieType[];
  url: string;
}

export const SliderCard: React.FC<ISliderImageProps> = ({ images, url }) => {
  return (
    <div>
      {images.length > 3 ? (
        <Slider
          className="mb-4"
          dots
          infinite
          speed={500}
          autoplay
          autoplaySpeed={3000}
          slidesToShow={4}
          slidesToScroll={2}
          initialSlide={0}
          responsive={responsive}
          pauseOnHover
        >
          {images.map((img) => (
            <div key={img.id} className="p-3">
              <div>
                <Cover style={{ backgroundImage: `url(${img.cover})` }} />
              </div>
              <div className="mb-3 mt-1 align-items-center">
                <div>
                  <GoStar color="#FFD640" size={19} className="me-2" />
                  <span className="text-white">{img.score}</span>
                </div>
              </div>
              <LinkDecoration to={`/${url}/${img.slug}`} className="fs-5">
                <h2 className="fs-md mb-2 mt-0">{img.title}</h2>
              </LinkDecoration>
              <div className="justify-content-center">
                <ADecoration
                  to={`movies/${img.slug}`}
                  target="_blank"
                  className="fs-5"
                  rel="noreferrer"
                >
                  <MdPlayArrow color="#ffffff" size={22} className="me-2" />
                  <span>Trailer</span>
                </ADecoration>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="d-flex">
          {images.map((img) => (
            <Fragment key={img.id}>
              <div className="flex-grow-1 align-self-stretch mb-4">
                <Cover style={{ backgroundImage: `url(${img.cover})` }} />
              </div>
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};
