"use client";

import { useEffect, useState } from "react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const titles = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthCounts = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default function Month({ number, events, firstDay }) {
  const [dayEvents, setDayEvents] = useState([]);
  const [selected, setSelected] = useState(-1);
  const datesPrevious = Array.from(
    { length: firstDay },
    (_, i) => i + (monthCounts[(number + 11) % 12] - firstDay + 1),
  );
  const datesCurrent = Array.from(
    { length: monthCounts[number] },
    (_, i) => i + 1,
  );
  const datesFuture = Array.from(
    { length: 7 - firstDay - Math.floor(monthCounts[number] % 7) },
    (_, i) => i + 1,
  );

  useEffect(() => {
    setDayEvents(events.find((e) => e.day === selected));
  }, [events, selected]);

  return (
    <>
      <p className="text-3xl font-bold w-full">{monthNames[number]}</p>
      <div className="flex flex-col md:flex-row gap-12 items-stretch">
        <div className="grid grid-cols-7 gap-x-1 lg:gap-x-8 gap-y-5 text-xl text-center">
          {titles.map((e) => (
            <p key={e.day}>{e}</p>
          ))}
          {datesPrevious.map((e) => (
            <p key={e.day} className="w-10 px-2 py-1.5 opacity-[30%] mx-auto">
              {e}
            </p>
          ))}
          {datesCurrent.map((e) =>
            events.some((event) => event.day === e) ? (
              selected === e ? (
                <button
                  key={e.day}
                  onClick={() => setSelected(-1)}
                  className="w-10 px-2 py-1.5 relative bg-secondary text-grayLight rounded-full mx-auto"
                >
                  <p>{e}</p>
                </button>
              ) : (
                <button
                  key={e.day}
                  onClick={() => setSelected(e)}
                  className="w-10 px-2 py-1.5 relative hover:bg-gray transition-colors rounded-full mx-auto"
                >
                  <p>{e}</p>
                  <div className="absolute left-4 -bottom-0.5 w-2 h-2 bg-secondary rounded-full" />
                </button>
              )
            ) : (
              <p key={e.day} className="w-10 px-2 py-1.5 mx-auto">
                {e}
              </p>
            ),
          )}
          {datesFuture.map((e) => (
            <p key={e.day} className="w-10 px-2 py-1.5 opacity-[30%] mx-auto">
              {e}
            </p>
          ))}
        </div>
        {selected > -1 && dayEvents ? (
          <div className="relative space-y-3 bg-secondary p-6 h-72 md:h-auto w-full md:w-[17rem] shrink-0 rounded-[2rem] text-white">
            <div className="flex items-center gap-4">
              <p className="text-3xl font-bold">{dayEvents.category}</p>
              <hr className="flex-1 h-px bg-gray"></hr>
            </div>
            <p className="absolute left-4 -bottom-4 text-black opacity-25 font-bold text-[7rem]">
              {selected}
            </p>
            {dayEvents.events.map((e) => (
              <div key={e.day}>
                <p className="font-bold mx-auto">
                  {e.split(":")[0]}
                  {":"}
                </p>
                <p className="font-light">{e.split(":").slice(1).join(":")}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray h-72 md:h-auto w-full md:w-[17rem] shrink-0 rounded-[2rem] text-white" />
        )}
      </div>
    </>
  );
}
