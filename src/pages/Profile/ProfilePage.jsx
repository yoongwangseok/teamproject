import MyView from '../../components/Profile/myView/MyView';
import YourView from '../../components/Profile/yourView/YourView';

function ProfilePage() {
  const isMyProfile = false;
  // true로 바꾸면 MyView
  // false로 바꾸면 yourView
  return <>{isMyProfile ? <MyView /> : <YourView />}</>;
}
export default ProfilePage;
