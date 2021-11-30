import React from "react";
import PropTypes from "prop-types";
import StatistiscItem from "./StatisticsItem";

function Statistic({ stats }) {
  return (
    <section class="statistics">
      {stats.title !== undefined && <h2 class="title">Upload stats</h2>}
      <ul class="stat-list">
        {stats.map((el) => (
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
