import { useState, useEffect } from 'react';
import axios from "axios";

// Helper functions
import { getAppointmentsForDay } from "../components/Helpers/selectors";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  // Booking an appointment
  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`/api/appointments/${id}`,
      { interview: appointments[id].interview })
      .then(() => setState(prevStatus => ({ ...prevStatus, appointments })))
      .then(() => setState(prevState => {
        const newState = { ...prevState };
        const spots = getAppointmentsForDay(newState, newState.day).filter(appoint => !appoint.interview);

        for (let currentDay of newState.days) {
          if (currentDay.name === newState.day) {
            newState.days[currentDay.id - 1].spots = spots.length;
          }
        }
        return newState;
      }))
  }

  // Cancelling an appointment
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`,
      { interview: null })
      .then(() => setState(prevStatus => ({ ...prevStatus, appointments })))
      .then(() => setState(prevState => {
        const newState = { ...prevState };
        const spots = getAppointmentsForDay(newState, newState.day).filter(appoint => !appoint.interview);

        for (let currentDay of newState.days) {
          if (currentDay.name === newState.day) {
            newState.days[currentDay.id - 1].spots = spots.length;
          }
        }
        return newState;
      }))
  }

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);

  return { state, setDay, bookInterview, cancelInterview };
}