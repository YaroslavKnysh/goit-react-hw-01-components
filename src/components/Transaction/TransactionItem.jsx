import React from "react";
import PropTypes from "prop-types";

function TransactionItem({ type, amount, currency }) {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

export default TransactionItem;
TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
