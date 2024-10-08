"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigationData = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Schedule",
    href: "/schedule",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  if (!pathname.includes("/studio")) {
    return (
      <nav className="md:sticky top-0 bg-darkPurple text-lightText z-10">
        <div className="max-w-screen-2xl flex flex-col sm:flex-row gap-4 sm:gap-0 p-4 mx-auto md:px-8 items-center justify-between">
          <Link href="/" className="font-medium text-lg md:hover:underline">
            <Image
              src="/logo_main.svg"
              alt="Web Impact Logo"
              width={175}
              height={60}
              priority
            />
          </Link>
          <ul className="flex items-center justify-end gap-12 text-sm font-medium">
            {navigationData.map((item) => (
              <li className="md:hover:underline" key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}
