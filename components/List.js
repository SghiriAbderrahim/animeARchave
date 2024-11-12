'use client';

import React from 'react';
import AnimeContainer from './AnimeContainer';
import EpisodeContainer from './EpisodeContainer';
import { useSearch } from '@/stores/store';
import { usePathname } from 'next/navigation';

export default function List() {
  const path = usePathname();
  const animeData = useSearch((state) => state.animeData);
  const list = (list) => {
    if (!Array.isArray(list)) return null;
    return list.map((item, i) => <AnimeContainer key={i} anime={item} />);
  };
  return (
    <div className=" overflow-hidden w-fill grid lg:grid-cols-6  sm:grid-cols-4 grid-cols-2 gap-2 p-3">
      {list(animeData)}
    </div>
  );
}
