import { client } from "@/sanity/lib/client";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import Week from "../components/Week";

// To fix bug where data is not immediately updated from Sanity
export const revalidate = 60;

async function getWeeks() {
  const query = `*[_type == "week"] | order(weeknum asc)`;
  const weeks = await client.fetch(query);
  return weeks;
}

export default async function Schedule() {
  const weeks = await getWeeks();

  return (
    <div className="m-14">
      <PageHeader displayText="Fall Workshop Schedule" />
      {/* Topic Categories */}
      <Container>
        <Week
          weeknum="Week"
          date="Date"
          workshop="Workshop"
          topic="Topic"
          bold={true}
        />
      </Container>

      {/* Grab all weeks and put into a Week */}
      <div>
        {weeks.map((week, index) => (
          <Container key={index}>
            <Week
              weeknum={week.weeknum}
              date={week.date}
              workshop={week.workshop}
              topic={week.topic}
              bold={false}
            />
          </Container>
        ))}
      </div>
    </div>
  );
}
