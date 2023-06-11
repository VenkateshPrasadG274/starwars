import HomePage from "./Components/HomePage";
// import { Router, Route } from "react-router-dom";
// import {Switch} from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ActorDetails from "./Components/ActorDetails";
import Starships from "./Components/Starships";
import PlanetDetail from "./Components/PlanetDetail";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/:movieId",
      element: <MovieDetails />,
    },
    {
      path: "/people/:characterId",
      element: <ActorDetails />,
    },
    {
      path: "/starships",
      element : <Starships/>
    },
    {
      path: "/planets",
      element : <PlanetDetail/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      
       
    </div>
  );
}
