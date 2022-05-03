import { BrowserRouter, Route, Routes } from "react-router-dom";

import Actor from "../pages/Actor";
import Actors from "../pages/Actors";
import Browse from "../pages/SistemPages/Browser";
import CategoryMovie from "../pages/CategoryMovie";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Movie from "../pages/Movie";
import Movies from "../pages/Movies";
import AddCategory from "../pages/SistemPages/AddCategory";

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
        <Route path="/browse" element={<Browse />} />
        <Route path="/browse/addcategory" element={<AddCategory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
