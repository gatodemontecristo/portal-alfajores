import { DataColumnProps, DataTagsProps } from '../../interfaces';
import { mockHistory, mockUsers } from '../../mock';
import { DonnutGraphic, UserAlert } from '../components';
import { nanoid } from 'nanoid';
export const StatisticsPage = () => {
  const calculateTotalAmount = (
    data: DataTagsProps[] | DataColumnProps[],
  ): number => {
    return data.reduce((total, item) => {
      return total + (item.over9 ? 10 : 5);
    }, 0);
  };

  const calculateFinalAmount = (): number => {
    return mockUsers.reduce((total, item) => {
      return total + calculateTotalAmount(item.dates);
    }, 0);
  };
  const mapUsers = () => {
    return mockUsers.map((user) => {
      return {
        id: user.user,
        label: user.user,
        value: calculateTotalAmount(user.dates),
        color: user.color,
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

  return (
    <div className="w-full flex flex-row pt-[40px]">
      <div className="w-1/3 h-full">
        <DonnutGraphic data={mapUsers()} />
      </div>
      <div className="w-1/3 h-full flex items-center justify-center">
        <div className="flex flex-row items-center flex-wrap justify-center gap-4">
          {mockUsers.map((user) => (
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
        <div className="flex flex-col bg-[#ffffffc5] h-[90%] p-5 gap-2 rounded-xl">
          <div className="flex flex-row w-full mb-2 border-b-2 border-black">
            <p className="font-bold text-[20px] w-1/5">Fecha</p>
            <p className="font-bold text-[20px] w-3/5">Personas</p>
            <p className="font-bold text-[20px] w-1/5">Monto</p>
          </div>
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
          <div className="flex flex-row justify-between items-center w-full mt-auto pt-2 border-t-2 border-black">
            <p className="font-bold text-[20px] ">Monto total : </p>
            <span className="px-4 py-2 bg-amber-400">
              <p className="text-white font-bold text-[23px]">
                S/.{calculateFinalAmount()}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
