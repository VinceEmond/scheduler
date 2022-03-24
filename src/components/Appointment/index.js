import React, {Fragment} from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from './Show';
import Empty from './Empty';


const Appointment = (props) => {

  // Props:
    // id={1}
    // time="4pm"
    // interview={{ student: "Lydia Miller-Jones", interviewer }}

  // const appointmentsMsg = () => {
  //   return (props.time ? `Appointment at ${props.time}`: `No Appointments`)
  // };


  


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