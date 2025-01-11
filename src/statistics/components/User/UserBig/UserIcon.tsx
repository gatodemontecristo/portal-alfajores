import { useHistoryStore } from '../../../../store';

export const UserIcon = () => {
  const { history } = useHistoryStore();
  return (
    <div className="flex justify-center items-center w-[70px]">
      <img
        src={`${history?.ganador === 'Navidad' ? '../big/gorro-navideno.png' : '../big/crown.png'}`}
        alt=""
      />
    </div>
  );
};
