import React, { useState } from "react";
import "./Rentalss-ta.css";
// import "../Nav/Nav.css";

const districts = [
  "Tiruchirapalli",
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Selam",
  "Tirunelveli",
  "Thiruppur",
  "Erode",
  "Thanjavur",
  "Vellore",
  "Dindukal",
  "Thoothukudi",
  "Nagarkovil",
  "Karur",
  "Cudallore",
  "Pudukottai",
  "Villupuram",
  "Nagapattinam",
  "Dharmapuri",
  "Sivagangai",
  "Rameshwaram",
  "Krishnagiri",
  "Perambalore",
  "Ariyalur",
  "Thiruvannamalai",
  "Thiruvarur",
  "Kanchipuram",
  "Nammakal",
  "Theni",
  "Virudhunagar",
  "Nilagiri",
  "Kodaikanal",
  "Kaniyakumari",
  "Bangalore",
  "Wayanad",
  "Cochin",
  "Sabarimalai",
];

const distances = {
  "Tiruchirapalli-Madurai": 130,
  "Tiruchirapalli-Coimbatore": 220,
  "Tiruchirapalli-Sabarimalai": 350,
  "Tiruchirapalli-Wayanadu": 445,
  "Tiruchirapalli-Cochin": 405,
  "Tiruchirapalli-Bangalore": 325,
  "Tiruchirapalli-Kanyakumari": 385,
  "Tiruchirapalli-Kodaikannal": 200,
  "Tiruchirapalli-Chennai": 330,
  "Tiruchirapalli-Salem": 141,
  "Tiruchirapalli-Tirunelveli": 298,
  "Tiruchirapalli-Thiruppur": 175,
  "Tiruchirapalli-Erode": 146,
  "Tiruchirapalli-Thanjavur": 60,
  "Tiruchirapalli-Vellore": 275,
  "Tiruchirapalli-Dindukal": 110,
  "Tiruchirapalli-Thoothukudi": 280,
  "Tiruchirapalli-Nagarkovil": 385,
  "Tiruchirapalli-Karur": 85,
  "Tiruchirapalli-Cuddalore": 190,
  "Tiruchirapalli-Pudukottai": 60,
  "Tiruchirapalli-Villupuram": 165,
  "Tiruchirapalli-Nagapatinam": 140,
  "Tiruchirapalli-Dharmapuri": 210,
  "Tiruchirapalli-Sivagangai": 135,
  "Tiruchirapalli-Rameshwaram": 185,
  "Tiruchirapalli-Krishnagiri": 255,
  "Tiruchirapalli-Perambalur": 60,
  "Tiruchirapalli-Ariyalur": 75,
  "Tiruchirapalli-Thiruvanmalai": 185,
  "Tiruchirapalli-Thiruvarur": 115,
  "Tiruchirapalli-Kanchipuram": 280,
  "Tiruchirapalli-Nammakal": 90,
  "Tiruchirapalli-Theni": 180,
  "Tiruchirapalli-Virudhunagar": 195,
  "Tiruchirapalli-Nilagiri": 285,
};

const Rental = () => {
  const [fromDistrict] = useState("Tiruchirapalli");
  const [toDistrict, setToDistrict] = useState("");
  const [result, setResult] = useState("");

  const calculateDistance = () => {
    if (!toDistrict) {
      setResult("Please select a district.");
      return;
    }

    if (fromDistrict === toDistrict) {
      setResult("₹ 0.00");
      return;
    }

    const route = `${fromDistrict}-${toDistrict}`;
    const reverseRoute = `${toDistrict}-${fromDistrict}`;

    const distance = distances[route] || distances[reverseRoute];

    if (!distance) {
      setResult("Distance data not available.");
      return;
    }

    const price = distance * 10;
    setResult(`₹ ${price.toFixed(2)} Per Member`);
  };

  return (
    <div className="Rental" id="Rental">
      <h3 className="rent">வாடகைகள்</h3>

      <div className="tables">
        <h3>மாவட்ட வாரியாக வாடகைகள்</h3>

        <table>
          <thead>
            <tr>
              <th>வரி எண்</th>
              <th>முதல்</th>
              <th>To</th>
              <th>விலை</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>01</td>

              <td>
                <select value={fromDistrict} disabled>
                  <option>{fromDistrict}</option>
                </select>
              </td>

              <td>
                <select
                  value={toDistrict}
                  onChange={(e) => setToDistrict(e.target.value)}
                >
                  <option value="">-- Select District --</option>

                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </td>

              <td>{result}</td>
            </tr>
          </tbody>
        </table>

        <button onClick={calculateDistance}>
          விலையைக் கணக்கிடுங்கள்
        </button>
      </div>

      <div className="table">
        <h3>வாடகைகள்</h3>

        <table>
          <thead>
            <tr>
              <th>வரி எண்</th>
              <th>நாட்கள்</th>
              <th>விலை</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5, 6].map((day) => (
              <tr key={day}>
                <td>{String(day).padStart(2, "0")}</td>
                <td>{day} Days</td>
                <td>₹ {day * 3000}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="note">
        <h4>குறிப்பு :</h4>
        <ul>
          <li>டீசல் விலை இல்லாமல் விலைகள் உள்ளன.</li>
          <li>ஏசி இல்லாமல் விலைகள் உள்ளன.</li>
          <li>கூடுதல் விலைகள் ஏசிக்கான கட்டணங்கள் ஆகும்.</li>
        </ul>
      </div>
    </div>
  );
};

export default Rental;