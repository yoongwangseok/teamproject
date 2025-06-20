import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Footer.module.css';
import FooterContext from '../contexts/FooterContext';

export default function Footer() {
  const isVisibled = useContext(FooterContext);

  return isVisibled ? (
    <footer>
      <nav className={styles["bottom-nav"]}>
        <div className={styles["nav-item"]}>
          <div className={`${styles["nav-icon"]} ${styles.home}`} />
          <span className={styles["nav-label"]}>홈</span>
        </div>
        <div className={styles["nav-item"]}>
          <div className={`${styles["nav-icon"]} ${styles.message}`} />
          <span className={styles["nav-label"]}>채팅</span>
        </div>
        <div className={styles["nav-item"]}>
          <div className={`${styles["nav-icon"]} ${styles.edit}`} />
          <span className={styles["nav-label"]}>게시물 작성</span>
        </div>
        <div className={styles["nav-item"]}>
          <div className={`${styles["nav-icon"]} ${styles.user}`} />
          <span className={styles["nav-label"]}>프로필</span>
        </div>
      </nav>
    </footer>
  ) : <></>;
}
