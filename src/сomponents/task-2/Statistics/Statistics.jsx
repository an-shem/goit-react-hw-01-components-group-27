import PropTypes from 'prop-types';
import StatisticsList from '../StatisticsList/StatisticsList';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className="title">{title}</h2>}
    <StatisticsList stats={stats} />
  </section>
);
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
};
