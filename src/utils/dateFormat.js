import moment from "moment";

export function eventDuration(date1,date2){
    return `${moment(date1).format("MMM DD, hh:mm A")} to ${moment(date2).format("hh:mm A")}`
}
