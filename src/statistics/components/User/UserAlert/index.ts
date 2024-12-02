import { UserAlertHOCProps } from '../../../../interfaces';
import { UserAlert as UserAlertHOC } from './UserAlert';
import { UserDate } from './UserDate';
import { UserImage } from './UserImage';
import { UserInfo } from './UserInfo';

export const UserAlert: UserAlertHOCProps = Object.assign(UserAlertHOC, {
  Image: UserImage,
  Info: UserInfo,
  Date: UserDate,
});
