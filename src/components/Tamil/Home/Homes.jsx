import React from "react";
import Hero from "../Hero/Heros";
import Explore from "../Explore/Explores";
import Service from "../Service/Services";
import Rental from "../Rental/Rentals";
import Contact from "../Contact/Contacts";
import Gallaries from "../Gallary/Gallaryes";

const Homes = () => {
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

export default Homes;