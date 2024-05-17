import Button from "./Button";

export default function Banner({ className }) {
  return (
    <div
      className={`bg-secondary text-white px-4 sm:px-8 md:px-12 py-2 sm:py-6 md:py-10 ${className || ""} w-5/6 rounded-r-full`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-white text-32 sm:text-2xl md:text-4xl font-bold">
          Need a website? <br className="block sm:hidden" />
          Let’s talk!
        </h1>
        <Button href="mailto:webimpactuw@gmail.com" className="bg-white">
          <p className="text-secondary">Email Us</p>
        </Button>
      </div>
    </div>
  );
}
