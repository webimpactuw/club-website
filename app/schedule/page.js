import { client } from "@/sanity/lib/client";
import PageHeader from "../components/PageHeader";
import Week from "../components/Week";

async function getWeeks() {
  const query = `*[_type == "week"] {
    weeknum,
    date,
    workshop,
    topic
  }`;
  const weeks = await client.fetch(query);
  return weeks;
}

export default async function Schedule() {
  const weeks = await getWeeks();

  return (
    <div className="m-14">
      {/* <div className="relative flex py-5 items-center">
        <h1 className="font-bold text-4xl">Fall Workshop Schedule</h1>
        <div className="mx-8 flex-grow border-t border-gray-400"></div>
      </div> */}
      <PageHeader displayText="Fall Workshop Schedule" />

      <div className="m-14 font-bold text-xl">
        <div className="flex ...">
          <div className="flex-1 ...">Week</div>
          <div className="contents">
            <div className="flex-1 ...">Date</div>
            <div className="flex-1 ...">Workshop</div>
          </div>
          <div className="flex-1 ...">Topic</div>
        </div>
      </div>

      {/* <div className="flex items-center justify-around">
        <h4>Week</h4>
        <h4>Date</h4>
        <h4>Workshop</h4>
        <h4>Topic</h4>
      </div> */}
      {/* <Week
        weeknum="Week"
        date="Date"
        workshop="Workshop"
        topic="Topic"
        bold={true}
      /> */}
      <div>
        {weeks.map((week, index) => (
          <Week
            key={index}
            weeknum={week.weeknum}
            date={week.date}
            workshop={week.workshop}
            topic={week.topic}
            bold={false}
          />
        ))}
      </div>
    </div>
  );
}
