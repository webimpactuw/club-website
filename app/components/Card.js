export default function Card({ children, className }) {
  return (
    <div
      className={`bg-white shadow-lg rounded-xl lg:min-h-48 p-6 mx-6 md:mx-0 ${className} text-center md:text-left`}
    >
      {children}
    </div>
  );
}
