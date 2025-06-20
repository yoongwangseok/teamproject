import styles from './MyView.module.css';

// 공용 컴포넌트들
import BasicHeader from '../../common/BasicHeader';
import ProfileInfo from '../../common/ProfileInfo';
import TabBar from '../../common/TabBar';
import ViewToggleHeader from '../../common/ViewToggleHeader';

// YourView와 함께 사용하는 컴포넌트들
import PostList from '../yourView/PostList';
import ProfileStore from '../yourView/ProfileStore';

function MyView() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <BasicHeader />
        <ProfileInfo />

        {/* MyProfileButtons의 내용이 여기에 직접 들어옵니다 */}
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.profileButton}>
            프로필 수정
          </button>
          <button type="button" className={styles.profileButton}>
            상품 등록
          </button>
        </div>

        <ProfileStore />
        <ViewToggleHeader />
        <PostList />
      </div>
      <TabBar />
    </div>
  );
}

export default MyView;
