import { Navigate } from 'react-router-dom';
import { HistoryPage, StatisticsPage } from '../pages';

export const StatisticChildRoutes = [
  { path: 'statistics', element: <StatisticsPage></StatisticsPage> },
  { path: 'history', element: <HistoryPage></HistoryPage> },
  { path: '/*', element: <Navigate to="/statistics" /> },
  { path: '/', element: <Navigate to="/statistics" /> },
];
