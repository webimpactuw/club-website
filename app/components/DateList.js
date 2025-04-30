"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function DateList({ title, events, show }) {
  const [open, setOpen] = useState(show);
  const [selected, setSelected] = useState(-1);
  const [dayEvents, setDayEvents] = useState({});

  useEffect(() => {
    setDayEvents(events.find((e) => e.day === selected));
  }, [events, selected]);

  const titles = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
          <p className="text-3xl font-black w-full mb-6">September</p>
          <div className="flex flex-col md:flex-row gap-12 items-stretch">
            <div className="grid grid-cols-7 gap-x-1 lg:gap-x-8 gap-y-5 text-xl text-center">
              {titles.map((e) => (
                <p key={e}>{e}</p>
              ))}
              {datesPrevious.map((e) => (
                <p key={e} className="w-10 px-2 py-1.5 opacity-[30%]">
                  {e}
                </p>
              ))}
              {datesCurrent.map((e) =>
                events.some((event) => event.day === e) ? (
                  selected === e ? (
                    <button
                      key={e}
                      onClick={() => setSelected(-1)}
                      className="w-10 px-2 py-1.5 relative bg-secondary text-grayLight rounded-full"
                    >
                      <p>{e}</p>
                    </button>
                  ) : (
                    <button
                      key={e}
                      onClick={() => setSelected(e)}
                      className="w-10 px-2 py-1.5 relative hover:bg-gray transition-colors rounded-full"
                    >
                      <p>{e}</p>
                      <div className="absolute left-4 -bottom-0.5 w-2 h-2 bg-secondary rounded-full" />
                    </button>
                  )
                ) : (
                  <p key={e} className="w-10 px-2 py-1.5">
                    {e}
                  </p>
                ),
              )}
            </div>
            {selected > -1 && dayEvents ? (
              <div className="relative space-y-3 bg-secondary p-6 h-72 md:h-auto w-full md:w-[17rem] shrink-0 rounded-[2rem] text-white">
                <div className="flex items-center gap-4">
                  <p className="text-3xl font-bold">{dayEvents.title}</p>
                  <hr className="flex-1 h-px bg-gray"></hr>
                </div>
                <p className="absolute left-4 -bottom-4 text-black opacity-25 font-bold text-[7rem]">
                  {selected}
                </p>
                {dayEvents.events.map((e) => (
                  <div key={e}>
                    <p className="font-bold">
                      {e.split(":")[0]}
                      {":"}
                    </p>
                    <p className="font-light">{e.split(":")[1]}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-gray h-72 md:h-auto w-full md:w-[17rem] shrink-0 rounded-[2rem] text-white" />
            )}
          </div>
        </div>
      )}
    </>
  );
}
