import Image from "next/image";
import Button from "./components/Button";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div>
      <header className="bg-dark-purple py-20 px-10 flex items-center justify-center bg-home">
        <h1 className="text-white text-5xl mr-16 font-extrabold">
          Designing, Developing, and <br/> <span className="text-primary">Impacting</span> our Communities
        </h1>
        <div className="flex-col">
          <p className="text-white mb-6 max-w-screen-md">
            Web Impact is a University of Washington web design and development RSO that provides a technical
            foundation for students and facilitates the creation of pro-bono websites for local communities
            and organizations within the Seattle area.
          </p>
          <Button href="/about">Join our Discord</Button>
        </div>
      </header>

      <div className="py-20 px-10 text-center">
        <h2 className="text-5xl font-extrabold mb-10">What We Do</h2>

        <div className="flex justify-center">
          <div className="max-w-xl text-left mx-5">
            <Image src="/teaching.svg" alt="What We Do" width={80} height={80} />
            <h2 className="text-2xl font-bold">Web Design & Development Workshops</h2>

            <p className="my-6">
              Our weekly workshops allow students of all skill levels to learn web design and development,
              preparing them to create impactful websites for real organizations during our project phase of the year.
            </p>

            <CTA href="/schedule">Check out our workshop schedule</CTA>
          </div>

          <div class="border-l border-gray-300 mx-20"></div>

          <div className="max-w-xl text-left mx-5">
            <Image src="/community.svg" alt="What We Do" width={80} height={80} />
            <h2 className="text-2xl font-bold">Pro-bono Websites for Local Businesses</h2>

            <p className="my-6">
              Starting in Winter, we form student teams to build free websites for underserved communities and local businesses in Seattle,
              offering practical experience and real impact.
            </p>

            <CTA href="/projects">Check out our past projects</CTA>
          </div>
        </div>
      </div>
    </div>
  );
}