import styles from './TabBar.module.css';

import editBtn from '../../assets/icon/icon-edit.png';
import homeBtn from '../../assets/icon/icon-home.png';
import messageBtn from '../../assets/icon/icon-message-circle.png';
import profileBtn from '../../assets/icon/icon-user.png';

function TabBar() {
  return (
    <nav className={styles.tabBar}>
      <button type="button">
        <img src={homeBtn} alt="홈" />홈
      </button>
      <button type="button">
        <img src={messageBtn} alt="채팅" />
        채팅
      </button>
      <button type="button">
        <img src={editBtn} alt="게시물 작성" />
        게시물 작성
      </button>
      <button type="button">
        <img src={profileBtn} alt="프로필" />
        프로필
      </button>
    </nav>
  );
}
export default TabBar;
