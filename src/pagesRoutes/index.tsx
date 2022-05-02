import { BrowserRouter, Route, Routes } from "react-router-dom";
import Actor from "../pages/Actor";
import Actors from "../pages/Actors";
import CategoryMovie from "../pages/CategoryMovie";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Movie from "../pages/Movie";
import Movies from "../pages/Movies";

const PagesRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:slug" element={<Movie />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/actors/:slug" element={<Actor />} />
        <Route path="/categories/:slug/movies" element={<CategoryMovie />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
