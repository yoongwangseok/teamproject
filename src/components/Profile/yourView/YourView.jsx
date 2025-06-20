import styles from './YourView.module.css';

// 공용 컴포넌트들을 import 합니다.
import BasicHeader from '../../common/BasicHeader';
import ProfileInfo from '../../common/ProfileInfo';
import TabBar from '../../common/TabBar';
import ViewToggleHeader from '../../common/ViewToggleHeader';

// yourView 내부의 컴포넌트들을 import 합니다.
import PostList from './PostList';
import ProfileStore from './ProfileStore';
import YourProfileActions from './YourProfileActions'; // 방금 만든 버튼 컴포넌트

function YourView() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <BasicHeader />
        <ProfileInfo />
        <YourProfileActions />
        <ProfileStore />
        <ViewToggleHeader />
        <PostList />
      </div>
      <TabBar />
    </div>
  );
}

export default YourView;
