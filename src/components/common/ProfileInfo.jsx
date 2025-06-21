import styles from './ProfileInfo.module.css';

import basicProfileImage from '../../assets/basic-profile-img.png';

function ProfileInfo({ followers, followings, name, id, intro, imageSrc }) {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = basicProfileImage;
  };

  return (
    <section className={styles.profileContainer}>
      <div className={styles.profileInfo}>
        <span className={styles.followers}>
          <strong className={styles.count}>{followers}</strong>
          <span>followers</span>
        </span>
        <div className={styles.profileImageWrapper}>
          <img src={imageSrc} alt="프로필 사진" onError={handleImageError} />
        </div>
        <span className={styles.followings}>
          <strong className={styles.count}>{followings}</strong>
          <span>followings</span>
        </span>
      </div>
      <h2 className={styles.profileName}>{name}</h2>
      <p className={styles.profileId}>@ {id}</p>
      <p className={styles.profileIntro}>{intro}</p>
    </section>
  );
}

export default ProfileInfo;
