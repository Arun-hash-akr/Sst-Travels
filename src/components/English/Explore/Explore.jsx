import React from "react";
import { Link } from "react-router-dom";
import "./Explore-en.css";

import dev from "../Explore/dev.png";
import rent from "../Explore/rental.png";

const Explore = () => {
  return (
    <>
      <div className="en-explore" id="Explore">
        <p>
          Lets get journey with us.. And make your journey safer, smoother,
          faster.. Choose Your package with the options below.
        </p>

        <div className="en-options">
          <div className="en-kar1">
            <img src={dev} alt="Devotional" />
            <h4>Devotional</h4>

            <Link to="/en/devotional" onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth", // or "auto"
              });
            }}>
              More
            </Link>
          </div>

          <div className="en-kar2">
            <img src={rent} alt="Rentals" />
            <h4>Rentals</h4>

            <Link to="/en/rentals" onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth", // or "auto"
              });
            }}>
              More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;