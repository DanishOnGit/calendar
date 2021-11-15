import moment from "moment";

export function getSortedEvents(events) {
  return [...events].sort((event1, event2) => {
    return moment(event1.startTime).unix() - moment(event2.startTime).unix();
  });
}
