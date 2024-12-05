import { Outlet } from 'react-router-dom';
import { NavBar, TittleBar } from '../../ui';

export const StatisticRoutes = () => {
  return (
    <div className="flex flex-col h-screen">
      <TittleBar></TittleBar>
      <div className="flex flex-1 ">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};
