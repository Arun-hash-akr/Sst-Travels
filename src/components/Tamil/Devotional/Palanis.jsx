import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./Thirunallars-ta.css";

import Palani from "./images/palani.png";
import palaniandavar from "./images/pesum-palani-aandavar.png";
import paathalasembumurugan from "./images/paathala sembu murugan.png";
import kanakkanpatti from "./images/kanakkanpatti.png";

const images = [
    { src: Palani, name: "பழனி" },
    { src: palaniandavar, name: "பேசம் பழனி ஆண்டவர்" },
    { src: paathalasembumurugan, name: "பாதாள செம்பு முருகன்" },
    { src: kanakkanpatti, name: "கணக்கன்பட்டி" },
];

const Thirunallar = () => {
    const navigate = useNavigate();
    const trackRef = useRef(null);
    const [index, setIndex] = useState(0);

    const handleBookNow = () => {
        window.open(
            "https://api.whatsapp.com/send?phone=919786515007&text=Hi,%20I%20want%20to%20book%20PALANI%20PACKAGE.",
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
                <h2>பழனி</h2>
                <Link to="/ta/devotional" id="back">Back</Link>
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
                <h3>Places to Visit in Palani</h3>
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
                            <td>Palani</td>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31388.840434222!2d77.47755493506752!3d10.452881440982173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9de87ad84703f%3A0x15eb8f900655b911!2sPalani%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1742277693369!5m2!1sen!2sin"
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

export default Thirunallar