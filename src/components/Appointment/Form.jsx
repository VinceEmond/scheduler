import React, { useState } from 'react';
import Button from 'components/Button';
import InterviewerList from 'components/InterviewerList';
import { resolvePreset } from '@babel/core';

const Form = (props) => {
  // Props: 
    // student:String
    // interviewers:Array
    // interviewer:Number
    // onSave:Function
    // onCancel:Function

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  // const setStudent = () => {
  // };

  // const setInterviewer = () => {

  // };

  const reset = () => {
    setStudent("");
    setInterviewer(null);
  }

  const cancel = () => {
    reset();
    props.onCancel();
  }

  const submitHandler = (event) => {
    event.preventDefault();
  }

  // <InterviewerList interviewers={props.interviewers} selectedInterviewer={interviewer} setInterviewer={setInterviewer}/>

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={submitHandler}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event)=> {setStudent(event.target.value)}}
          />
        </form>


        <InterviewerList 
          interviewers={props.interviewers}
          onChange={setInterviewer}
          value={interviewer}
        />



      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button> {/* your code goes here */}
          <Button confirm onClick={props.onSave}>Save</Button> {/* your code goes here */}
        </section>
      </section>
    </main>
  );  
}

export default Form;