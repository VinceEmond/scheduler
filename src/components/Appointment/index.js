import React from 'react';
import "components/Appointment/styles.scss";

const Appointment = (props) => {

  const appointmentsMsg = () => {
    return (props.time ? `Appointment at ${props.time}`: `No Appointments`)
  };

  return (
    <article className="appointment">{appointmentsMsg()}</article>
  );

}

export default Appointment;