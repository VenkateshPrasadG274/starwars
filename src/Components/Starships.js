import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./../App.css";
import "./Starships.css";
import { Link } from "react-router-dom";

function Starships() {
  const [starships, setStarships] = useState([]);

  const performApiCall = async () => {
    try {
      let url = "https://swapi.dev/api/starships/";
      let response = await axios.get(url);

      console.log(response.data.results);
      setStarships(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    performApiCall();
  }, []);

  return (
    <div className="background-image-class">
      {/* {starships.length > 0 &&
        starships.map((item, index) => (
          <ul>
            <li key={index}>{item.name}</li>
            <li>{item.model}</li>
            <li>{item.manufacturer}</li>

          </ul>
        ))} */}
      {starships.length > 0 &&
        starships.map((item, index) => (
          <div key={index} className="starship-item">
            <h2 className="starship-title">{item.name}</h2>

            <ul className="starship-details">
              <li>
                <strong>Model:</strong> {item.model}
              </li>
              <li>
                <strong>Manufacturer:</strong> {item.manufacturer}
              </li>
              <li>
                <li>
                  <strong>Cost_in_credit:</strong> {item.cost_in_credit}
                </li>
                <li>
                  <strong>Crew:</strong> {item.crew}
                </li>
                <li>
                  <strong>Passengers:</strong> {item.passengers}
                </li>
                <strong>Cargo_capacity:</strong> {item.cargo_capacity}
              </li>
              <li>
                <strong>Hyperdrive_rating:</strong> {item.hyperdrive_rating}
              </li>
              <li>
                <strong>Starship_class:</strong> {item.starship_class}
              </li>
            </ul>
          </div>
        ))}

      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Starships;
