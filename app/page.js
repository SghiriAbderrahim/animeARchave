'use client';

import React, { useState, useEffect } from 'react';
import List from '../components/List';
import Load from '../components/loading';
import { useSearch } from '@/stores/store';

export default function Home() {

  


  //
  const page = useSearch((state) => state.page);
  const setPage = useSearch((state) => state.setPage);
  const animeData = useSearch((state) => state.animeData);
  const setAnimeData = useSearch((state) => state.setAnimeData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  //
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`);
      const data = await response.json();

      setAnimeData([...animeData, ...data.data]);
      setHasNext(data.pagination.has_next_page);
      setPage();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    
  }, []);
  const handleScroll = () => {
    if (
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight &&
      !isLoading &&
      hasNext
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);
  return (
    <div className="relative overflow-auto mt-14">
      <List />
      {isLoading && <Load />}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
