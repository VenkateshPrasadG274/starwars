import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function MovieDetails() {
  const { movieId } = useParams();




  const [myTitle, setMyTitle] = useState();
  const [myDirector, setMyDirector] = useState();
  const [myProducer, setMyProducer] = useState();

  const [myOpeningCrawl, setMyOpeningCrawl] = useState();

  const [myCharacters, setMyCharacters] = useState([]);
  const [myPlanets, setMyPlanets] = useState([]);

  const performApiCall = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/films/${movieId}`);

      setMyDirector(response.data.director);
      setMyTitle(response.data.title);
      setMyProducer(response.data.producer);
      setMyOpeningCrawl(response.data.opening_crawl);

  
      setMyCharacters(response.data.characters);
      setMyPlanets(response.data.planets);
    } catch (err) {
      console.log(err);
    }
  };

  
  



  useEffect(() => {
    performApiCall();
  }, []);


  return (
    <div className="background-image-class">
      <div className="movie-item">
        <h2 className="movie-title">{myTitle}</h2>
        <p className="movie-description">{myOpeningCrawl}</p>
        <div className="movie-details">
          <p>
            <strong>Director:</strong> {myDirector}
          </p>
          <p>
            <strong>Producers:</strong> {myProducer}
          </p>
        </div>
      </div>
      <div className="main-class">
        <div className="left-column"> Characters :
          {myCharacters.map((character, index) => (
            <p key={index}>
              <p>
                <Link
                  to={`/people/${character.split("/").slice(-2)[0]}`}
                  className="character-link"
                >
                  
                  <p>{character}</p>
                </Link>
              </p>
            </p>
          ))}
        </div>
        <div className="right-column"> Planets : 
          {myPlanets.map((item, index) => (   
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
