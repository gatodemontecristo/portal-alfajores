import { UserModalHOCProps } from '../../../../interfaces';
import { UserModalEdit as UserModalHOC } from './UserModalEdit';
import { UserList } from './UserList';
import { UserTittle } from './UserTittle';
import { UseForm } from './UseForm';
import { UserButtons } from './UserButtons';

export const UserModalEdit: UserModalHOCProps = Object.assign(UserModalHOC, {
  Tittle: UserTittle,
  List: UserList,
  Form: UseForm,
  Buttons: UserButtons,
});
