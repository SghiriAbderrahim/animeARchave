'use client';
import Image from 'next/image';
import React from 'react';

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
    <div
      className=" relative border-[var(--gr)] aspect-[1/1.5] rounded overflow-hidden relative bg-[var(--gr)] "
      style={{ boxShadow: '0 0 5px var(--shadow)' }}
    >
     

      <Image
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        src={
           anime.entry.images.jpg.large_image_url
            
        }
        width={225}
        height={385}
        alt={ anime.entry.title }
        className=" object-fill w-full h-full"
      />

      <div className="z-10 w-8 absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-black to-[rgba(0,0,0,0.3)]">
        <p className=" [text-shadow:_0_0_10px_black] text-sm font-medium  w-full h-1/2 truncate text-center px-1">
          { anime.entry.title }
        </p>
<p className="  w-full h-1/2 flex text-[var(--theme-color)] text-xs font-bold justify-between p-1">
            {anime.episodes[0].title}
          </p>
      </div>
    </div>
  );
}
