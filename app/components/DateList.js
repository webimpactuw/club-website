"use client";

import { useState } from "react";

export default function DateList({ title, events, show }) {
  const [open, setOpen] = useState(show);

  const titles = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const datesPrevious = Array.from({ length: 5 }, (_, i) => i + 27);
  const datesCurrent = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <>
      <div className="flex flex-row items-center h-12">
        <button
          className="flex transition-opacity md:hover:opacity-50"
          onClick={() => setOpen(!open)}
        >
          <p className="text-4xl font-black">{title}</p>
          {open ? (
            <img
              src="/chevron-down.svg"
              width={12}
              height={12}
              alt={"chevron down"}
              className="w-12 h-12"
            />
          ) : (
            <img
              src="/chevron-right.svg"
              width={12}
              height={12}
              alt={"chevron down"}
              className="w-12 h-12"
            />
          )}
        </button>
        <hr className="flex-1 h-px my-auto ml-2 bg-grayDark opacity-25" />
      </div>

      {open && (
        <div className="space-y-4 h-auto mb-4 px-0 lg:px-12 gap-8 lg:gap-12 pb-12">
          <p className="text-3xl font-black w-full">September</p>
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-stretch">
            <div className="grid grid-cols-7 gap-8 text-xl text-center">
              {titles.map(e => 
                <p>{e}</p>
              )}
              {datesPrevious.map(e => 
                <p className="opacity-25">{e}</p>
              )}
              {datesCurrent.map(e => 
                <p>{e}</p>
              )}
            </div>
            <div className="bg-secondary w-full md:w-60 shrink-0 rounded-3xl"></div>
          </div>
        </div>
      )}
    </>
  );
}
