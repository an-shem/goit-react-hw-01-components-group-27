import PropTypes from 'prop-types';
import StatisticsListItem from '../StatisticsListItem/StatisticsListItem';
import styles from './StatisticsList.module.css';

const StatisticsList = ({ stats }) => (
  <ul className={styles.statList}>
    {stats.map(stat => (
      <StatisticsListItem key={stat.id} stat={stat} color={getRandomColor()} />
    ))}
  </ul>
);

StatisticsList.propTypes = {
  stats: PropTypes.array.isRequired,
};

export default StatisticsList;

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}
