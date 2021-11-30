import PropTypes from "prop-types";
import React from "react";

function StatisticsItem({ label, percentage }) {
  return (
    <li class="item">
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  );
}

export default StatisticsItem;

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
