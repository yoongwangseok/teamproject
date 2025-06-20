import styles from './ViewToggleHeader.module.css';

import postAlbumBtn from '../../assets/icon/icon-post-album-on.png';
import postListBtn from '../../assets/icon/icon-post-list-on.png';

function ViewToggleHeader() {
  return (
    <header className={styles.viewToggleHeader}>
      <button type="button">
        <img src={postListBtn} alt="리스트 보기" />
      </button>
      <button type="button">
        <img src={postAlbumBtn} alt="앨범 보기" />
      </button>
    </header>
  );
}
export default ViewToggleHeader;
