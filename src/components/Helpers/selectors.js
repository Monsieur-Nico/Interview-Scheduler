export default function getAppointmentsForDay(state, day) {
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