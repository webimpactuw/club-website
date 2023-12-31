export default function Week({ weeknum, date, workshop, topic, bold }) {
  let styling = "flex items-center justify-around";
  styling = bold ? (styling += " font-bold") : styling;
  return (
    <div>
      <ul className={styling}>
        <li>{weeknum}</li>
        <div>
          <li>{date}</li>
        </div>
        <li>{workshop}</li>
        <li>{topic}</li>
      </ul>
    </div>
  );
}
