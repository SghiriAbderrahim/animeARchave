import React from 'react';

export default function Load() {
  return (
    <span
      className="z-30 fixed bottom-10 right-10 animate-spin place-self-center h-12 w-12 border-4 rounded-full border-x-[var(--theme-color)] border-y-[var(--gr)]"
      role="status"
      aria-label="Loading"
    ></span>
  );
}
