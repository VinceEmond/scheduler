


export function getAppointmentsForDay(state, selectedDay) {
  const appointmentForTheDayArr = [];
  
    for (const day of state.days){
      if (day.name === selectedDay){
        day.appointments.forEach((id) => {appointmentForTheDayArr.push(state.appointments[id])})
      }
    }

  return appointmentForTheDayArr;
};

