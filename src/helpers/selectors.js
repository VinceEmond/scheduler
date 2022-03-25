


export function getAppointmentsForDay(state, selectedDay) {
  const appointmentForTheDayArr = [];
  
    for (const day of state.days){
      if (day.name === selectedDay){
        day.appointments.forEach((id) => {appointmentForTheDayArr.push(state.appointments[id])})
      }
    }

  return appointmentForTheDayArr;
};


export function getInterview(state, interview) {
  if (!interview) return null;

  const interviewerID = interview.interviewer;
  const interviewerDB = state.interviewers;
  const interviewer = interviewerDB[interviewerID]

  const interviewObject = {
    ...interview, 
    interviewer
  };

  return interviewObject;
};
