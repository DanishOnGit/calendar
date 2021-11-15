

export function checkSlotAvailability(time,events){
  const result = events.find(event=>event.startTime==time)
  console.log('slot util',result)
  return !!result
}