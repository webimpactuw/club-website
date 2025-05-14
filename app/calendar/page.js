import { client } from "@/sanity/lib/client";
import DateList from "../components/DateList";

// // To fix bug where data is not immediately updated from Sanity
export const revalidate = 60;

async function getEvents() {
  const query = `*[_type == "eventDay"]`;
  const events = await client.fetch(query);
  return events;
}

export default async function About() {
  const events = await getEvents();

  // Group events into quarters
  let quarters = {};
  events.forEach((e) => {
    const yearNum = e.date.slice(0, 4);
    const quarterNum = Math.floor((Number(e.date.slice(5, 7)) - 1) / 3);
    const quarterID = `${yearNum} ${Math.min(quarterNum, 2)}`;
    if (!quarters[quarterID]) {
      quarters[quarterID] = [];
    }
    e.day = Number(e.date.slice(8, 10));
    quarters[quarterID].push(e);
  });

  const sortNames = (a, b) => {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  };

  return (
    <div className="max-w-[96rem] mx-auto relative flex flex-col gap-6 p-6 md:py-10 md:px-20">
      {Object.keys(quarters)
        .sort(sortNames)
        .map((quarterID, i) => (
          <DateList
            key={i}
            index={quarterID}
            events={quarters[quarterID]}
            show={i === 0}
          />
        ))}
    </div>
  );
}
