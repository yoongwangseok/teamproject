import MyView from '../../components/Profile/myView/MyView';
import YourView from '../../components/Profile/yourView/YourView';

function ProfilePage() {
  const isMyProfile = true; // true로 바꾸면 MyView가 보입니다.
  return <>{isMyProfile ? <MyView /> : <YourView />}</>;
}
export default ProfilePage;
