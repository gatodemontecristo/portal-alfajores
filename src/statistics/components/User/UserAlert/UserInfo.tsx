import { useContext } from 'react';
import { UserContext } from './UserAlert';
import { calculateTotalAmount } from '../../../../utils';

const UserInfoTitle = ({ title }: { title: string }) => {
  return (
    <p className="text-center text-black text-[20px] font-bold">{title}</p>
  );
};

const UserInfoSubTitle = ({ money }: { money: number }) => {
  return (
    <p className="text-center text-black text-[16px] font-normal">
      {money == 0 ? 'Compitiendo' : `Debe: S/.${money}`}
    </p>
  );
};
export const UserInfo = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col">
      <UserInfoTitle title={user.name}></UserInfoTitle>
      <UserInfoSubTitle
        money={calculateTotalAmount(user.tardanzas)}
      ></UserInfoSubTitle>
    </div>
  );
};
