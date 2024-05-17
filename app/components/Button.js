export default function Button({ children, href, className }) {
  return (
    <a
      href={href}
      className={`px-4 py-2 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 ${className}`}
    >
      {children}
    </a>
  );
}
