'use client';


import React, { useEffect } from 'react';

export default function Option(props) {
  const { Selected, groupName, name, Multi, Func, value,} = props;

  if(Multi){
var check = false;
for (const key in Selected) {
  
  if(Selected[key] == value){
    check = true;
  }
}
}
useEffect(() => {
  
}, []);
  return (
    <label key={name}>
      <input
        onChange={() => {
          Func();
        }}
        className="hidden peer"
        type={Multi ? 'checkbox' : 'radio'}
        name={groupName}
        checked={
          Multi?
          check 
          :
          value === Selected ? true : false
        }
      />
      <div className=" px-3 py-1 text-sm rounded-full font-semibold peer-checked:bg-[var(--color-10)] peer-checked:text-[var(--color-60)] text-[var(--tx)] bg-[var(--gr)] ">
        {name}
      </div>
    </label>
  );
}
