import { Navigate } from 'react-router-dom';
import { StatisticsPage } from '../pages';

export const StatisticChildRoutes = [
  { path: 'page', element: <StatisticsPage></StatisticsPage> },
  { path: '/statistics/*', element: <Navigate to="/statistics/page" /> },
  { path: '/statistics/', element: <Navigate to="/statistics/page" /> },
];
