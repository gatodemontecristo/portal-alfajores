import { UserModalHOCProps } from '../../../../interfaces';
import { UserModalEdit as UserModalHOC } from './UserModalEdit';
import { UserList } from './UserList';
import { UserTittle } from './UserTittle';

export const UserModalEdit: UserModalHOCProps = Object.assign(UserModalHOC, {
  Tittle: UserTittle,
  List: UserList,
});
