import React, { useState, useEffect } from 'react';
import AnimeContainer from '../AnimeContainer';
export default function RelationDiv(promps) {
  const { data } = promps;
  const [animeData, setAnimeData] = useState("empty");
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${data.mal_id}`);
      const result = await response.json();
      setAnimeData(result.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return animeData == undefined ? null : (
    
    
      animeData === "empty" | undefined ? (
        <p>loading...</p>
      ) : (
     <AnimeContainer anime={animeData}/>
      )  

  )
}