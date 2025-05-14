import { client } from "@/sanity/lib/client";
import DateList from "../components/DateList";

// // To fix bug where data is not immediately updated from Sanity
export const revalidate = 60;

async function getEvents() {
  const query = `*[_type == "eventDay"]`;
  const events = await client.fetch(query);
  return events;
}

const quarterNames = [
  "Winter", "Winter", "Winter", 
  "Spring", "Spring", "Spring",
  "Fall", "Fall", "Fall",
  "Fall", "Fall", "Fall",
];

const monthNames = [
  "January", "February", "March", 
  "April", "May", "June",
  "July", "August", "September",
  "October", "November", "December",
];

export default async function About() {
  const events = await getEvents();

  // Group events into quarters
  let quarters = {};
  events.forEach(e => {
    const yearMonth = e.date.slice(0, 7)
    if (!quarters[yearMonth]) {
      quarters[yearMonth] = [];
    }
    e.day = Number(e.date.slice(8, 10))
    quarters[yearMonth].push(e);
  })
  
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
    <div className="max-w-[96rem] mx-auto relative flex flex-col gap-6 md:gap-12 p-6 md:py-12 md:px-20">
      {Object.keys(quarters).sort(sortNames).map((q, i) =>
        <DateList
          key={i}
          month={monthNames[Number(q.slice(5, 7)) - 1]}
          title={`${quarterNames[(Number(q.slice(5, 7)) - 1)]} Quarter ${q.slice(0, 4)}`}
          events={quarters[q]}
          show={true}
        />
      )}
    </div>
  );
}
