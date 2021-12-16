import React from 'react';
import InterviewerListItem from "./InterviewerListItem";

import "./InterviewerList.scss"

export default function InterviewerList(props) {

  // Loop through the interviews and for each interview item return it's value in JSX
  const listInterviews = props.interviewers.map(interviewer => <InterviewerListItem key={interviewer.id} name={interviewer.name} selected={interviewer.id === props.value} setInterviewer={() => props.onChange(interviewer.id)} avatar={interviewer.avatar} />)

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{listInterviews}</ul>
    </section>
  );
}