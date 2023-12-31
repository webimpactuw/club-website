export default function Schedule() {
  return (
    <div className="m-14">
      <div className="relative flex py-5 items-center">
        <h1 className="font-bold text-4xl">Fall Workshop Schedule</h1>
        <div className="mx-8 flex-grow border-t border-gray-400"></div>
      </div>

      <div className="m-14 font-bold text-xl">
        <div className="flex ...">
          <div className="flex-1 ...">Week</div>
          <div className="contents">
            <div className="flex-1 ...">Date</div>
            <div className="flex-1 ...">Workshop</div>
          </div>
          <div className="flex-1 ...">Topic</div>
        </div>
      </div>
    </div>
  );
}
