import styles from './YourView.module.css';

// 공용 컴포넌트들을 import 합니다.
import BasicHeader from '../../common/BasicHeader';
import ProfileInfo from '../../common/ProfileInfo';
import TabBar from '../../common/TabBar';
import ViewToggleHeader from '../../common/ViewToggleHeader';

// yourView 내부의 컴포넌트들을 import 합니다.
import { useState } from 'react';
import PostList from './PostList';
import ProfileStore from './ProfileStore';
import YourProfileActions from './YourProfileActions';

function YourView() {
  // 아직 api연결 하는거 잘모르겠어서 하드코딩
  const [followers, setFollowers] = useState(2950);
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollowToggle = () => {
    setIsFollowed((prev) => !prev);
    setFollowers((prev) => prev + (isFollowed ? -1 : +1));
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
        <BasicHeader />
        <ProfileInfo
          followers={followers}
          followings={128}
          name="애월읍 위니브 감귤농장"
          id="weniv_Mandarin"
          intro="애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장"
          imageSrc="/assets/basic-profile-img.png"
        />

        {/* follow 버튼 UI */}
        <div className={styles.actionWrapper}>
          <YourProfileActions
            isFollowed={isFollowed}
            onFollowToggle={handleFollowToggle}
          />
        </div>

        <ProfileStore />
        <ViewToggleHeader />
        <PostList />
      </div>
      <TabBar />
    </div>
  );
}

export default YourView;
