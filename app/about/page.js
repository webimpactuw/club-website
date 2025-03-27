import { client } from "@/sanity/lib/client";
import OfficerCard from "../components/OfficerCard";

export default async function About() {
  const officers = await getOfficers();
  const sort = (officers) => {
    return officers.sort((a, b) => a.index - b.index);
  };

  return (
    <div className="flex flex-col gap-24 lg:gap-36 max-w-[96rem] mx-auto py-12">
      <div className="flex flex-col lg:flex-row justify-between gap-8 p-8 pb-0 md:p-12">
        <div className="flex flex-col gap-4">
          <p className="font-bold">Our Story</p>
          <h1 className="font-black text-4xl max-w-[24rem]">
            Empowering Change through Technology
          </h1>
        </div>
        <p className="max-w-[42rem] text-grayDark">
          Web Impact UW (formerly DUBvelopers) was founded by Quan Huie in 2021
          in an effort to provide free website building for local businesses so
          they can avoid the steep prices of hiring a web developer. Since then,
          our member base has expanded rapidly, and we have seen a large
          increase in project applications. Historically, we have supported 8
          organizations per year with websites, but we hope to increase this
          amount in the near future.
        </p>
      </div>

      <div className="relative flex flex-col lg:flex-row items-start lg:items-end justify-center px-8 lg:px-12 gap-8 lg:gap-12 text-secondary">
        <div className="max-w-[22rem] relative">
          <div className="flex items-center gap-4">
            <div className="shrink-0 z-10 rounded-full bg-lightPurple border-2 border-secondary h-20 w-20 flex items-center justify-center">
              <p className="font-black text-3xl">‘21</p>
            </div>
            <div className="shrink-1">
              <p className="font-bold text-2xl">Getting Started</p>
              <p className="text-primary text-wrap">
                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed
                sed{" "}
              </p>
            </div>
          </div>
          <div className="hidden lg:flex w-0 h-56 border-dashed border-2 ml-10 border-secondary" />
          <div className="hidden lg:flex w-5 h-5 rounded-full bg-white border-4 border-secondary absolute -bottom-2.5 left-8 z-10" />
        </div>
        <div className="max-w-[22rem] relative">
          <div className="flex items-center gap-4">
            <div className="shrink-0 z-10 rounded-full bg-lightPurple border-2 border-secondary h-20 w-20 flex items-center justify-center">
              <p className="font-black text-3xl">‘22</p>
            </div>
            <div>
              <p className="font-bold text-2xl">Next Thing</p>
              <p className="text-primary">
                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed
                sed{" "}
              </p>
            </div>
          </div>
          <div className="hidden lg:flex w-0 h-72 border-dashed border-2 ml-10 border-secondary" />
          <div className="hidden lg:flex w-5 h-5 rounded-full bg-white border-4 border-secondary absolute -bottom-2.5 left-8 z-10" />
        </div>
        <div className="max-w-[22rem] relative">
          <div className="flex items-center gap-4">
            <div className="shrink-0 z-10 rounded-full bg-lightPurple border-2 border-secondary h-20 w-20 flex items-center justify-center">
              <p className="font-black text-3xl">‘23</p>
            </div>
            <div>
              <p className="font-bold text-2xl">Current Thing</p>
              <p className="text-primary">
                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed
                sed{" "}
              </p>
            </div>
          </div>
          <div className="hidden lg:flex w-0 h-[22rem] border-dashed border-2 ml-10 border-secondary" />
          <div className="hidden lg:flex w-5 h-5 rounded-full bg-white border-4 border-secondary absolute -bottom-2.5 left-8 z-10" />
        </div>
        <hr className="absolute top-0 bottom-0 lg:left-0 lg:right-0 lg:top-auto lg:bottom-auto border border-grayDark opacity-25 h-full lg:h-auto ml-10 lg:w-full max-w-[calc(100%-5rem)]" />
      </div>

      <div className="flex flex-col gap-8 text-white w-full bg-secondary lg:rounded-[3rem] px-8 py-12 lg:px-12 lg:py-16">
        <p className="text-lg">Our Mission</p>
        <p className="text-4xl font-semibold max-w-[36rem]">
          Transforming Web Development into Community Impact
        </p>
        <p className="text-xl text-lightPurple font-light">
          Web Impact&apos;s mission is to make web development equitable and
          accessible to everyone. To do this, we provide workshops for people of
          all skill levels and create free of charge websites for local
          community organizations.
        </p>
      </div>

      <div className="flex flex-col p-8 lg:p-12 gap-8 lg:gap-12">
        <hr className="w-full border border-grayDark opacity-25" />
        <h1 className="font-black text-4xl max-w-[24rem] mb-12">
          Meet the Team
        </h1>
        <div className="grid-cols-1 sm:grid-cols-2 grid lg:flex lg:overflow-x-auto gap-8">
          <p className="font-bold text-2xl w-80 shrink-0">President</p>
          <p className="lg:hidden"></p>
          {sort(officers)
            .filter((e) => e.role === "president")
            .map((officer, index) => (
              <OfficerCard officer={officer} title="President" key={index} />
            ))}
        </div>
        <hr className="w-full border border-grayDark opacity-25" />
        <div className="grid-cols-1 sm:grid-cols-2 grid lg:flex lg:overflow-x-auto gap-8">
          <p className="font-bold text-2xl w-80 shrink-0">Coding</p>
          <p className="lg:hidden"></p>
          {sort(officers)
            .filter((e) => e.role === "coding")
            .map((officer, index) => (
              <OfficerCard officer={officer} title="Coding Officer" key={index} />
            ))}
        </div>
        <hr className="w-full border border-grayDark opacity-25" />
        <div className="grid-cols-1 sm:grid-cols-2 grid lg:flex lg:overflow-x-auto gap-8">
          <p className="font-bold text-2xl w-80 shrink-0">Design</p>
          <p className="lg:hidden"></p>
          {sort(officers)
            .filter((e) => e.role === "design")
            .map((officer, index) => (
              <OfficerCard officer={officer} title="Design Officer" key={index} />
            ))}
        </div>
        <hr className="w-full border border-grayDark opacity-25" />
        <div className="grid-cols-1 sm:grid-cols-2 grid lg:flex lg:overflow-x-auto gap-8">
          <p className="font-bold text-2xl w-80 shrink-0">Activities</p>
          <p className="lg:hidden"></p>
          {sort(officers)
            .filter((e) => e.role === "activities")
            .map((officer, index) => (
              <OfficerCard officer={officer} title="Activities Director" key={index} />
            ))}
        </div>
        <hr className="w-full border border-grayDark opacity-25" />
        <div className="grid-cols-1 sm:grid-cols-2 grid lg:flex lg:overflow-x-auto gap-8">
          <p className="font-bold text-2xl w-80 shrink-0">Projects</p>
          <p className="lg:hidden"></p>
          {sort(officers)
            .filter((e) => e.role === "projects")
            .map((officer, index) => (
              <OfficerCard officer={officer} title="Project Coordinator" key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}

export const revalidate = 60;

async function getOfficers() {
  const query = `*[_type == 'officer'] | order(date desc) {
    name,
    index,
    role,
    image
  }`;

  const officers = await client.fetch(query);
  return officers;
}
