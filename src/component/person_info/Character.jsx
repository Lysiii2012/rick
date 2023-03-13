import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './character.css' 

function Character() {
  const { name } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCharacter(result.results[0]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [name]);

  if (error) {
    return <div>Error {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="character">
        
        <img src={character.image} alt={character.name} />
        <h1>{character.name}</h1>

        <h4 className="character_info">Informations</h4>
        <div className="character_info_more">
            <p>Gender: <span>{character.gender}</span></p>
            <p>Status: <span>{character.status}</span></p>
            <p>Specie: <span>{character.species}</span></p>
            <p>Origin: <span>{character.origin.name}</span></p>
            <p>Type: <span>Unknown</span></p>
        </div>
      </div>
    );
  }
}

export default Character;