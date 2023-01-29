import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Beauty from "./pages/Beauty";
import Clothing from "./pages/Clothing";
import Food from "./pages/Food";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
        <Routes>
          <Route path="/clothing" element={<Clothing></Clothing>}></Route>
        </Routes>
        <Routes>
          <Route path="/beauty" element={<Beauty></Beauty>}></Route>
        </Routes>
        <Routes>
          <Route path="/fast-food" element={<Food></Food>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
