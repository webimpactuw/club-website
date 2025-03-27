export default function About() {
  return (
    <div className="flex flex-col gap-8 lg:gap-12 max-w-[96rem] mx-auto p-8 md:p-12">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex flex-col gap-4">
          <p className="font-bold">Our Story</p>
          <h1 className="font-black text-4xl max-w-[24rem]">Empowering Change through Technology</h1>
        </div>
        <p className="max-w-[42rem] text-grayDark">Web Impact UW (formerly DUBvelopers) was founded by Quan Huie in 2021 in an effort to provide free website building for local businesses so they can avoid the steep prices of hiring a web developer. Since then, our member base has expanded rapidly, and we have seen a large increase in project applications. Historically, we have supported 8 organizations per year with websites, but we hope to increase this amount in the near future.</p>
      </div>

      <div className="relative flex flex-col lg:flex-row items-start lg:items-end justify-center gap-12 text-secondary">
        <div className="w-[22rem]">
          <div className="flex items-center gap-4">
            <div className="shrink-0 z-10 rounded-full bg-lightPurple border-2 border-secondary h-20 w-20 flex items-center justify-center">
              <p className="font-black text-3xl">‘21</p>
            </div>
            <div>
              <p className="font-bold text-2xl">Getting Started</p>
              <p className="text-primary">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed sed </p>
            </div>
          </div>
          <div className="hidden lg:flex w-0 h-56 border-dashed border-2 ml-10 border-secondary" />
          <div className="hidden lg:flex w-5 h-5 rounded-full bg-white border-4 border-secondary absolute -bottom-2.5 left-8 z-10" />
        </div>
        <div className="w-[22rem] relative">
          <div className="flex items-center gap-4">
            <div className="shrink-0 z-10 rounded-full bg-lightPurple border-2 border-secondary h-20 w-20 flex items-center justify-center">
              <p className="font-black text-3xl">‘22</p>
            </div>
            <div>
              <p className="font-bold text-2xl">Next Thing</p>
              <p className="text-primary">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed sed </p>
            </div>
          </div>
          <div className="hidden lg:flex w-0 h-72 border-dashed border-2 ml-10 border-secondary" />
          <div className="hidden lg:flex w-5 h-5 rounded-full bg-white border-4 border-secondary absolute -bottom-2.5 left-8 z-10" />
        </div>
        <div className="w-[22rem] relative">
          <div className="flex items-center gap-4">
            <div className="shrink-0 z-10 rounded-full bg-lightPurple border-2 border-secondary h-20 w-20 flex items-center justify-center">
              <p className="font-black text-3xl">‘23</p>
            </div>
            <div>
              <p className="font-bold text-2xl">Current Thing</p>
              <p className="text-primary">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed sed </p>
            </div>
          </div>
          <div className="hidden lg:flex w-0 h-[22rem] border-dashed border-2 ml-10 border-secondary" />
          <div className="hidden lg:flex w-5 h-5 rounded-full bg-white border-4 border-secondary absolute -bottom-2.5 left-8 z-10" />
        </div>
        <hr className="absolute top-0 bottom-0 lg:left-0 lg:right-0 lg:top-auto lg:bottom-auto border border-grayDark opacity-25 h-full lg:h-auto ml-10 lg:w-full" />
      </div>
    </div>
  );
}
