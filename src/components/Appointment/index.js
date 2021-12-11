import React, { Fragment } from "react";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";

import "./styles.scss";

export default function Appointment(props) {
  // const text = props.time ? `Appointment at ${props.time}` : "No appointment";

  return (
    <Fragment>
      <Header time={props.time} />
      <article className="appointment">
        {props.interview ?
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
          /> :
          <Empty />}
      </article>
    </Fragment>
  );
}