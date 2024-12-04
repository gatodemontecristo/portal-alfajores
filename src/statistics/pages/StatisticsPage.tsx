import { useState } from 'react';
import { DataColumnProps, DataTagsProps } from '../../interfaces';
import { mockHistory, mockUsers } from '../../mock';
import { ChocolateGraphic, DonnutGraphic, UserAlert } from '../components';
import { nanoid } from 'nanoid';
export const StatisticsPage = () => {
  const calculateTotalAmount = (
    data: DataTagsProps[] | DataColumnProps[],
  ): number => {
    return data.reduce((total, item) => {
      return total + (item.over9 ? 10 : 5);
    }, 0);
  };

  const calculateTotalByHour = (
    data: DataTagsProps[] | DataColumnProps[],
    over: boolean,
  ): number => {
    return data.reduce((total, item) => {
      return over
        ? total + (item.over9 ? 10 : 0)
        : total + (item.over9 ? 0 : 5);
    }, 0);
  };

  const calculateFinalAmount = (): number => {
    return mockUsers.reduce((total, item) => {
      return total + calculateTotalAmount(item.dates);
    }, 0);
  };
  const mapUsersDonnut = () => {
    return mockUsers
      .filter((user) => user.dates.length > 0)
      .map((user) => {
        return {
          id: user.user,
          label: user.user,
          value: calculateTotalAmount(user.dates),
          color: user.color,
        };
      });
  };
  const mapUsersChoco = () => {
    return mockUsers
      .filter((user) => user.dates.length > 0)
      .map((user) => {
        return {
          deudores: user.user,
          over8: calculateTotalByHour(user.dates, false).toString(),
          over8Color: 'hsl(112, 70%, 50%)',
          over9: calculateTotalByHour(user.dates, true).toString(),
          over9Color: 'hsl(8, 70%, 50%)',
        };
      });
  };
  const getUsersString = (users: DataColumnProps[]) => {
    return users
      .map((user) => {
        if (user.over9) {
          return `<strong>${user.user}</strong>`;
        }
        return user.user;
      })
      .join(', ');
  };

  // const data = [
  //   {
  //     id: 'ruby',
  //     label: 'ruby',
  //     value: 295,
  //     color: 'hsl(307, 70%, 50%)',
  //   },
  //   {
  //     id: 'javascript',
  //     label: 'javascript',
  //     value: 3,
  //     color: 'hsl(60, 70%, 50%)',
  //   },
  //   {
  //     id: 'elixir',
  //     label: 'elixir',
  //     value: 391,
  //     color: 'hsl(15, 70%, 50%)',
  //   },
  //   {
  //     id: 'scala',
  //     label: 'scala',
  //     value: 476,
  //     color: 'hsl(251, 70%, 50%)',
  //   },
  //   {
  //     id: 'go',
  //     label: 'go',
  //     value: 274,
  //     color: 'hsl(109, 70%, 50%)',
  //   },
  // ];
  const [isLate, setIsLate] = useState(true);
  const handleToggle = () => {
    setIsLate(!isLate);
  };
  const [isCandy, setIsCandy] = useState(true);
  const handleToggleGraphic = () => {
    setIsCandy(!isCandy);
  };
  return (
    <div className="w-full flex flex-row pt-[40px]">
      <div className="w-1/3 h-full relative pt-[40px]">
        <div className="absolute flex flex-row justify-between w-full top-0 right-0 pt-[20px] z-50 px-5">
          <p className="ms-5 font-extrabold text-[35px] h-[10%] text-[#ffb400] ">
            Gráficos
          </p>
          <div>
            <button
              onClick={handleToggleGraphic}
              className={`px-4 py-2 font-bold rounded-l-md ${
                isCandy
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              <img className="h-8 w-8 " src="../icons/gogosi.png" alt="" />
            </button>
            <button
              onClick={handleToggleGraphic}
              className={`px-4 py-2 font-bold  rounded-r-md ${
                !isCandy
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              <img className="h-8 w-8 " src="../icons/chocolate.png" alt="" />
            </button>
          </div>
        </div>
        {isCandy ? (
          <DonnutGraphic data={mapUsersDonnut()} />
        ) : (
          <ChocolateGraphic data={mapUsersChoco()}></ChocolateGraphic>
        )}
      </div>
      <div className="w-1/3 flex flex-col relative items-center justify-center h-full ">
        <div className="absolute top-0  pt-[20px]">
          <button
            onClick={handleToggle}
            className={`px-4 py-2 font-bold rounded-l-md ${
              isLate ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Tardones
          </button>
          <button
            onClick={handleToggle}
            className={`px-4 py-2 font-bold  rounded-r-md ${
              !isLate ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Puntuales
          </button>
        </div>
        <div className="flex flex-row items-center justify-center flex-wrap   h-[450px] gap-4 overflow-y-scroll custom-scrollbar">
          {mockUsers
            .filter((user) =>
              isLate ? user.dates.length > 0 : user.dates.length == 0,
            )
            .map((user) => (
              <UserAlert {...{ user }} key={nanoid()}>
                <UserAlert.Image />
                <UserAlert.Info />
                <UserAlert.Date />
              </UserAlert>
            ))}
        </div>
      </div>
      <div className="w-1/3 h-full p-5">
        <p className="ms-5 font-extrabold text-[35px] h-[10%] text-[#ffb400] ">
          Historial
        </p>
        <div className="flex flex-col bg-[#ffffffc5] h-[450px] p-5 gap-2 rounded-xl  ">
          <div className="flex flex-row w-full mb-2 border-b-2 border-black">
            <p className="font-bold text-[20px] w-1/5">Fecha</p>
            <p className="font-bold text-[20px] w-3/5">Personas</p>
            <p className="font-bold text-[20px] w-1/5">Monto</p>
          </div>
          <div className="flex flex-col overflow-y-scroll custom-scrollbar">
            {mockHistory.map((item) => (
              <div className="flex flex-row w-full" key={nanoid()}>
                <p className="w-1/5">{item.date}</p>
                <div className="w-3/5">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: getUsersString(item.users),
                    }}
                  />
                </div>
                <p className="w-1/5">S/.{calculateTotalAmount(item.users)}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-row justify-between items-center w-full mt-auto pt-2 border-t-2 border-black">
            <p className="font-bold text-[20px] ">Monto total : </p>
            <span className="px-4 py-2 bg-amber-400 flex flex-row gap-4">
              <p className="text-white font-bold text-[23px]">
                S/.{calculateFinalAmount()}
              </p>
              <img className="h-8 w-8 " src="../icons/galleta.png" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
