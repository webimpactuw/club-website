import Image from "next/image";

export default function Home() {
  return (
    <nav className="border-b border-gray-800 sticky top-0 bg-dark-purple text-light-text z-10">
      <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
        <a href="/" className="font-medium text-lg md:hover:underline">
          <Image
            src="/logo_light.png"
            alt="Web Impact Logo"
            width={150}
            height={40}
            priority
          />
        </a>
        <ul className="flex items-center justify-end space-x-20 text-sm font-medium">
          <li className="md:hover:underline">
            <a href="/about">About</a>
          </li>
          <li className="md:hover:underline">
            <a href="/Projects">Projects</a>
          </li>
          <li className="md:hover:underline">
            <a href="/Schedule">Schedule</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}