export default function Week({ weeknum, date, workshop, topic, bold }) {
  let styling = "grid grid-cols-4 gap-4 text-left";
  styling = bold ? (styling += " font-bold text-xl") : styling;
  return (
    <div>
      <ul className={styling}>
        <li>{weeknum}</li>
        <li>{date}</li>
        <li>{workshop}</li>
        <li>{topic}</li>
      </ul>
    </div>
  );
}
