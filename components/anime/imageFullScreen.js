
import React from "react"; 
import useDownloader from "react-use-downloader"; 
import {Download} from '../svgs';

export default function ImageFull(promps) { 
  const { url } = promps;
  const {  download } = useDownloader(); 
  
  const fileUrl = url; 
  const filename = "AnimePicture.jpg"; 
  return (
      <div className="z-50 absolute bottom-1 right-2"> 
        <button onClick={() => download(fileUrl, filename)} className="bg-[var(--color-60)] p-1 rounded mt-2 font-semibold hover:bg-[var(--color-10)] fill-[var(--tx)] hover:fill-[var(--color-60)]"> 
        <Download />
      </button> 
    </div> 
    
  );
}