import styles from './YourProfileActions.module.css';

import messageIcon from '../../../assets/icon/icon-message-circle.png';
import shareIcon from '../../../assets/icon/icon-share.png';

function YourProfileActions({ isFollowed, onFollowToggle }) {
  return (
    <div className={styles.buttonContainer}>
      <button type="button" className={styles.iconButton}>
        <img src={messageIcon} alt="메시지 보내기" />
      </button>

      <button
        type="button"
        className={isFollowed ? styles.unfollowButton : styles.followButton}
        onClick={onFollowToggle}
      >
        {isFollowed ? '언팔로우' : '팔로우'}
      </button>

      <button type="button" className={styles.iconButton}>
        <img src={shareIcon} alt="공유하기" />
      </button>
    </div>
  );
}

export default YourProfileActions;
