import { useEffect, useState } from 'react';
import { BookCardGrid } from '@/pages/BookCardGrid';
import { BookVolume } from '@/components/atoms/BookType';
import api from '@/components/atoms/AxiosIns';
import { GridSkeleton } from '@/components/molecules/GridSkeleton';

export function HomePage() {
  const [data, setData] = useState<BookVolume[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  function fetchBookData() {
    api
      .get('/volumes', {
        params: {
          q: 'subject:recommendations',
        },
      })
      .then((response) => setData(response?.data?.items))
      .catch((error) => console.error('Error fetching book data:', error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchBookData();
  }, []);

  return loading ? <GridSkeleton /> : <BookCardGrid data={data} />;
}
