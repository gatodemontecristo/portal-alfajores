import { Navigate } from 'react-router-dom';
import { StatisticsPage } from '../pages';

export const StatisticChildRoutes = [
  { path: 'statistics', element: <StatisticsPage></StatisticsPage> },
  { path: '/*', element: <Navigate to="/statistics" /> },
  { path: '/', element: <Navigate to="/statistics" /> },
];
