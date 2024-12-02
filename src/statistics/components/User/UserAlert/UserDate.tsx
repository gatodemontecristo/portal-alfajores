import { useContext } from 'react';
import { UserContext } from './UserAlert';
import { DataTagsProps } from '../../../../interfaces';
import { nanoid } from 'nanoid';

const UserDateTag = ({ item }: { item: DataTagsProps }) => {
  return (
    <span
      className={`text-center text-white text-[11px]	px-2 py-1 font-semibold rounded-3xl ${item.over9 ? 'bg-yellow-500' : 'bg-slate-400'}`}
    >
      <p>{item.date}</p>
    </span>
  );
};
export const UserDate = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-row gap-1 flex-wrap justify-center">
      {user.dates.map((item) => (
        <UserDateTag {...{ item }} key={nanoid()}></UserDateTag>
      ))}
    </div>
  );
};
