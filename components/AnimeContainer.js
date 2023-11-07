'use client';
import Image from 'next/image';
import React from 'react';
import { Star } from './svgs';
import Link from 'next/link';
export default function AnimeContainer(promps) {
  const { anime } = promps;
  
  
  //
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
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

  const toBase64 = (str) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);
  return (
    <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id}>
    <div
      className=" relative border-[var(--gr)] aspect-[1/1.5] rounded overflow-hidden relative bg-[var(--gr)] "
      style={{ boxShadow: '0 0 5px var(--shadow)' }}
    >
      <div className="absolute bg-[var(--gr)] text-[var(--theme-color)] font-bold text-xs top-1 left-1 rounded-md py-1 px-2 ">
        { anime.type}
      </div>

      <Image
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        src={
          anime.images.jpg.large_image_url
        }
        width={225}
        height={385}
        alt={ anime.title}
        className=" object-fill w-full h-full"
      />

      <div className="lg:text-[1.2vw]  sm:text-[2vw] text-[4vw] grid grid-cols-2 z-10 absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-black to-[rgba(0,0,0,0.3)]">
        <p className="col-span-2 [text-shadow:_0_0_10px_black]  font-medium  text-ellipsis whitespace-nowrap overflow-x-hidden text-center px-1">
          { anime.title}
        </p>

        
            <p className=" font-semibold p-1 items-center flex gap-1 fill-yellow-400 text-yellow-400">
              <Star />
              {anime.score}
            </p>
            <p className=' font-semibold justify-self-end p-1 place-self-center'>{anime.aired.prop.from.year}</p>
          
        
      </div>
    </div>
    </Link>
  );
}
