// import { client } from "@/sanity/lib/client";
// import Container from "../components/Container";
// import PageHeader from "../components/PageHeader";
// import Week from "../components/Week";

import DateList from "../components/DateList";

// // To fix bug where data is not immediately updated from Sanity
// export const revalidate = 60;

// async function getWeeks() {
//   const query = `*[_type == "week"] | order(weeknum asc)`;
//   const weeks = await client.fetch(query);
//   return weeks;
// }

// export default async function Schedule() {
//   const weeks = await getWeeks();

//   return (
//     <div className="p-4 sm:p-8 md:p-12 mx-auto">
//       {/* TODO: Make page header configurable via Sanity */}
//       <PageHeader displayText="Fall Workshop Schedule" />
//       {/* Topic Categories */}
//       <Container>
//         <Week
//           weeknum="Week"
//           date="Date"
//           workshop="Workshop"
//           topic="Topic"
//           bold={true}
//         />
//       </Container>

//       {/* TODO: Restructure grid for mobile viewing? */}
//       {/* Grab all weeks and put into a Week */}
//       {weeks.map((week, index) => (
//         <Week
//           weeknum={week.weeknum}
//           date={week.date}
//           workshop={week.workshop}
//           topic={week.topic}
//           bold={false}
//         />
//       ))}
//     </div>
//   );
// }

export default function About() {
  const testEvents = [
    {
      day: 26,
      title: "Coding",
      events: [
        "Beginner (5-6): Intro to web development",
        "Advanced (6-7): Refresher on HTML/CSS/JS",
      ],
    },
    {
      day: 27,
      title: "Club",
      events: ["Kickoff Meeting (5-6): Learn how you can get involved!"],
    },
    {
      day: 28,
      title: "Design",
      events: [
        "Beginner (5-6): Intro to web design",
        "Advanced (6-7): Refresher on visual hierarchy",
      ],
    },
  ];

  return (
    <div className="max-w-[96rem] mx-auto relative flex flex-col gap-6 md:gap-12 p-6 md:py-12 md:px-20">
      <DateList title="Fall Quarter 2024" events={testEvents} show={true} />
    </div>
  );
}
