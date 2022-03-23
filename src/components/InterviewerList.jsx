import React from 'react';
import "components/InterviewerList.scss";
import InterviewerListItem from './InterviewerListItem';

const InterviewerList = (props) => {
  const {interviewers, setInterviewer, interviewer} = props;

  const interviewListItemsArr = interviewers.map((anInterviewer) => {
    const {id, name, avatar} = anInterviewer;
    return (
      <InterviewerListItem
        key={ id }
        name={ name }
        avatar={avatar}
        selected={ id === interviewer }
        setInterviewer={() => setInterviewer(id)}
      />);
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{ interviewListItemsArr }</ul>
    </section>
  );
};

export default InterviewerList;