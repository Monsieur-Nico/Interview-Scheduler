import React from 'react';
import InterviewerListItem from "./InterviewerListItem";

import "./InterviewerList.scss"

export default function InterviewerList(props) {
  // Props:
  /**
   * interviewers: Array of objects
   * setInterviewers: Function accepts interviewer id and pass down to InterviewerListItem
   * interviewer: Numbers representing current selected interviewer
   */

  const listInterviews = props.interviewers.map(interviewer => <InterviewerListItem key={interviewer.id} name={interviewer.name} selected={interviewer.id === props.interviewer} setInterviewer={() => props.setInterviewer(interviewer.id)} avatar={interviewer.avatar} />)

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{listInterviews}</ul>
    </section>
  );
}