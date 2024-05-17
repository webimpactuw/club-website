// import { client } from "@/sanity/lib/client";
// import Container from "../components/Container";
// import PageHeader from "../components/PageHeader";
// import Week from "../components/Week";

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
//     <div className="max-w-screen-2xl p-4 sm:p-8 md:p-12 mx-auto">
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
  return (
    <div className="px-10 py-40">
      <h1 className="text-5xl font-extrabold mb-10">In Progress ...</h1>
    </div>
  );
}
