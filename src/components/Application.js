import React from "react";
import DayList from "./DayList"
import Appointment from "./Appointment";

// Styles:
import "components/Application.scss";

// Helper functions:
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "./Helpers/selectors";
import useApplicationData from "../hooks/useApplicationData"

export default function Application(props) {
  const { state, setDay, bookInterview, cancelInterview } = useApplicationData();

  // Call the getAppointmentsForDay function to get an array of appointment
  const dailyAppointments = getAppointmentsForDay({ days: state.days, appointments: state.appointments }, state.day);

  // Call the getInterviewersForDay function to get an array of interviewers
  const interviewers = getInterviewersForDay({ days: state.days, interviewers: state.interviewers }, state.day);

  // Loop through the appointments and make a new array containing the appointments in JSX
  const schedule = dailyAppointments.map(appointment => {
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        {...appointment}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });


  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
