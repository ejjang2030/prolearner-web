interface BottomNavItem {
  name: string;
  iconUrl: string;
}

interface BottomNavConfig {
  [key: string]: BottomNavItem;
}
import home from '../../assets/home.svg';
import challenge from '../../assets/challenge.svg';
import search from '../../assets/search.svg';
import profile from '../../assets/profile.svg';

const BottomNavConfig: BottomNavConfig = {
  Home: {
    name: '홈',
    iconUrl: home,
  },
  Challenge: {
    name: '챌린지',
    iconUrl: challenge,
  },
  Search: {
    name: '검색',
    iconUrl: search,
  },
  Profile: {
    name: '프로필',
    iconUrl: profile,
  },
};

export default BottomNavConfig;
