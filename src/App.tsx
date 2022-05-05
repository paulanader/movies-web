import { ActorProvider } from "./hooks/ActorProvider";
import { AdminActorProvider } from "./hooks/Admin/AdminActorProvider";
import { AdminCategoryProvider } from "./hooks/Admin/AdminCategoryProvider";
import { AdminMovieProvider } from "./hooks/Admin/AdminMovieProvider";
import { CategoryProvider } from "./hooks/CategoryProvider";
import { MovieProvider } from "./hooks/MoviesProvider";
import PagesRoutes from "./pagesRoutes";
import { GlobalStyle } from "./styles/globals";

const App: React.FC = () => {
  return (
    <>
      <CategoryProvider>
        <MovieProvider>
          <ActorProvider>
            <AdminCategoryProvider>
              <AdminMovieProvider>
                <AdminActorProvider>
                  <PagesRoutes />
                </AdminActorProvider>
              </AdminMovieProvider>
            </AdminCategoryProvider>
          </ActorProvider>
        </MovieProvider>
      </CategoryProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
