"use client";

import Image from "next/image";
import Button from "./components/Button";
import CTA from "./components/CTA";
import Card from "./components/Card";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
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
      <header className="bg-dark-purple py-40 px-10 flex items-center justify-center bg-home">
        <h1 className="text-white text-5xl mr-16 font-extrabold">
          Designing, Developing, and <br />{" "}
          <span className="text-primary">Impacting</span> our Communities
        </h1>
        <div className="flex-col">
          <p className="text-white mb-6 max-w-screen-md">
            Web Impact is a University of Washington web design and development
            RSO that provides a technical foundation for students and
            facilitates the creation of pro-bono websites for local communities
            and organizations within the Seattle area.
          </p>
          <Button href="https://discord.gg/GqfcCyvWxU">Join our Discord</Button>
        </div>
      </header>

      {/* What we do */}
      <div className="py-20 px-10 text-center">
        <h2 className="text-5xl font-extrabold mb-10">What We Do</h2>

        <div className="flex justify-center">
          <div className="max-w-xl text-left mx-5">
            <Image
              src="/teaching.svg"
              alt="What We Do"
              width={80}
              height={80}
            />
            <h2 className="text-2xl font-bold">
              Web Design & Development Workshops
            </h2>

            <p className="my-6">
              Our weekly workshops allow students of all skill levels to learn
              web design and development, preparing them to create impactful
              websites for real organizations during our project phase of the
              year.
            </p>

            <CTA href="/schedule">Check out our workshop schedule</CTA>
          </div>

          <div className="border-l border-gray-300 mx-20"></div>

          <div className="max-w-xl text-left mx-5">
            <Image
              src="/community.svg"
              alt="What We Do"
              width={80}
              height={80}
            />
            <h2 className="text-2xl font-bold">
              Pro-bono Websites for Local Businesses
            </h2>

            <p className="my-6">
              Starting in Winter, we form student teams to build free websites
              for underserved communities and local businesses in Seattle,
              offering practical experience and real impact.
            </p>

            <CTA href="/projects">Check out our past projects</CTA>
          </div>
        </div>
      </div>

      {/* Core values */}
      <div className="py-20 px-10 text-center">
        <h2 className="text-5xl font-extrabold mb-10">Our Core Values</h2>

        <h3 className="text-gray-secondary font-bold opacity-60">
          Embodying our commitment to the greater good, these values shape our
          mission to harness the potential of technology for positive change.
        </h3>

        {/* Value cards */}
        <div className="flex justify-center mt-20">
          {values.map((value, index) => (
            <Card key={index} className="mx-5">
              <h3 className="text-2xl font-bold mb-3">{value.value}</h3>
              <p className="text-gray-secondary opacity-60">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Photo carousel */}
      <div className="py-20 px-10 text-center">
        <h2 className="text-5xl font-extrabold mb-10">Photos</h2>

        <Carousel
          autoPlay
          autoPlaySpeed={3000}
          infinite
          responsive={responsive}
        >
          <div className="flex-[0_0_33%]">
            <Image width="0" height="0" sizes="100vw" className="w-full h-80" src={"https://cdn.geekwire.com/wp-content/uploads/2014/10/8618592346_e4bf2f2028_z-620x378.jpg"}/>
          </div>
          <div className="flex-[0_0_33%]">
            <Image width="0" height="0" sizes="100vw" className="w-full h-80" src={"https://apru.org/wp-content/uploads/2021/12/University-of-Washington-1.jpeg"}/>
          </div>
          <div className="flex-[0_0_33%]">
            <Image width="0" height="0" sizes="100vw" className="w-full h-80" src={"https://cdn.geekwire.com/wp-content/uploads/2014/10/8618592346_e4bf2f2028_z-620x378.jpg"}/>
          </div>
          <div className="flex-[0_0_33%]">
            <Image width="0" height="0" sizes="100vw" className="w-full h-80" src={"https://apru.org/wp-content/uploads/2021/12/University-of-Washington-1.jpeg"}/>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
