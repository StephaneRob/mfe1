import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

// const Home = lazy(() => import("./pages/Home"));

const Root = () => {
  // return <RouterProvider router={router} fallbackElement="Loading...." />;
  return (
    <div style={{ padding: "100px", backgroundColor: "#ff8787" }}>
      <Routes>
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Root;
