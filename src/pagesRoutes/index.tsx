import { BrowserRouter, Route, Routes } from "react-router-dom";

import Actor from "../pages/Actor";
import Actors from "../pages/Actors";
import CategoryMovie from "../pages/CategoryMovie";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Movie from "../pages/Movie";
import Movies from "../pages/Movies";
import AddActor from "../pagesAdmin/Actors/AddActor";
import AdminActor from "../pagesAdmin/Actors/AdminActor";
import UpdateActor from "../pagesAdmin/Actors/UpdateActor";
import Browse from "../pagesAdmin/Browse";
import AddCategory from "../pagesAdmin/Categories/AddCategory";
import AdminCategory from "../pagesAdmin/Categories/AdminCategory";
import UpDateCategory from "../pagesAdmin/Categories/UpDateCategory";
import AddMovie from "../pagesAdmin/Movies/AddMovie";
import AdminMovie from "../pagesAdmin/Movies/AdminMovie";
import UpdateMovie from "../pagesAdmin/Movies/UpdateMovie";

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
        <Route path="/admin" element={<Browse />} />
        <Route path="/admin/category" element={<AdminCategory />} />
        <Route path="/admin/addcategory" element={<AddCategory />} />
        <Route
          path="/admin/updatecategory/:slug"
          element={<UpDateCategory />}
        />
        <Route path="/admin/actors" element={<AdminActor />} />
        <Route path="/admin/addactor" element={<AddActor />} />
        <Route path="/admin/updateactor/:slug" element={<UpdateActor />} />
        <Route path="/admin/movies" element={<AdminMovie />} />
        <Route path="/admin/addmovie" element={<AddMovie />} />
        <Route path="/admin/updatemovie/:slug" element={<UpdateMovie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
