import { Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from "../Nav/NavBars";
import Home from "../Home/Homes";
import Devotional from "../Devotional/Devotionals";
import Rental from "../Rental/Rentals";
import Thirunallar from "../Devotional/Thirunallars";
import Tirupathi from "../Devotional/Tirupathis";
import Thiruchendur from "../Devotional/Thiruchendurs";
import Palani from "../Devotional/Palanis";
import Rameshwaram from "../Devotional/Rameshwarams";

const Apps = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="" element={<Home />} />
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

export default Apps;