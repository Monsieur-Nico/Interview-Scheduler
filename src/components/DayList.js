import React from "react";
import DayListItem from "./DayListItem";


export default function DayList(props) {

  // Loop through the days and for each day item return it's value in JSX
  const listDays = props.days.map(day => <DayListItem name={day.name} selected={day.name === props.value} key={day.id} setDay={props.onChange} spots={day.spots} />)
  return (
    <ul >
      {listDays}
    </ul>
  );
}