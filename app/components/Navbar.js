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
    title: "Calendar",
    href: "/calendar",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  if (!pathname.includes("/studio")) {
    return (
      <nav
        className={`md:sticky top-0 z-50 ${pathname === "/" ? "bg-darkPurple text-lightText" : "bg-grayLight drop-shadow-md"}`}
      >
        <div className="max-w-[96rem] mx-auto flex flex-col sm:flex-row gap-4 sm:gap-0 p-4 mx-auto md:px-8 items-center justify-between">
          <Link href="/" className="font-medium text-lg md:hover:underline">
            <Image
              src={pathname === "/" ? "/logo_main.svg" : "/logo_light.svg"}
              alt="Web Impact Logo"
              className="h-12 w-auto"
              width={158}
              height={48}
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
