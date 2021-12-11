const getAppointmentsForDay = function(state, day) {
  const result = [];
  const filteredDays = state.days.filter(filteredDay => filteredDay.name === day);

  if (!filteredDays.length) {
    return result;
  }

  filteredDays[0].appointments.forEach(appoint => {
    result.push(state.appointments[appoint]);
  });
  return result;
}

const getInterview = function(state, interview) {
  const { interviewers } = state;

  if (!interview) {
    return null;
  }
  console.log(interview);
  return { ...interview, interviewer: interviewers[interview.interviewer] };
}

const getInterviewersForDay = function(state, day) {
  const result = [];
  const filteredDays = state.days.filter(filteredDay => filteredDay.name === day);

  if (!filteredDays.length) {
    return result;
  }

  filteredDays[0].interviewers.forEach(interviewer => {
    result.push(state.interviewers[interviewer]);
  });
  return result;
}

export { getAppointmentsForDay, getInterview, getInterviewersForDay }