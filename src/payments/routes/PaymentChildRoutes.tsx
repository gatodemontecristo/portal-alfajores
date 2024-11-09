import { Navigate } from 'react-router-dom';
import { PaymentsPage } from '../pages';

export const PaymentChildRoutes = [
  { path: 'payments', element: <PaymentsPage></PaymentsPage> },
  { path: '/*', element: <Navigate to="/payments" /> },
  { path: '/', element: <Navigate to="/payments" /> },
];
