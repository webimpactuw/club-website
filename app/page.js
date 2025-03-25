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
      image: "/community.svg",
      description:
        "Fostering an inclusive community where everyone can share their passions for web development.",
    },
    {
      value: "Service",
      image: "/service.svg",
      description:
        "Empowering local, underserved organizations and communities by providing prro-bono websites.",
    },
    {
      value: "Learning",
      image: "/learning.svg",
      description:
        "Provide free access to tailored web design & development workshops led by our teaching officers.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-darkPurple flex items-center justify-center overflow-hidden">
        <div className="relative max-w-[96rem] mx-auto flex flex-col md:flex-row gap-8 md:gap-24 w-screen py-40 px-10 bg-home">
          <h1 className="text-white text-4xl sm:text-5xl text-center md:text-start font-extrabold">
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
            <Button target="_blank" href="https://discord.gg/GqfcCyvWxU">
              Join our Discord
            </Button>
          </div>
          <div className="absolute inset-0 translate-x-[96rem] bg-home scale-x-[-1]"></div>
        </div>
      </header>

      {/* What we do */}
      <div className="mx-auto p-4 sm:p-8 py-12 sm:py-16 text-center md:text-left">
        <h2 className="text-5xl font-extrabold mb-10 text-center">
          What We Do
        </h2>

        <div className="max-w-[96rem] mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 md:gap-0">
          <div className="flex flex-col gap-8 items-center max-w-lg">
            <Image
              className="h-72 w-full md:h-96 p-4"
              src="/workshops.svg"
              alt="What We Do"
              width={80}
              height={80}
            />
            <h2 className="text-3xl text-secondary font-bold">
              Web Design and Development Workshops for Students
            </h2>

            <p>
              Our weekly workshops allow students of all skill levels to learn
              web design and development, preparing them to create impactful
              websites for real organizations during our project phase of the
              year.
            </p>

            <CTA href="/schedule">Check out our workshop schedule</CTA>
          </div>

          <div className="hidden md:flex border border-gray mx-20 my-10"></div>

          <div className="flex flex-col gap-8 items-center max-w-lg">
            <Image
              className="h-72 w-full md:h-96 p-4"
              src="/websites.svg"
              alt="What We Do"
              width={80}
              height={80}
            />
            <h2 className="text-3xl text-secondary font-bold">
              Free of Charge Websites for Local Organizations
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
      <div className="max-w-[96rem] mx-auto flex flex-col gap-2 md:gap-4 p-4 sm:p-8 py-12 sm:py-16 text-center">
        <h2 className="text-5xl font-extrabold">Our Core Values</h2>

        <h3 className="text-grayDark opacity-60 max-w-lg mx-auto mb-12">
          Embodying our commitment to the greater good, these values shape our
          mission to harness the potential of technology for positive change.
        </h3>

        {/* Value cards */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch mx-0 md:mx-8 gap-8">
          {values.map((value, index) => (
            <Card key={index}>
              <Image
                className="p-2 bg-lightPurple rounded-full ml-auto"
                src={value.image}
                href=""
                width={48}
                height={48}
              />
              <h3 className="text-2xl font-bold mb-3">{value.value}</h3>
              <p className="text-grayDark opacity-60">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Photo carousel */}
      <div className="max-w-[96rem] mx-auto p-4 sm:p-8 py-12 sm:py-16 text-center">
        <hr className="border border-gray w-full mb-12" />

        <Carousel
          autoPlay
          autoPlaySpeed={3000}
          infinite
          responsive={responsive}
        >
          <div className="mx-8">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-80 object-cover rounded-xl"
              src={
                "https://cdn.geekwire.com/wp-content/uploads/2014/10/8618592346_e4bf2f2028_z-620x378.jpg"
              }
            />
          </div>
          <div className="mx-8">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-80 object-cover rounded-xl"
              alt="University of Washington Campus"
              src={
                "https://apru.org/wp-content/uploads/2021/12/University-of-Washington-1.jpeg"
              }
            />
          </div>
          <div className="mx-8">
            <Image
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-80 object-cover rounded-xl"
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
              className="w-full h-80 object-cover rounded-xl"
              alt="University of Washington Campus"
              src={
                "https://apru.org/wp-content/uploads/2021/12/University-of-Washington-1.jpeg"
              }
            />
          </div>
        </Carousel>
        <hr className="border border-gray w-full mt-12" />
      </div>
    </div>
  );
}
