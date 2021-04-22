import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import OneTransaction from '../OneTransaction/OneTransaction';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <OneTransaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
