import styles from './ProfileList.module.css';
import PropTypes from 'prop-types';

const ProfileList = ({ stats }) => (
  <ul className={styles.stats}>
    <li>
      <span className={styles.label}>Followers</span>
      <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
);

export default ProfileList;

ProfileList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
