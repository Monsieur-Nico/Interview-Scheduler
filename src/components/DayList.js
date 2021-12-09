import React from "react";
import DayListItem from "./DayListItem";


export default function DayList(props) {
  const listDays = props.days.map(day => <DayListItem name={day.name} selected={day.name === props.selectedDay} key={day.id} setDay={props.setDay} spots={day.spots} />)
  return (
    <ul >
      {listDays}
    </ul>
  );
}