import React from 'react';
import PropTypes from 'prop-types';
import style from './Transaction.module.css';
function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={style.transactionHistory_head_tr}>
      <td className={style.transactionHistory_head_td}>{type}</td>
      <td className={style.transactionHistory_head_td}>{amount}</td>
      <td className={style.transactionHistory_head_td}>{currency}</td>
    </tr>
  );
}

export default TransactionItem;
TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
