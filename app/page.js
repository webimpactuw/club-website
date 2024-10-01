"use client";

import Image from "next/image";
import Button from "./components/Button";
import CTA from "./components/CTA";
import Card from "./components/Card";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const values = [
    {
      value: "Community",
      description:
        "Fostering an inclusive community where everyone can share their passions for web development.",
    },
    {
      value: "Service",
      description:
        "Empowering local, underserved organizations and communities by providing prro-bono websites.",
    },
    {
      value: "Learning",
      description:
        "Provide free access to tailored web design & development workshops led by our teaching officers.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-darkPurple flex items-center justify-center">
        <div className="flex flex-col md:flex-row gap-8 w-screen max-w-screen-2xl py-40 px-10 bg-home">
          <h1 className="text-white text-5xl text-center md:text-start font-extrabold">
            Designing, Developing, and{" "}
            <span className="text-primary">Impacting</span> our Communities
          </h1>
          <div className="flex-col text-center md:text-start">
            <p className="text-white mb-6 max-w-screen-md">
              Web Impact is a University of Washington web design and
              development RSO that provides a technical foundation for students
              and facilitates the creation of pro-bono websites for local
              communities and organizations within the Seattle area.
            </p>
            <Button href="https://discord.gg/GqfcCyvWxU">
              Join our Discord
            </Button>
          </div>
        </div>
      </header>

      {/* What we do */}
      <div className="mx-auto p-4 sm:p-8 py-12 sm:py-16 text-center">
        <h2 className="text-5xl font-extrabold mb-10">What We Do</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0">
          <div className="flex flex-col gap-4 items-center max-w-xl text-center">
            <Image
              src="/teaching.svg"
              alt="What We Do"
              width={80}
              height={80}
            />
            <h2 className="text-2xl font-bold">
              Web Design & Development Workshops
            </h2>

            <p>
              Our weekly workshops allow students of all skill levels to learn
              web design and development, preparing them to create impactful
              websites for real organizations during our project phase of the
              year.
            </p>

            <CTA href="/schedule">Check out our workshop schedule</CTA>
          </div>

          <div className="h-0 md:h-64 border-l border-gray-300 mx-10"></div>

          <div className="flex flex-col gap-4 items-center max-w-xl text-center">
            <Image
              src="/community.svg"
              alt="What We Do"
              width={80}
              height={80}
            />
            <h2 className="text-2xl font-bold">
              Pro-bono Websites for Local Businesses
            </h2>

            <p>
              Starting in Winter, we form student teams to build free websites
              for underserved communities and local businesses in Seattle,
              offering practical experience and real impact.
            </p>

            <CTA href="/projects">Check out our past projects</CTA>
          </div>
        </div>
      </div>

      {/* Core values */}
      <div className="mx-auto flex flex-col gap-12 p-4 sm:p-8 py-12 sm:py-16 text-center">
        <h2 className="text-5xl font-extrabold">Our Core Values</h2>

        <h3 className="text-grayAlt font-bold opacity-60 mx-8">
          Embodying our commitment to the greater good, these values shape our
          mission to harness the potential of technology for positive change.
        </h3>

        {/* Value cards */}
        <div className="flex flex-col md:flex-row items-center mx-0 md:mx-8 gap-8">
          {values.map((value, index) => (
            <Card key={index}>
              <h3 className="text-2xl font-bold mb-3">{value.value}</h3>
              <p className="text-grayAlt opacity-60">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Photo carousel */}
      <div className="mx-auto p-4 sm:p-8 py-12 sm:py-16 text-center">
        <h2 className="text-5xl font-extrabold mb-10">Photos</h2>

        <Carousel
          autoPlay
          autoPlaySpeed={3000}
          infinite
          responsive={responsive}
        >
          <div className="flex-[0_0_33%]">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              alt="University of Washington Campus"
              className="w-full h-80"
              src={
                "https://cdn.geekwire.com/wp-content/uploads/2014/10/8618592346_e4bf2f2028_z-620x378.jpg"
              }
            />
          </div>
          <div className="flex-[0_0_33%]">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-80"
              alt="University of Washington Campus"
              src={
                "https://apru.org/wp-content/uploads/2021/12/University-of-Washington-1.jpeg"
              }
            />
          </div>
          <div className="flex-[0_0_33%]">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-80"
              alt="University of Washington Campus"
              src={
                "https://cdn.geekwire.com/wp-content/uploads/2014/10/8618592346_e4bf2f2028_z-620x378.jpg"
              }
            />
          </div>
          <div className="flex-[0_0_33%]">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-80"
              alt="University of Washington Campus"
              src={
                "https://apru.org/wp-content/uploads/2021/12/University-of-Washington-1.jpeg"
              }
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
