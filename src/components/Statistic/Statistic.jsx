import React from 'react';
import PropTypes from 'prop-types';

export default function Statistic({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <ul>
        <li> good:{good}</li>
        <li> neutral:{neutral}</li>
        <li> bad:{bad}</li>
        <li> total:{total}</li>
        <li> Positive feedback:{positivePercentage}%</li>
      </ul>
    </div>
  );
}

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
