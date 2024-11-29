import { Outlet } from 'react-router-dom';
import { NavBar, TittleBar } from '../../ui';

export const StatisticRoutes = () => {
  return (
    <>
      <TittleBar></TittleBar>
      <div className="flex">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </>
  );
};
