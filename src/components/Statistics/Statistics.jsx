import React from 'react';
import PropTypes from 'prop-types';
import StatistiscItem from './StatisticsItem';
import style from './Statistics.module.css';

function Statistic({ stats }) {
  return (
    <section className={style.statistics}>
      {stats.title && (
        <h2 className={style.title}>Upload stats</h2>
      )}
      <ul className={style.statList}>
        {stats.map(el => (
          <StatistiscItem
            key={el.id}
            label={el.label}
            percentage={el.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

export default Statistic;

Statistic.propTypes = {
  data: PropTypes.array,
};
