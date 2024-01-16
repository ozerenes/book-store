import api from '@/components/atoms/AxiosIns';
import { useEffect, useState } from 'react';
import { BookCardGrid } from '@/components/organisms/BookCardGrid';
import { useParams } from 'react-router-dom';
import { BookVolume } from '@/components/atoms/BookType';
import { GridSkeleton } from '@/components/molecules/GridSkeleton';

export function SearchPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<BookVolume[]>([]);
  const { q } = useParams();
  function fetchBookData() {
    api
      .get('/volumes', {
        params: {
          q: q,
        },
      })
      .then((response) => setData(response?.data?.items))
      .catch((error) => console.error('Error fetching book data:', error))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    if (q) {
      fetchBookData();
    }
  }, [q]);

  return loading ? <GridSkeleton /> : <BookCardGrid data={data} />;
}
