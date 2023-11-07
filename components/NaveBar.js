'use client';
import React, { useEffect,useState,useRef } from 'react';
import { Back, Filter, Search, Menu, Sort } from './svgs';
import Icon from './IconContainer';
import Link from 'next/link';
import { usePathname,useRouter } from 'next/navigation';
import SortContainer from './sort/SortContainer';
import FilterContainer from './filter/FilterContainer';
import { useShow, useSearch } from '@/stores/store';

export default function NaveBar() {
  const reset = useSearch((state) => state.reset);
  const path = usePathname();
  const router = useRouter();
  const setSortShow = useShow((state) => state.setSortShow);
  const setFilterShow = useShow((state) => state.setFilterShow);
  //refresh
  const [startPoint, setStartPoint] = useState(0);
  var varStartPoint = 0;
  const [pullChange, setPullChange] = useState(-70);
  var varPullChange = 0;
  const refreshCont = useRef(0);
  const initLoading = () => {
    console.log('end2')
    refreshCont.current.classList.add("loading");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  const pullStart = (e) => {
    const { screenY } = e.targetTouches[0];
    varStartPoint= screenY;
    setStartPoint(screenY);
    console.log(varStartPoint)
  };
  const pull = (e) => {
    
    const touch = e.targetTouches[0];
    
    const { screenY } = touch;
    
    let pullLength = startPoint < screenY ? Math.abs(screenY - varStartPoint) : 0;
    setPullChange(pullLength);
    varPullChange=pullLength;
    console.log({ screenY, varStartPoint, pullLength, varPullChange });
  };
  const endPull = (e) => {
    if (varPullChange > 220) initLoading();
    setStartPoint(0);
    varStartPoint=0;
    setPullChange(-70);
    varPullChange=-70;
    console.log('end');
    
  };

  useEffect(() => {
    const nav = document.querySelector('nav');
    nav.addEventListener("touchstart", pullStart);
    nav.addEventListener("touchmove", pull);
    nav.addEventListener("touchend", endPull);
   
  },[]);

  return (
    <nav
      className=" fixed z-50 left-0 top-0  flex w-screen items-center justify-between p-6 lg:px-8 h-8 bg-[var(--bg)] border-b border-[var(--gr)]"
      aria-label="Global"
    >


      <div
ref={refreshCont}
className="refresh-container w-fit -mt-20 right-1/2 translate-x-1/2 fixed "
style={{ marginTop: pullChange<220?pullChange:220 || -70 }}
>
<div className="refresh-icon p-2 rounded-full">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={pullChange >= 220 ? "var(--theme-color)" : "white"}
    viewBox="0 0 16 16"
    strokeWidth={1}
    stroke={pullChange >= 220 ? "var(--theme-color)" : "white"}
    className="w-6 h-6"
    style={{ transform: `rotate(${pullChange>=220?220:pullChange}deg)` }}
  >
    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
</svg>
  
</div>
</div>


      <SortContainer />
      <FilterContainer />
      <div className="flex gap-2">
        {path !== '/' ? (
          
            <Icon
              Action={() => {
                reset();
                router.back()
              }}
              icon={<Back />}
            ></Icon>
         
        ) : null}

        {path === '/' ? (
          <Link href="/search">
            <Icon
              Action={() => {
                reset();
              }}
              icon={<Search />}
            ></Icon>
          </Link>
        ) : null}
      </div>
      <div className="flex gap-2">
        {path === '/search' ? (
          <Icon
            Action={() => {
              setSortShow(true);
            }}
            icon={<Sort />}
          ></Icon>
        ) : null}
        {path === '/search' ? (
          <Icon
            Action={() => {
              setFilterShow(true);
            }}
            icon={<Filter />}
          ></Icon>
        ) : null}
        {path === '/search' ? null : (
          <Icon
            Action={() => {
              console.log('menu');
            }}
            icon={<Menu />}
          ></Icon>
        )}
      </div>
    </nav>
  );
}
