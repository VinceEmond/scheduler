export function getAppointmentsForDay(state, selectedDay) {  
  let selectedDayAptIDs = [];
    for (const day of state.days){
      if (day.name === selectedDay){
        selectedDayAptIDs = [...day.appointments]
      }
    }
    const appointmentsForTheDayArr = selectedDayAptIDs.map(id => state.appointments[id]);

  return appointmentsForTheDayArr;
};

export function getInterviewersForDay(state, selectedDay) {  
  let selectedDayInterviewerIDs = [];

    for (const day of state.days){
      if (day.name === selectedDay){
        selectedDayInterviewerIDs = [...day.interviewers]
      }
    }
    const interviewersForTheDayArr = selectedDayInterviewerIDs.map(id => state.interviewers[id]);

  return interviewersForTheDayArr;
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
