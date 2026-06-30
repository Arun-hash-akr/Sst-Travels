import React from "react";
import Hero from "../Hero/Hero";
import Explore from "../Explore/Explore";
import Service from "../Service/Service";
import Rental from "../Rental/Rental";
import Contact from "../Contact/Contact";
import Gallaries from "../Gallary/Gallaries";

const Home = () => {
    return (
        <>
            {/* <div id="Home"><Home /></div> */}
            <div id="Home"><Hero /></div>
            <div id="Explore"><Explore /></div>
            <div id="Gallaries"><Gallaries /></div>
            <div id="Service"><Service /></div>
            <div id="Contact"><Contact /></div>
        </>
    );
};

export default Home;