import styles from './ProfileInfo.module.css';

import basicProfileImage from '../../assets/basic-profile-img.png';

function ProfileInfo() {
  const profileData = {
    followers: 2950,
    followings: 128,
    name: '애월읍 위니브 감귤농장',
    id: 'weniv_Mandarin',
    intro: '애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장',
    image: basicProfileImage,
  };
  return (
    <section className={styles.profileContainer}>
      <div className={styles.profileInfo}>
        <span className={styles.followers}>
          <strong className={styles.count}>{profileData.followers}</strong>
          <span>followers</span>
        </span>
        <div className={styles.profileImageWrapper}>
          <img src={profileData.image} alt="프로필 사진" />
        </div>
        <span className={styles.followings}>
          <strong className={styles.count}>{profileData.followings}</strong>
          <span>followings</span>
        </span>
      </div>
      <h2 className={styles.profileName}>{profileData.name}</h2>
      <p className={styles.profileId}>@ {profileData.id}</p>
      <p className={styles.profileIntro}>{profileData.intro}</p>
    </section>
  );
}
export default ProfileInfo;
