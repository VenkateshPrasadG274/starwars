import React from "react";
import "./../App.css";
import "./ActorDetails.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ActorDetails() {
  const { characterId } = useParams();
  const [actorData, setActorData] = useState([]);

  const performApiCall = async () => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people/${characterId}`
      );
      setActorData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    performApiCall();
  }, []);

  return (
    <div className="background-image-class">
      <div className="card">
        <p className="name">{actorData.name}</p>
        <p>Height : {actorData.height}</p>
        <p>Mass : {actorData.mass}</p>
        <p>Birth Year : {actorData.birth_year}</p>
        <p>Gender : {actorData.gender}</p>

        <Link to="/starships" className="starships-link">
          <p>Starships:</p>
        </Link>
        {actorData.starships &&
          actorData.starships.map((item, index) => <p key={index}>{item}</p>)}
      </div>
    </div>
  );
}

export default ActorDetails;
