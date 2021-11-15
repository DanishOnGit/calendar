import { eventDuration } from "../utils/dateFormat";

export const EventCard = ({ event: { title, startTime, endTime }, theme }) => {
  const result = eventDuration(startTime, endTime);
  return (
    <li
      className={`${theme}-theme my-2 rounded bg-green-600 px-3 py-2 text-white`}
    >
      <p className="text-lg font-bold">{title}</p>
      <small>{result}</small>
    </li>
  );
};
