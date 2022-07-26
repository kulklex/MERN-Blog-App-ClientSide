import React from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import SinglePost from "./pages/SinglePost";
import Page404 from "./pages/Page404/Page404";

function App() {
  const user = true
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="*" element={<Page404/>}/>
        <Route path="/" element={user ? <Home /> : <Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/write" element={user ? <Write/> : <Login/>} />
        <Route path="/settings" element={user ? <Settings/> : <Login/>} />
        <Route path="/posts/:id" element={<SinglePost/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
