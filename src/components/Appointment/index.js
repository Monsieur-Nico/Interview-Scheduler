import React from "react";
// import Header from "./Header";
// import Empty from "./Empty";

import "./styles.scss";

export default function Appointment(props) {
  const text = props.time ? `Appointment at ${props.time}` : "No appointment";

  return (
    <article className="appointment">{text}</article>
  );
}