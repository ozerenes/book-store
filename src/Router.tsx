import { Route, Routes } from 'react-router-dom';
import { BookDetail } from '@/pages/BookDetail';
import { HomePage } from '@/pages/HomePage';
import { SearchPage } from '@/pages/SearchPage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/:q" element={<SearchPage />} />
      <Route path="/details/:id" element={<BookDetail />} />
    </Routes>
  );
}
