import { ActorProvider } from "./hooks/ActorProvider";
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
            <PagesRoutes />
          </ActorProvider>
        </MovieProvider>
      </CategoryProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
