import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { CreateEvent } from "./components/CreateEvent";
import { EventCard } from "./components/EventCard";
import { getSortedEvents } from "./utils/getSortedEvents";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const sortedEvents = getSortedEvents(events);
  const themes = ["green", "blue", "orange"];

  return (
    <div className="App p-4 max-w-xl mx-auto">
      <h1 className="app-title mb-5 sm:mb-8 text-red-800 text-4xl text-center font-extrabold"> Kalendly </h1>
      <CreateEvent
      events={events}
        setEvents={setEvents}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <ul>
        {sortedEvents.map((event, idx) => {
          return (
            <EventCard
            key={event.id}
              event={event}
              theme={idx >= 3 ? themes[idx % 3] : themes[idx]}
            />
          );
        })}
      </ul>

      <button
        onClick={() => setShowModal(true)}
        className="z-10 add-event absolute bottom-4 right-4 rounded-lg p-2 text-white"
      >
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </button>
      <ToastContainer/>
    </div>
  );
}

export default App;
