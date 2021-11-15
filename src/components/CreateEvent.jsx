import moment from "moment";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const CreateEvent = ({ setEvents, showModal, setShowModal }) => {
  const [title, setTitle] = useState("");

  const [startTime, setStartTime] = useState(
    moment().format("YYYY-MM-DDTHH:mm")
  );

  const [endTime, setEndTime] = useState(moment().format("YYYY-MM-DDTHH:mm"));

  function addEvent() {
    setEvents((prev) => [...prev, { id: uuidv4(), title,startTime,endTime }]);
    setTitle('')
    setShowModal(false);
  }
  function cancelEventAddition() {
    setShowModal(false);
  }
  return (
    <div
      className={
        showModal
          ? "bg-white border border-green-500 block p-2 mx-2 sm:mx-4 event-modal max-w-xs w-full rounded"
          : "hidden p-2 mx-2 sm:mx-4 event-modal max-w-xs w-full"
      }
    >
      <input
        value={title}
        className="px-2 py-1 my-2 block w-full  focus:outline-none focus:ring-2 focus:ring-green-500 border rounded"
        type="text"
        placeholder="Add title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="px-2 py-1 my-2 block w-full   focus:outline-none focus:ring-2 focus:ring-green-500 border rounded"
        value={startTime}
        min={moment().format("YYYY-MM-DDThh:mm")}
        type="datetime-local"
        onChange={(e) => setStartTime(e.target.value)}
      />
      <input
        className="px-2 py-1 my-2 block w-full   focus:outline-none focus:ring-2 focus:ring-green-500 border rounded"
        value={endTime}
        min={moment(startTime).format("YYYY-MM-DDThh:mm")}
        type="datetime-local"
        onChange={(e) => setEndTime(e.target.value)}
      />

      <button
        className="block  px-5 py-2 mt-5 bg-green-500 text-white rounded min-w-full"
        onClick={addEvent}
      >
        Done
      </button>
      <button
        onClick={cancelEventAddition}
        className="block border border-green-500 px-5 py-2 my-2 text-green-500 rounded min-w-full"
      >
        Cancel
      </button>
    </div>
  );
};
