"use client";

import Image from "next/image";
import { useState } from "react";
import Month from "./Month";

const quarterNames = ["Winter", "Spring", "Fall", "Fall"];

// Calculates first day of week per month/year
function zellersCongruence(year, month) {
  if (month < 2) {
    month += 12;
    year -= 1;
  }

  const q = 1;
  const m = month + 1;
  const K = year % 100;
  const J = Math.floor(year / 100);

  return (
    (q +
      Math.floor((13 * (m + 1)) / 5) +
      K +
      Math.floor(K / 4) +
      Math.floor(J / 4) +
      3 * J) %
    7
  );
}

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
          <p className="text-4xl font-black hidden sm:block">
            {`${quarterNames[Number(index.split(" ")[1])]} Quarter ${index.split(" ")[0]}`}
          </p>
          <p className="text-4xl font-bold sm:hidden">
            {`${quarterNames[Number(index.split(" ")[1])]} ${index.split(" ")[0]}`}
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
        <div className="h-auto mb-4 px-0 lg:px-12 space-y-6 lg:space-y-10">
          {Object.keys(months).map((m, i) => (
            <Month
              key={i}
              number={m - 1}
              events={months[m]}
              firstDay={zellersCongruence(
                Number(events[0].date.slice(0, 4)),
                m,
              )}
            />
          ))}
        </div>
      )}
    </>
  );
}
