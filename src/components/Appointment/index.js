import React, {Fragment} from 'react';
import "components/Appointment/styles.scss";
import Header from './Header';
import Show from './Show';
import Status from './Status';
import Confirm from './Confirm';
import Empty from './Empty';
import Form from './Form';
import useVisualMode from 'Hooks/useVisualMode';



const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";  
const SAVING = "SAVING";
const DELETING = 'DELETING';
const CONFIRM = 'CONFIRM';
const EDIT = 'EDIT';

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

  const onDelete = (id) => {
    transition(DELETING);

    props.cancelInterview(id).then(()=> {
      transition(EMPTY);
    })
  }

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);

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
            onDelete={()=> transition(CONFIRM)}
            onEdit={()=> transition(EDIT)}
          />
        )}
        {mode === EDIT && 
          <Form 
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
          student={props.interview.student}
          interviewer={props.interview.interviewer.id}
          />}
        {mode === CREATE && 
          <Form 
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
          />}
        {mode === SAVING && <Status message={'Saving'}/>}
        {mode === DELETING && <Status message={'Deleting'}/>}
        {mode === CONFIRM && <Confirm onConfirm={() => onDelete(props.id)} onCancel={()=>transition(SHOW)}/>}
      </article>
    </Fragment>
  );

}

export default Appointment;
