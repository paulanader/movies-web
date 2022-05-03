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
import AllCategories from "../pages/SistemPages/AllCategories";
import UpDateCategory from "../pages/SistemPages/UpDateCategory";
import DellCategory from "../pages/SistemPages/DellCategory";
import AllActors from "../pages/SistemPages/AllActors";
import AddActor from "../pages/SistemPages/AddActor";
import UpdateActor from "../pages/SistemPages/UpdateActor";
import DellActor from "../pages/SistemPages/DellActor";
import AllMovies from "../pages/SistemPages/AllMovies";
import AddMovies from "../pages/SistemPages/AddMovies";
import UpdateMovie from "../pages/SistemPages/UpdateMovie";
import DellMovie from "../pages/SistemPages/DellMovie";

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
        <Route path="/browse/allcategories" element={<AllCategories />} />
        <Route path="/browse/updatecategory" element={<UpDateCategory />} />
        <Route path="/browse/dellcategory" element={<DellCategory />} />
        <Route path="/browse/allactors" element={<AllActors />} />
        <Route path="/browse/addactor" element={<AddActor />} />
        <Route path="/browse/updateactor" element={<UpdateActor />} />
        <Route path="/browse/dellactor" element={<DellActor />} />
        <Route path="/browse/allmovies" element={<AllMovies />} />
        <Route path="/browse/addmovies" element={<AddMovies />} />
        <Route path="/browse/updatemovies" element={<UpdateMovie />} />
        <Route path="/browse/dellmovie" element={<DellMovie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
