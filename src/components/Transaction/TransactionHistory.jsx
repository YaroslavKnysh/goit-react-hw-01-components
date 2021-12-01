import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';
import style from './Transaction.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={style.transactionHistory}>
      <thead className={style.transactionHistory_head}>
        <tr>
          <th className={style.transactionHistory_head_th}>Type</th>
          <th className={style.transactionHistory_head_th}>Amount</th>
          <th className={style.transactionHistory_head_th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
TransactionHistory.propTypes = {
  items: PropTypes.array,
};
