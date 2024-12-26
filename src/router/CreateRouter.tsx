import { AuthChildRoutes, AuthRoutes } from '../auth';
// import { PaymentChildRoutes, PaymentRoutes } from '../payments';
import { StatisticChildRoutes, StatisticRoutes } from '../statistics';
// import useAuthStore from '../store/useAuthStore';
// import { useEffect } from 'react';

export const CreateRouter = () => {
  // if (status === 'loading') {
  //   return [
  //     {
  //       path: '*',
  //       element: <CheckingAuth />,
  //     },
  //   ];
  // } else {
  return [
    {
      path: '/auth',
      element: <AuthRoutes></AuthRoutes>,
      children: AuthChildRoutes,
    },
    {
      path: '/',
      element: <StatisticRoutes></StatisticRoutes>,
      children: StatisticChildRoutes,
    },

    // {
    //   path: '/statistics',
    //   element: (
    //     <PrivateRoute>
    //       {/* <PaymentRoutes /> */}
    //       <StatisticRoutes></StatisticRoutes>
    //     </PrivateRoute>
    //   ),
    //   // children: PaymentChildRoutes,
    //   children: StatisticChildRoutes,
    // },
  ];
  // }
};
