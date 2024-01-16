import { Route, Routes } from 'react-router-dom';
import { BookDetail } from '@/components/pages/BookDetail';
import { HomePage } from '@/components/pages/HomePage';
import { SearchPage } from '@/components/pages/SearchPage';
import { CartDetail } from '@/components/pages/CartDetail';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search/:q" element={<SearchPage />} />
      <Route path="/details/:id" element={<BookDetail />} />
      <Route path="/cart-detail/" element={<CartDetail />} />
    </Routes>
  );
}
