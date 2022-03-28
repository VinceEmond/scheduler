import React, {Fragment} from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import useVisualMode from 'Hooks/useVisualMode';



const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";  

const Appointment = (props) => {
  // Props:
    // id={1}
    // time="4pm"
    // interview={{ student: "Lydia Miller-Jones", interviewer }}
    // interviewers: array
    // bookInterview (id, interview)

  const {mode, transition, back} = useVisualMode(
    props.interview ? SHOW : EMPTY
    );


  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };

    props.bookInterview(props.id, interview)
    .then(() => {
      transition(SHOW)
    });
  }

  return (
    <Fragment>
      <article className="appointment">
        <Header time={props.time}></Header>
        {mode === EMPTY && 
          <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
          />
        )}
        {mode === CREATE && 
          <Form 
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
          />}
      </article>
    </Fragment>
  );

}

export default Appointment;
