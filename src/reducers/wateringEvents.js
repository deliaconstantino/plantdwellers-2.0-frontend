const wateringEvents = (
  state = {
    dateEvents: {},
  },
  action
) => {

  // state = {
    // date1 ISO string: [plant_events],
    // date2 ISO string: [plant_events],
    // date3 ISO string: [plant_events],
  // }
  switch (action.type) {
    case "ADD_WATERING_EVENTS":
      const dateEvents = {}
      action.payload.forEach(data => {
        const dateParts = data.date.split("-");
        const calendarDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]).toISOString();
        const plantEvent= {
          id: data.id,
          plantId: data.plant_id,
          completed: data.completed,
          eventType: data.event_type,
          calendarDate
        }

        if (dateEvents.hasOwnProperty(calendarDate)) {
          dateEvents[calendarDate].push(plantEvent)
        } else {
          dateEvents[calendarDate] = [plantEvent]
        }

      })
      return {
        ...state,
        dateEvents: dateEvents
      };
    default:
      return state;
  }
};

export default wateringEvents;
