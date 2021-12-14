import React, { Fragment } from "react";
import useVisualMode from "../../hooks/useVisualMode";

// Appointment Components:
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";

// Styles:
import "./styles.scss";

// Strings:
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVINIG";

export default function Appointment(props) {
  const { time, interview, interviewers, bookInterview, id } = props;
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    transition(SAVING, true);
    const interview = {
      student: name,
      interviewer
    };
    bookInterview(id, interview).then(() => {
      transition(SHOW);
    })
  }

  return (
    <Fragment>
      <Header time={time} />
      <article className="appointment">
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
          <Show
            student={interview.student}
            interviewer={interview.interviewer}
          />
        )}
        {mode === SAVING && (<Status message='Saving' />)}
        {mode === CREATE && <Form interviewers={interviewers} onSave={save} onCancel={back} />}
      </article>
    </Fragment>
  );
}