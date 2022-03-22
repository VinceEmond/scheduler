import React from "react";

import classNames from "classnames";
import 'components/DayListItem.scss';

export default function DayListItem(props) {
  const {name, spots, setDay, selected} = props;

  const formatSpots = (spots) => {
    if (spots === 1){return '1 spot remaining'};
    if (spots === 0){return 'no spots remaining'};

    return `${spots} spots remaining`
  };

  const dayClass = classNames(
    'day-list__item', {
    'day-list__item--selected':selected, 
    'day-list__item--full': (spots === 0)
  });

  return (
    <li className={dayClass}>
      <h2 onClick={() => setDay(name)}className="text--regular">{name}</h2> 
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}