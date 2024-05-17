"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  
  const links = [
    {
      image: "./discord.svg",
      alt: "Discord",
      href: "https://discord.gg/GqfcCyvWxU",
    },
    {
      image: "./instagram.svg",
      alt: "Instagram",
      href: "https://www.instagram.com/webimpactuw/",
    },
    {
      image: "./github.svg",
      alt: "GitHub",
      href: "https://www.github.com/webimpactuw/",
    },
    {
      image: "./linkedin.svg",
      alt: "LinkedIn",
      href: "https://www.linkedin.com/company/webimpact-uw/",
    },
  ];
  if (pathname != "/studio") {
    return (
      <footer className="bg-dark-purple px-8 md:px-20 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center sm:items-left justify-center">
            <Image
              src="./logo_main.svg"
              alt="Web Impact Logo"
              width={175}
              height={60}
            />
            <p className="text-primary">
              © Web Impact UW {new Date().getFullYear()}-
              {new Date().getFullYear() + 1}
            </p>
          </div>

          <div className="flex justify-center gap-8">
            {links.map((link) => (
              <a href={link.href} target="_blank" key={link.href}>
                <Image
                  className="w-12 h-12 hover:bg-primary-100"
                  src={link.image}
                  alt={link.alt}
                  width={30}
                  height={30}
                />
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  }
}
