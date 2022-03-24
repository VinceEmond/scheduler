import React, {Fragment} from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from './Show';
import Empty from './Empty';

const appointments = {
  "1": {
    id: 1,
    time: "12pm",
  },
  "2": {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer:{
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  "3": {
    id: 3,
    time: "2pm",
  },
  "4": {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer:{
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  "5": {
    id: 5,
    time: "4pm",
  }
};

const Appointment = (props) => {

  // Props:
    // id={1}
    // time="4pm"
    // interview={{ student: "Lydia Miller-Jones", interviewer }}

  // const appointmentsMsg = () => {
  //   return (props.time ? `Appointment at ${props.time}`: `No Appointments`)
  // };

  // if(props.interview){
  //   return <Show />
  // }

  return (
    <Fragment>
      <article className="appointment">
        <Header time={props.time}></Header>
        {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer}/>: <Empty/>}
      </article>
    </Fragment>
  );

}

export default Appointment;