import React from 'react';
import "components/InterviewerList.scss";
import InterviewerListItem from './InterviewerListItem';
// import PropTypes from 'prop-types';

const InterviewerList = (props) => {

  const interviewerListArr = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={() => props.onChange(interviewer.id)}
      />);
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewerListArr}</ul>
    </section>
  );
};

// InterviewerList.propTypes = {
//   interviewer: PropTypes.array.isRequired
// };

export default InterviewerList;