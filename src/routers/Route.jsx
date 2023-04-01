import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import Private from "./Private";

export default function RoutesApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              // <Private>
                <Home />
              // </Private>
            }
          />
          <Route
            path="/home"
            element={
              // <Private>
                <Home />
              // </Private>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
