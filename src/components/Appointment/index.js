import React, { Fragment } from "react";
import useVisualMode from "../../hooks/useVisualMode";

// Appointment Components:
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

// Styles:
import "./styles.scss";

// Modes:
const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const EDIT = "EDIT";
const DELETE = "DELETE";
const SAVING = "SAVINIG";
const CONFIRM = "CONFIRM";


export default function Appointment(props) {
  const { id, time, interview, interviewers, bookInterview, cancelInterview } = props;
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

  function cancel() {
    transition(DELETE, true);
    cancelInterview(id).then(() => {
      transition(EMPTY);
    })
  }

  return (
    <Fragment>
      <Header time={time} />
      <article className="appointment">
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && <Show student={interview.student} interviewer={interview.interviewer} onDelete={() => transition(CONFIRM)} onEdit={() => transition(EDIT)} />}
        {mode === CREATE && <Form interviewers={interviewers} onSave={save} onCancel={() => back()} />}
        {mode === EDIT && <Form student={interview.student} interviewer={interview.interviewer.id} interviewers={interviewers} onSave={save} onCancel={() => back()} />}
        {mode === SAVING && <Status message='Saving' />}
        {mode === CONFIRM && <Confirm message={"Are you sure you want to cancel?"} onCancel={() => { transition(SHOW) }} onConfirm={cancel} />}
        {mode === DELETE && <Status message='Deleting' />}
      </article>
    </Fragment>
  );
}