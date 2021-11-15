import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { checkSlotAvailability } from "../utils/checkSlotAvailability";
export const CreateEvent = ({ events, setEvents, showModal, setShowModal }) => {
  const [title, setTitle] = useState("");

  const [startTime, setStartTime] = useState(
    moment().format("YYYY-MM-DDTHH:mm")
  );
  const [endTime, setEndTime] = useState(moment().format("YYYY-MM-DDTHH:mm"));

  const titleRef = useRef(null);

  function addEvent() {
    const result = checkSlotAvailability(startTime, events);
    if (!result) {
      setEvents((prev) => [
        ...prev,
        { id: uuidv4(), title, startTime, endTime },
      ]);
      setTitle("");
      setShowModal(false);
    } else {
      toast.error("Slot already booked", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  function cancelEventAddition() {
    setTitle("");
    setShowModal(false);
  }
  useEffect(() => {
    titleRef.current?.focus();
  });
  return (
    <div className={showModal ? "modal-wrapper" : "hidden"}>
      <div
        className={
          showModal
            ? "event-modal bg-white bg-opacity-80 block p-4 p mx-2 sm:mx-4  max-w-xs w-full rounded-3xl text-center"
            : "hidden p-2 mx-2 sm:mx-4 event-modal max-w-xs w-full"
        }
      >
        <h2 className="mb-4">Add new event</h2>
        <input
          ref={titleRef}
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
          className="sec-btn block px-5 py-2 my-2 rounded-lg min-w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
