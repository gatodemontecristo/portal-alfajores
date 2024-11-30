import { DonnutGraphic, UserOwe } from '../components';
export const StatisticsPage = () => {
  const data = [
    {
      id: 'ruby',
      label: 'ruby',
      value: 295,
      color: 'hsl(307, 70%, 50%)',
    },
    {
      id: 'javascript',
      label: 'javascript',
      value: 3,
      color: 'hsl(60, 70%, 50%)',
    },
    {
      id: 'elixir',
      label: 'elixir',
      value: 391,
      color: 'hsl(15, 70%, 50%)',
    },
    {
      id: 'scala',
      label: 'scala',
      value: 476,
      color: 'hsl(251, 70%, 50%)',
    },
    {
      id: 'go',
      label: 'go',
      value: 274,
      color: 'hsl(109, 70%, 50%)',
    },
  ];
  return (
    <div className="w-full flex flex-row pt-[50px]">
      <div className="w-1/3 h-full">
        <DonnutGraphic data={data} />
      </div>
      <div className="w-1/3 h-full flex items-center justify-center">
        <div className="flex flex-row items-center flex-wrap justify-center gap-4">
          <UserOwe></UserOwe>
          <UserOwe></UserOwe>
          <UserOwe></UserOwe>
          <UserOwe></UserOwe>
          <UserOwe></UserOwe>
        </div>
      </div>
      <div className="w-1/3 h-full bg-slate-600"></div>
    </div>
  );
};
