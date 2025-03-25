"use client";

import Button from "./Button";
import { usePathname } from "next/navigation";

export default function Banner({ className }) {
  const pathname = usePathname();
  if (!pathname.includes("/studio")) {
    return (
      <div className="pr-8 md:pr-24 2xl:pr-72 mx-auto">
        <div
          className={`relative max-w-[84rem] mx-auto bg-secondary text-white px-4 sm:px-8 lg:px-12 py-2 sm:py-6 lg:py-8 w-full rounded-r-full ${className || ""}`}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-white text-32 sm:text-2xl lg:text-4xl font-bold">
              Need a website? Let’s talk!
            </h1>
            <Button
              href="mailto:webimpactuw@gmail.com"
              className="bg-white transition-colors"
            >
              <p className="text-secondary">Get in touch</p>
            </Button>
          </div>
          <div className="absolute top-0 w-[50vw] left-[-50vw]">
            <div className="w-full h-[6.5rem] bg-secondary" />
          </div>
        </div>
      </div>
    );
  }
}
