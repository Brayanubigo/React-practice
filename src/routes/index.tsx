import React from "react";
import { Route, Routes } from "react-router";

const Pokedex = React.lazy(() => import("../views/Pokedex"));

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <React.Suspense fallback={<div>Loading...</div>}>
          <Pokedex />
        </React.Suspense>
      }
    />
  </Routes>
);
export default AppRoutes;
