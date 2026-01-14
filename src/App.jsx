import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import "./App.css";

function Layout() {
  return (
    <div className="main">
      <header className="h1">
        <h1 className="zagolov" id="zagolov1">JS Forge</h1>
        <nav className="tabs">
          <Link to="/" style={{ marginRight: "15px" }}>Главная</Link>
        </nav>
      </header>

      {/* Контент страниц */}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<FirstPage />} />
        <Route path="/SecondPage" element={<SecondPage />} />
      </Route>
    </Routes>
  );
}

export default App;
