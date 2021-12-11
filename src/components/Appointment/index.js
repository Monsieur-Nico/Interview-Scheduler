import React, { Fragment } from "react";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from "../../hooks/useVisualMode";

import "./styles.scss";
import Form from "./Form";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  // console.log(props.interview);

  return (
    <Fragment>
      <Header time={props.time} />
      <article className="appointment">
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
          />
        )}
        {mode === CREATE && <Form interviewers={props.interviewers} onCancel={back} />}
      </article>
    </Fragment>
  );
}