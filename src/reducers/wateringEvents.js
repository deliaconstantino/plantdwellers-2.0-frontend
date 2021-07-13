const wateringEvents = (
  state = {
    dateEvents: {},
  },
  action
) => {
  switch (action.type) {
    case "ADD_WATERING_EVENTS":
      const dateEvents = {};
      action.payload.forEach((data) => {
        const dateParts = data.attributes.date.split("-");
        const calendarDate = new Date(
          dateParts[0],
          dateParts[1] - 1,
          dateParts[2]
        ).toISOString();
        const plantEvent = {
          id: data.id,
          plantId: data.attributes.plant_id,
          completed: data.attributes.completed,
          eventType: data.attributes.event_type,
          plantName: data.attributes.plant_name,
          calendarDate,
        };

        if (dateEvents.hasOwnProperty(calendarDate)) {
          dateEvents[calendarDate].push(plantEvent);
        } else {
          dateEvents[calendarDate] = [plantEvent];
        }
      });
      return {
        ...state,
        dateEvents: dateEvents,
      };

    case "UPDATE_EVENT_COMPLETION":
      const dateParts = action.action.attributes.date.split("-");
      const calendarDate = new Date(
        dateParts[0],
        dateParts[1] - 1,
        dateParts[2]
      ).toISOString();

      const updatedDateEventsArray = state.dateEvents[calendarDate].map(
        (event) => {
          if (event.id === action.action.id) {
            event.completed = action.action.attributes.completed;
            return event;
          } else {
            return event;
          }
        }
      );

      const updatedDateEvent = {
        calendarDate: updatedDateEventsArray,
      };
      return {
        ...state,
        dateEvents: { ...state.dateEvents, ...updatedDateEvent },
      };
    default:
      return state;
  }
};

export default wateringEvents;
