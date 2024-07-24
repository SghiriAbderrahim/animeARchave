
import React from "react"; 
import useDownloader from "react-use-downloader"; 
import {Download} from '../svgs';

export default function ImageFull(promps) { 
  const { url } = promps;
  const {  download } = useDownloader(); 
  
  const fileUrl = url; 
  const filename = "AnimeARchave_Picture.jpg"; 
  return (
      <div className="z-50 absolute bottom-1 right-2"> 
        <button onClick={() => download(fileUrl, filename)} className="bg-[var(--bg)] p-1 rounded mt-2 font-semibold hover:bg-[var(--theme-color)] fill-[var(--tx)] hover:fill-[var(--bg)]"> 
        <Download />
      </button> 
    </div> 
    
  );
}