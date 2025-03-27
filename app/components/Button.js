export default function Button({ children, href, className, target }) {
  return (
    <a
      href={href}
      target={target}
      className={`px-4 py-2 bg-primary text-white rounded-full font-medium hover:bg-opacity-90 ${className}`}
    >
      {children}
    </a>
  );
}
