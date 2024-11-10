import { useCheckAuth } from '../hooks';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { CheckingAuth } from '../ui';
import { AuthChildRoutes, AuthRoutes } from '../auth';
import { PaymentChildRoutes, PaymentRoutes } from '../payments';
import { StatisticChildRoutes, StatisticRoutes } from '../statistics';

export const CreateRouter = () => {
  const { status } = useCheckAuth();

  if (status === 'loading') {
    return [
      {
        path: '*',
        element: <CheckingAuth />,
      },
    ];
  } else {
    return [
      {
        path: '/auth',
        element: (
          <PublicRoute>
            <AuthRoutes></AuthRoutes>
          </PublicRoute>
        ),
        children: AuthChildRoutes,
      },
      {
        path: '/statistics',
        element: (
          <PublicRoute>
            <StatisticRoutes></StatisticRoutes>
          </PublicRoute>
        ),
        children: StatisticChildRoutes,
      },
      {
        path: '/',
        element: (
          <PrivateRoute>
            <PaymentRoutes />
          </PrivateRoute>
        ),
        children: PaymentChildRoutes,
      },
    ];
  }
};
