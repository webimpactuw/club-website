"use client";

import Image from "next/image";
import { useState } from "react";
import Month from "./Month";

const quarterNames = ["Winter", "Spring", "Fall", "Fall"];

export default function Quarter({ index, events, show }) {
  const [open, setOpen] = useState(show);

  const months = {};
  events.forEach((e) => {
    const monthNum = Number(e.date.slice(5, 7));
    if (!months[monthNum]) {
      months[monthNum] = [];
    }
    months[monthNum].push(e);
  });

  return (
    <>
      <div className="flex flex-row items-center h-12">
        <button
          className="flex transition-opacity md:hover:opacity-50"
          onClick={() => setOpen(!open)}
        >
          <p className="text-4xl font-black">
            {`${quarterNames[Number(index.split(" ")[1])]} Quarter ${index.split(" ")[0]}`}
          </p>
          {open ? (
            <Image
              src="/chevron-down.svg"
              width={12}
              height={12}
              alt={"chevron down"}
              className="w-12 h-12"
            />
          ) : (
            <Image
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
        <div className="h-auto mb-4 px-0 lg:px-12 gap-8 lg:gap-12">
          {Object.keys(months).map((m, i) => (
            <Month key={i} number={m - 1} events={months[m]} />
          ))}
        </div>
      )}
    </>
  );
}
