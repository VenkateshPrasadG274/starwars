import React from "react";
import { useState, useEffect ,} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PlanetDetail() {

  const [planets, setPlanets] = useState([]);

  const performApiCall = async () => {
    try {
      let url = "https://swapi.dev/api/planets/";
      let response = await axios.get(url);

      console.log(response.data.results);
      setPlanets(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    performApiCall();
  }, []);

  return (
    <div>
      {planets.length > 0 &&
        planets.map((item, index) => (
          <ul style={{ backgroundColor: "black", color: "white" }}>
            <li key={index}>{item.name}</li>
            <li>{item.rotation_period}</li>
            <li>{item.orbital_period}</li>
            <li>{item.diameter}</li>
            <li>{item.climate}</li>

          </ul>
        ))}
        <Link to="/:movieId"><button>MovieDetails Page</button></Link>
        <Link to="/people/:characterId"><button>People Page</button></Link>
    </div>
  );
}

export default PlanetDetail;
