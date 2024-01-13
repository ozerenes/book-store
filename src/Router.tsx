import { Route, Routes } from 'react-router-dom';
import { BookCardGrid } from './pages/BookCardGrid';
import { BookDetail } from '@/pages/BookDetail';
import { HomePage } from '@/pages/HomePage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/:q" element={<BookCardGrid />} />
      <Route path="/details/:id" element={<BookDetail />} />
    </Routes>
  );
}
