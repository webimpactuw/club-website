import Link from 'next/link';
import Image from 'next/image';

const navigationData = [
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Schedule',
    href: '/schedule',
  }
];

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 sticky top-0 bg-dark-purple text-light-text z-10">
      <div className="h-14 max-w-7xl p-4 mx-auto flex items-center justify-between">
        <Link href="/" className="font-medium text-lg md:hover:underline">
          <Image
            src="/logo_light.png"
            alt="Web Impact Logo"
            width={150}
            height={40}
            priority
          />
        </Link>
          <ul className="flex items-center justify-end space-x-20 text-sm font-medium">
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