import { Navigate } from 'react-router-dom';
import { StatisticsPage } from '../pages';

export const StatisticChildRoutes = [
  { path: 'page', element: <StatisticsPage></StatisticsPage> },
  { path: '/*', element: <Navigate to="/page" /> },
  { path: '/', element: <Navigate to="/page" /> },
];
