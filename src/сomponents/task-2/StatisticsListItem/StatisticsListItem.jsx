import styles from './StatisticsListItem.module.css';

const StatisticsListItem = ({ stat, color }) => (
  <li className={styles.item} style={{ backgroundColor: color }}>
    <span className={styles.label}>{stat.label}</span>
    <span className={styles.percentage}>{stat.percentage}</span>
  </li>
);

export default StatisticsListItem;
