import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./Thirunallar.css";

import rmr from "./images/rmr.png";
import Tirupullani from "./images/Tirupullani1.png";
import Uthirakosamangai from "./images/Uthirakosamangai.png";
import Devipattinam from "./images/Devipattinam.png";
import pillayarpatti from "./images/pillayarpatti.png";

const images = [
    { src: rmr, name: "Rameshwaram" },
    { src: Tirupullani, name: "Tirupullani1" },
    { src: Uthirakosamangai, name: "Uthirakosamangai" },
    { src: Devipattinam, name: "Devipattinam" },
    { src: pillayarpatti, name: "Pillayarpatti" },
];

const Rameshwaram = () => {
    const navigate = useNavigate();
    const trackRef = useRef(null);
    const [index, setIndex] = useState(0);

    const handleBookNow = () => {
        window.open(
            "https://api.whatsapp.com/send?phone=919786515007&text=Hi,%20I%20want%20to%20book%20Rameshwaram%20PACKAGE.",
            "_blank"
        );
    };

    // AUTO SLIDE
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="tnr">
            <div className="head">
                <h2>Rameshwaram</h2>
                <Link to="/devotional" id="back">Back</Link>
            </div>

            {/* CAROUSEL */}
            <div className="carousel">
                <div
                    className="carousel-track"
                    ref={trackRef}
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                        transition: "0.5s ease-in-out",
                        display: "flex",
                    }}
                >
                    {images.map((item, i) => (
                        <div className="carousel-slide" key={i}>
                            <div className="image-name">{item.name}</div>
                            <img
                                src={item.src}
                                alt={item.name}
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* PLACES */}
            <div className="heads">
                <h3>Places to Visit in Rameshwaram</h3>
                <ul>
                    {images.map((item, i) => (
                        <li key={i}>{item.name}</li>
                    ))}
                </ul>
            </div>

            {/* TABLE */}
            <div className="tabel">
                <table>
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>To</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Trichy</td>
                            <td>Rameshwaram</td>
                            <td>3700</td>
                        </tr>
                    </tbody>
                </table>

                <p><strong>Note:</strong></p>
                <ul>
                    <li>Price is per person.</li>
                </ul>
            </div>

            {/* BUTTON */}
            <button onClick={handleBookNow}>Book Now</button>

            {/* MAP */}
            <div className="iframe">
                <iframe
                    title="Thirunallar Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31339.23081676506!2d79.76687612550674!3d10.932835247492632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5516f7ab3be1db%3A0x92ef1e1bb6f4746d!2sThirunallar%2C%20Puducherry%20609607!5e0!3m2!1sen!2sin!4v1742275234191!5m2!1sen!2sin"
                    width="800"
                    height="600"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Rameshwaram