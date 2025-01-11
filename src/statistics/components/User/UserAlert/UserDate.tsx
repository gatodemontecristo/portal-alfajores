import { useContext } from 'react';
import { UserContext } from './UserAlert';
import { AlfajorSpringTardProps } from '../../../../interfaces';
import { nanoid } from 'nanoid';

const UserDateTag = ({ item }: { item: AlfajorSpringTardProps }) => {
  return (
    <span
      className={`text-center text-white text-[11px]	px-2 py-1 font-semibold rounded-3xl ${item.over9 ? 'bg-yellow-500' : 'bg-slate-400'}`}
    >
      <p>{item.fecha}</p>
    </span>
  );
};
const UniqueTag = ({ text }: { text: string }) => {
  return (
    <span
      className={`text-center text-white text-[14px]	px-3 py-2 font-semibold rounded-3xl bg-pink-600`}
    >
      <p>{text}</p>
    </span>
  );
};
export const UserDate = ({ disable = true }: { disable?: boolean }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-row gap-1 flex-wrap justify-center">
      {disable ? (
        user.tardanzas.map((item) => (
          <UserDateTag {...{ item }} key={nanoid()}></UserDateTag>
        ))
      ) : user.monto > 0 ? (
        <UniqueTag text="Pagó" key={nanoid()}></UniqueTag>
      ) : (
        <UniqueTag text="Compitió" key={nanoid()}></UniqueTag>
      )}
    </div>
  );
};
