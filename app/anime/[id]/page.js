'use client';

import React, { useEffect } from 'react';

import { usePathname } from 'next/navigation';
import AnimeDetails from '../../../components/anime/AnimeDetails';
import AnimeEpisodes from '../../../components/anime/AnimeEpisodes';
import AnimeCharacters from '../../../components/anime/AnimeCharacters';
import AnimePictures from '../../../components/anime/AnimePictures';

const selectSection = (selected) => {
  const sections = document.querySelectorAll('section');
  sections.forEach((item) => {
    item.classList.add('hidden');
  });
  document.querySelector(`#${selected}`).classList.remove('hidden');
};
export default function Page() {
  const path = usePathname();
  const id = path.split('/')[2];

  const conteners = [{ name: "Details", div: <AnimeDetails id={id} /> }, { name: "Characters", div: <AnimeCharacters id={id} /> }, { name: "Pictures", div: <AnimePictures id={id} /> }];
  useEffect(() => {
    console.log(path);
  }, [path])

  return (
    <div className="w-screen h-screen overflow-hidden ">

      <nav className="fixed top-12 w-full bg-[var(--bg)] grid grid-flow-col justify-stretch justify-items-center pt-1 font-semibold z-20 border-b-[1px] border-[var(--gr2)]">
        {conteners.map((item, i) => {
          return <a key={i} onClick={() => {
            selectSection(item.name)
          }} className="rounded cursor-pointer animeSection text-[var(--tx)]  no-underline text-sm pb-1 text-center w-full ">
            {item.name}
          </a>
        })}

      </nav>

      <main>
        {conteners.map((item, i) => {
          return <section key={i} id={item.name} className="relative h-screen ">
            <div className={` diva top-[4.6rem]  w-[31.5vw] h-[4px] rounded-full absolute z-20 bg-[var(--theme-color)] `} style={{ "--p": `${i * 34}vw` }}></div>
            <div className=" absolute bottom-0 w-full h-[85vh] overflow-auto">

              {item.div}
            </div>
          </section>
        })}
      </main>
    </div>
  );
}
