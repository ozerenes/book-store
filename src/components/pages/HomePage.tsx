import { useEffect, useState } from 'react';
import { notifications } from '@mantine/notifications';
import { BookCardGrid } from '@/components/organisms/BookCardGrid';
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
      .catch((error) =>
        notifications.show({
          title: 'Kitap verisi getirilemedi:',
          message: error,
          pos: 'fixed',
          bottom: 30,
          right: 30,
          color: 'red',
        })
      )
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchBookData();
  }, []);

  return loading ? <GridSkeleton /> : <BookCardGrid data={data} />;
}
