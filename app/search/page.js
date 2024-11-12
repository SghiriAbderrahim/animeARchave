'use client';

import React, { useState, useEffect } from 'react';
import Load from '../../components/loading';
import List from '../../components/List';
import { useSearch } from '@/stores/store';
import SearchInput from '../../components/SearchInput'
export default function Search() {
  const reLoad = useSearch((state) => state.reLoad);
  const searchValue = useSearch((state) => state.search);
  const setSearchValue = useSearch((state) => state.setSearch);
  const page = useSearch((state) => state.page);
  const setPage = useSearch((state) => state.setPage);
  const type = useSearch((state) => state.type);
  const typeValue = type === '' ? '' : `type=${type}&`;
  const statu = useSearch((state) => state.statu);
  const statuValue = statu === '' ? '' : `status=${statu}&`;
  const rating = useSearch((state) => state.rating);
  const ratingValue = rating === '' ? '' : `rating=${rating}&`;
  const producers = useSearch((state) => state.producers);
  const producersValue = producers.length === [].length ? '' : `producers=${producers}&`;
  const genres = useSearch((state) => state.genres);
  const genresValue = genres.length === [].length ? '' : `genres=${genres}&`;
  const animeData = useSearch((state) => state.animeData);
  const setAnimeData = useSearch((state) => state.setAnimeData);
  const sortValue = useSearch((state) => state.sort);
  const sortDirection = useSearch((state) => state.sortDirection);
  const reset = useSearch((state) => state.reset);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const [error, setError] = useState(null);
  //
  useEffect(() => {
    reset();
  }, []);
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime?${genresValue}${producersValue}${typeValue}${statuValue}${ratingValue}&q=${searchValue}&order_by=${sortValue}&sort=${sortDirection ? 'desc' : 'asc'
        }&page=${page}`
      );
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
  const searching = async () => {
    setSearchValue(document.getElementById('inSearch').value);
  };
  useEffect(() => {
    fetchData();
  }, [searchValue, reLoad]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 50 &&
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
    <div className="overflow-auto pt-14 flex flex-col">
      <SearchInput search={searching()} />
      <List />
      {isLoading && <Load />}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
