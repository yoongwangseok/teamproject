import { useState } from 'react';
import styles from './FollowButton.module.css';

function FollowButton() {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleClick = () => {
    setIsFollowed((prev) => !prev);
  };

  return (
    <button
      className={isFollowed ? styles.unfollowButton : styles.followButton}
      onClick={handleClick}
    >
      {isFollowed ? '언팔로우' : '팔로우'}
    </button>
  );
}

export default FollowButton;
