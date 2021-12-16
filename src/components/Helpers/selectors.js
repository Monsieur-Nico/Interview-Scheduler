// A function returns an array of appointments for the current selected day
const getAppointmentsForDay = function(state, day) {
  const result = [];

  // Filter the days to get a match for the selected day
  const filteredDays = state.days.filter(filteredDay => filteredDay.name === day);

  // If the filtered array has no length, we return an empty array
  if (!filteredDays.length) {
    return result;
  }

  // push all the appointments of the selected day to the array
  filteredDays[0].appointments.forEach(appoint => {
    result.push(state.appointments[appoint]);
  });

  return result;
}

const getInterview = function(state, interview) {
  const { interviewers } = state;

  // If interview has a falsy value return null and don't proceed
  if (!interview) {
    return null;
  }

  // return an object of the interview with the updated interviewer value
  return { ...interview, interviewer: interviewers[interview.interviewer] };
}

const getInterviewersForDay = function(state, day) {
  const result = [];

  // Filter the days to get a match for the selected day
  const filteredDays = state.days.filter(filteredDay => filteredDay.name === day);

  // If the filtered array has no length, we return an empty array
  if (!filteredDays.length) {
    return result;
  }

  // push all the interviewers of the selected day to the array
  filteredDays[0].interviewers.forEach(interviewer => {
    result.push(state.interviewers[interviewer]);
  });

  return result;
}

export { getAppointmentsForDay, getInterview, getInterviewersForDay }