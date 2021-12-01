import PropTypes from 'prop-types';
import React from 'react';
import style from './Statistics.module.css';

function randomCount(max) {
  return Math.floor(Math.random() * max);
}

function StatisticsItem({ label, percentage }) {
  return (
    <li
      style={{
        backgroundColor: `rgb(${randomCount(256)}, ${randomCount(
          256,
        )}, ${randomCount(256)})`,
      }}
      className={style.item}
    >
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
}

export default StatisticsItem;

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
