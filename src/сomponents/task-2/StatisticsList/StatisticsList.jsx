import styles from './StatisticsList.module.css';
const StatisticsList = ({ stats }) => (
  <ul className={styles.statList}>
    <li className={styles.item}>
      <span className={styles.label}>.docx</span>
      <span className={styles.percentage}>4%</span>
    </li>
    <li className="styles.item">
      <span className="styles.label">.mp3</span>
      <span className="styles.percentage">14%</span>
    </li>
    <li className="styles.item">
      <span className="styles.label">.pdf</span>
      <span className="styles.percentage">41%</span>
    </li>
    <li className="styles.tem">
      <span className="styles.label">.mp4</span>
      <span className="styles.percentage">12%</span>
    </li>
  </ul>
);
export default StatisticsList;
