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
    setEvents((prev) => [...prev, { id: uuidv4(), title, startTime, endTime }]);
    setTitle("");
    setShowModal(false);
  }
  function cancelEventAddition() {
    setShowModal(false);
  }
  return (
    <div>
      <div
        className={
          showModal
            ? "event-modal block p-4 p mx-2 sm:mx-4  max-w-xs w-full rounded-3xl border border-green-500 text-center"
            : "hidden p-2 mx-2 sm:mx-4 event-modal max-w-xs w-full"
        }
      >
        <h2>Add new event</h2>
        <input
          value={title}
          className="px-2 py-3 my-2 block w-full focus:outline-none rounded-lg"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex items-center justify-between">
          <input
            className="px-2 py-3 my-2 mr-2 block w-full focus:outline-none rounded-lg"
            value={startTime}
            min={moment().format("YYYY-MM-DDThh:mm")}
            type="datetime-local"
            onChange={(e) => setStartTime(e.target.value)}
          />
          <input
            className="px-2 py-3 my-2 block w-full focus:outline-none rounded-lg"
            value={endTime}
            min={moment(startTime).format("YYYY-MM-DDThh:mm")}
            type="datetime-local"
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>

        <button
          className="pri-btn block px-5 py-2 mt-5 bg-green-500 text-white rounded-lg min-w-full"
          onClick={addEvent}
        >
          Done
        </button>
        <button
          onClick={cancelEventAddition}
          className="sec-btn block border border-green-500 px-5 py-2 my-2 text-green-500 rounded-lg min-w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
