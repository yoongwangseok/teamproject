import styles from './BasicHeader.module.css';

import backIcon from '../../assets/icon/icon-arrow-left.png';
import moreIcon from '../../assets/icon/s-icon-more-vertical.png';

function BasicHeader() {
  return (
    <header className={styles.header}>
      <button type="button">
        <img src={backIcon} alt="뒤로가기" className={styles.icon} />
      </button>
      <button type="button">
        <img src={moreIcon} alt="더보기" className={styles.icon} />
      </button>
    </header>
  );
}

export default BasicHeader;
