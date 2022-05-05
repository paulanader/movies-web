import { BrowserRouter, Route, Routes } from "react-router-dom";

import Actor from "../pages/Actor";
import Actors from "../pages/Actors";
import Browse from "../pages/AdminPages/Browse";
import CategoryMovie from "../pages/CategoryMovie";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Movie from "../pages/Movie";
import Movies from "../pages/Movies";
import UpDateCategory from "../pages/AdminPages/Categories/UpDateCategory";
import AdminCategory from "../pages/AdminPages/Categories/AdminCategory";
import AddCategory from "../pages/AdminPages/Categories/AddCategory";
import AdminActor from "../pages/AdminPages/Actors/AdminActor";
import AddActor from "../pages/AdminPages/Actors/AddActor";
import UpdateActor from "../pagesAdmin/Actors/UpdateActor";

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
        <Route path="/admin/movies" element={<AdminActor />} />
        <Route path="/admin/addmovie" element={<AddActor />} />
        <Route path="/admin/updatemovie/:slug" element={<UpdateActor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PagesRoutes;
