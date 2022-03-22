import React from 'react';
import DayListItem from './DayListItem';

const DayList = (props) => {
  const {days, day, setDay} = props;

  const dayListItemsArr = days.map((dayItem) => {
    const {id, name, spots} = dayItem;
    return (
        <DayListItem 
          key={id}
          name={name}
          spots={spots}
          selected={name === day}
          setDay={setDay} />
        )
  });

  return(
    <ul>{dayListItemsArr}</ul> 
  );

};

export default DayList;