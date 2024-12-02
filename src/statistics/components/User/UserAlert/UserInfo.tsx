import { useContext } from 'react';
import { UserContext } from './UserAlert';

const UserInfoTitle = ({ title }: { title: string }) => {
  return (
    <p className="text-center text-black text-[20px] font-bold">{title}</p>
  );
};

const UserInfoSubTitle = ({ money }: { money: number }) => {
  return (
    <p className="text-center text-black text-[16px] font-normal">
      Desde: S/.{money}
    </p>
  );
};
export const UserInfo = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col">
      <UserInfoTitle title={user.user}></UserInfoTitle>
      <UserInfoSubTitle money={user.amount}></UserInfoSubTitle>
    </div>
  );
};
