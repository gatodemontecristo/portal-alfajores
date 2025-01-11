import { useHistoryStore } from '../../../../store';

export const UserImage = () => {
  const { history } = useHistoryStore();
  const getWinnerImg = ({ ganador }: { ganador: string | undefined }) => {
    const winner = history?.users.find(
      (user) => user.name === history?.ganador,
    );
    if (ganador === 'Navidad') return '../winners/navidad.png';
    else if (winner)
      return winner.img === ''
        ? winner.genre === 'female'
          ? '../people/mujer.png'
          : '../people/hombre.png'
        : winner.img;

    return '../winners/gato.png';
  };
  return (
    <div
      className={`flex w-2/3 border-solid border-[14px] ${history?.ganador === 'Navidad' ? 'border-[#EF4444]' : 'border-[#fdbd22]'}  rounded-full p-3 overflow-hidden`}
    >
      <img
        className="rounded-full"
        src={getWinnerImg({ ganador: history?.ganador })}
        alt=""
      />
    </div>
  );
};
