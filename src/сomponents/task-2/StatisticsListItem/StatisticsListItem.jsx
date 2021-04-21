import styles from './StatisticsListItem.module.css';

const StatisticsListItem = () => (
  <li className={styles.item}>
    <span className={styles.label}>.docx</span>
    <span className={styles.percentage}>4%</span>
  </li>
);

export default StatisticsListItem;
