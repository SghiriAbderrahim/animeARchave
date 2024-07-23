'use client';

import React from 'react';
import SortChoose from './SortChoose';
import { useShow, useSearch } from '@/stores/store';
import { SortUp, SortDown } from '../svgs';



export default function SortContainer() {
  const setReLoad = useSearch((state) => state.setReLoad);
  const show = useShow((state) => state.sortShow);
  const setSortShow = useShow((state) => state.setSortShow);
  const setSortDirection = useSearch((state) => state.setSortDirection);
  const sortDirection = useSearch((state) => state.sortDirection);
  return (
    <div className={`${!show ? "hidden" : null} grid place-items-center fixed backdrop-opacity-10 backdrop-invert bg-black/90  top-0 left-0 w-screen h-screen `}>
      <div className=" border-2 border-[var(--gr2)] grid bg-[var(--bg)] w-3/4 max-w-[550px] h-4/5 rounded-md ">
        <div className="flex justify-between items-center w-full py-2 px-6 fill-[var(--theme-color)] ">
          <p className="font-bold text-xl ">Sort by :</p>
          <div onClick={()=>{setSortDirection()}} className="text-2xl hover:bg-[var(--gr)] p-2 rounded-full">
         {sortDirection ? <SortUp /> : <SortDown /> }
          
          </div>
            
        </div>


  
  <SortChoose chooseName="Start date" value="start_date"/>
  <SortChoose chooseName="End date" value="end_date"/>
  <SortChoose chooseName="Episodes" value="episodes"/>
  <SortChoose chooseName="Score" value="score"/>
  <SortChoose chooseName="Rank" value="rank"/>
  <SortChoose chooseName="Popularity" value="popularity"/>
  <SortChoose chooseName="Favorites" value="favorites"/>
  <SortChoose chooseName="Title" value="title"/>


        <div className=" w-full py-4 px-3 pr-4 flex justify-between">
        <button onClick={()=>{

setSortShow(false)}} className="font-bold hover:bg-[var(--gr2)] text-[var(--gr3)] hover:text-[var(--tx)]  px-3 rounded ">
Cancel
</button>
          <button onClick={()=>{
            setReLoad();
            setSortShow(false)}} className="font-bold hover:bg-[var(--theme-color)] hover:text-[var(--bg)] text-[var(--theme-color)]  px-3 rounded ">
            Ok
          </button>
          
        </div>
      </div>
    </div>
  );
}
