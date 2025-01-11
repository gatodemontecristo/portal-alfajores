import { UserBigHOCProps } from '../../../../interfaces';
import { UserBig as UserBigHOC } from './UserBig';
import { UserIcon } from './UserIcon';
import { UserImage } from './UserImage';
import { UserInfo } from './UserInfo';

export const UserBig: UserBigHOCProps = Object.assign(UserBigHOC, {
  Icon: UserIcon,
  Image: UserImage,
  Info: UserInfo,
});
