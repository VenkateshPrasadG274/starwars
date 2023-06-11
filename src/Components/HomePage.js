import React from "react";
import { useState, useEffect ,} from "react";
import axios from "axios";
import "./../App.css";
import "./HomePage.css"
import { Link } from "react-router-dom";

function HomePage() {

  const [movies, setMovies] = useState([]);

  const performApiCall = async () => {
    try {
      let url = "https://swapi.dev/api/films/";
      let response = await axios.get(url);

      console.log(response.data.results);
      setMovies(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    performApiCall();
  }, []);

  return (
    <div className="background-image-class">
      <h1 className="title">StarWar Films</h1>
      {movies.length > 0 &&
        movies.map((item, index) => (
          <div key={index} className="movie-item">
            <h2 className="movie-title">
              <a href={item.episode_id}>{item.title}</a>
            </h2>
            <p className="movie-description">{item.opening_crawl}</p>
            <ul className="movie-details">
              <li>
                <strong>Director:</strong> {item.director}
              </li>
              <li>
                <strong>Producers:</strong> {item.producer}
              </li>
              <li>
                <strong>Release Date:</strong> {item.release_date}
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
}

export default HomePage;
