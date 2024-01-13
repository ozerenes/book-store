import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BookCardGrid } from './pages/BookCardGrid';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BookCardGrid />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
