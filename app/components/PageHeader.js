export default function PageHeader({ displayText }) {
  return (
    <div className="relative flex py-5 items-center">
      <h1 className="font-bold text-4xl">{displayText}</h1>
      <div className="mx-8 flex-grow border-t border-gray-400"></div>
    </div>
  );
}
