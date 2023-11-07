import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart } from '../svgs';
import Load from '../loading';
 
export default function AnimeCharacters(promps) {
  const { id } = promps;
  const [data, setData] = useState("empty");
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${id}/characters`
      );
      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
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
  return (data == "empty" || data == undefined) ? (
    <Load />
  ) :(
    <div className="w-full grid lg:grid-cols-8  sm:grid-cols-6 grid-cols-3 grid-cols-3 p-1 gap-1">
{data.map((item,i)=>{
  return(
    <div
    key={i}
      className=" relative border-[var(--gr)] aspect-[1/1.5] rounded overflow-hidden relative bg-[var(--gr)] "
      style={{ boxShadow: '0 0 5px var(--shadow)' }}
    >
      <Image
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        src={
          item.character.images.jpg.image_url
        }
        width={225}
        height={385}
        alt={item.character.name}
        className=" object-fill w-full h-full"
      />

      <div className="z-10 w-8 absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-black to-[rgba(0,0,0,0.3)]">
        <p className=" [text-shadow:_0_0_10px_black] text-xs font-bold  w-full h-1/2 truncate text-center px-1">
          { item.character.name}
        </p>

        
          <div className="w-full h-1/2 flex md:text-xs text-[0.6rem] font-semibold justify-between p-1">
            <p className="flex gap-1 fill-[var(--theme-color)] text-[var(--theme-color)] ">
              <Heart />
              {item.favorites}
            </p>
            <p>{item.role}</p>
          </div>
        
      </div>
    </div>
  )
})}
    </div>
  )
}