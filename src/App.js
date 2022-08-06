import React from "react";
import { Article, Brand, Cta, Feature, Navbar } from "./components";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  Whatrahro,
  Header,
} from "./container";
import "./App.css";
import Profile from "./container/Profile/Profile";
// import Experince from "./container/Profile/experience/Experince.jsx"

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Profile />
        <Header />
      </div>
    </div>
  );
};

export default App;
