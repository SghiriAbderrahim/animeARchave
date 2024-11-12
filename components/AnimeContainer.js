'use client';

import Image from 'next/image';
import React from 'react';
import { Star } from './svgs';
import Link from 'next/link';


const shimmer = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
  </svg>
`;

const toBase64 = (str) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

export default function AnimeContainer({ anime }) {
  return (
    <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id} aria-label={`عرض تفاصيل ${anime.title}`}>
      <div
        className="relative border-[var(--gr)] aspect-[1/1.5] rounded overflow-hidden bg-[var(--gr)] hover:opacity-75"
        style={{ boxShadow: '0 0 5px var(--shadow)' }}
      >
        <div className="absolute bg-[var(--gr)] text-[var(--tx)] font-bold text-[.5rem] tracking-widest top-1 left-1 rounded-md py px-2 z-30">
          {anime.type}
        </div>

        <Image
          placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
          src={anime.images.jpg.image_url}
          fill={true}
          alt={anime.title}
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover"
        />

        <div className="lg:text-[1.2vw] sm:text-[2vw] text-[3vw] grid grid-cols-2 z-10 absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-black to-[rgba(0,0,0,0.3)]">
          <p className="col-span-2 [text-shadow:_0_0_10px_black] font-medium text-ellipsis whitespace-nowrap overflow-hidden text-center px-1">
            {anime.title}
          </p>

          <p className="font-semibold p-1 items-center flex gap-1 fill-yellow-400 text-yellow-400">
            <Star />
            {anime.score}
          </p>
          <p className="font-semibold justify-self-end p-1 place-self-center">
            {anime.aired.prop.from?.year || 'N/A'}
          </p>
        </div>
      </div>
    </Link>
  );
}
