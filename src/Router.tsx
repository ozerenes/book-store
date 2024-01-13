import { Route, Routes } from 'react-router-dom';
import { BookCardGrid } from './pages/BookCardGrid';
import { BookDetail } from '@/pages/BookDetail';

export function Router() {
  return (
    <Routes>
      <Route path="/search/:q" element={<BookCardGrid />} />
      <Route path="/details/:id" element={<BookDetail />} />
    </Routes>
  );
}
