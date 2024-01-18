import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { notifications } from '@mantine/notifications';
import api from '@/components/atoms/AxiosIns';
import { BookCardGrid } from '@/components/organisms/BookCardGrid';
import { BookVolume } from '@/components/atoms/BookType';
import { GridSkeleton } from '@/components/molecules/GridSkeleton';
import { Flex } from '@mantine/core';
import { CustomPagination } from '@/components/atoms/CustomPagination';

export function SearchPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<BookVolume[]>([]);
  const { q } = useParams();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const maxResults = 10;

  function fetchBookData() {
    const startIndex = (currentPage - 1) * maxResults;
    api
      .get('/volumes', {
        params: { q, startIndex, maxResults },
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
    if (q) {
      setLoading(true);
      fetchBookData();
    }
  }, [q, currentPage]);

  return loading ? (
    <GridSkeleton />
  ) : (
    <Flex direction="column" gap={15}>
      <BookCardGrid data={data} />
      <Flex justify="flex-end">
        <CustomPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          maxResults={maxResults}
        />
      </Flex>
    </Flex>
  );
}
