import { useContext } from 'react';
import { UserContext } from './UserAlert';
import { calculateTotalAmount } from '../../../../utils';
import { useStatisticsStore } from '../../../../store';

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
const UserDoubtSubTitle = ({ money }: { money: number }) => {
  return (
    <p className="text-center text-black text-[16px] font-normal">
      {`Monto: S/.${money}`}
    </p>
  );
};

export const UserInfo = ({ disable = true }: { disable?: boolean }) => {
  const { user } = useContext(UserContext);
  const { alfajorCollection } = useStatisticsStore();
  return (
    <div className="flex flex-col">
      <UserInfoTitle title={user.name}></UserInfoTitle>
      {disable && (
        <UserInfoSubTitle
          money={calculateTotalAmount(
            user.tardanzas,
            alfajorCollection?.range || '',
          )}
        ></UserInfoSubTitle>
      )}
      {!disable && user.monto > 0 && (
        <UserDoubtSubTitle money={user.monto}></UserDoubtSubTitle>
      )}
    </div>
  );
};
