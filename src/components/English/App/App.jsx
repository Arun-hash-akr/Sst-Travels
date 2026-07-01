import { Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "../Nav/NavBar";
import Home from "../Home/Home";
import Devotional from "../Devotional/Devotional";
import Rental from "../Rental/Rental";
import Thirunallar from "../Devotional/Thirunallar";
import Tirupathi from "../Devotional/Tirupathi";
import Thiruchendur from "../Devotional/Thiruchendur";
import Palani from "../Devotional/Palani";
import Rameshwaram from "../Devotional/Rameshwaram";

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route index element={<Home />} />
        <Route path="devotional" element={<Devotional />} />
        <Route path="rentals" element={<Rental />} />
        <Route path="thirunallaru" element={<Thirunallar />} />
        <Route path="tirupathi" element={<Tirupathi />} />
        <Route path="thiruchendur" element={<Thiruchendur />} />
        <Route path="palani" element={<Palani />} />
        <Route path="rameshwaram" element={<Rameshwaram />} />
      </Routes>
    </>
  );
};

export default App;