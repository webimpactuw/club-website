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

  // const testEvents = [
  //   {
  //     day: 26,
  //     title: "Coding",
  //     events: [
  //       "Beginner (5-6): Intro to web development",
  //       "Advanced (6-7): Refresher on HTML/CSS/JS",
  //     ],
  //   },
  //   {
  //     day: 27,
  //     title: "Club",
  //     events: ["Kickoff Meeting (5-6): Learn how you can get involved!"],
  //   },
  //   {
  //     day: 28,
  //     title: "Design",
  //     events: [
  //       "Beginner (5-6): Intro to web design",
  //       "Advanced (6-7): Refresher on visual hierarchy",
  //     ],
  //   },
  // ];

  return (
    <div className="max-w-[96rem] mx-auto relative flex flex-col gap-6 md:gap-12 p-6 md:py-12 md:px-20">
      <DateList title="Fall Quarter 2024" events={events} show={true} />
    </div>
  );
}
