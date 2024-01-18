import { useWindowScroll } from '@mantine/hooks';
import { Pagination } from '@mantine/core';

interface CustomPaginationProps {
  setCurrentPage: (val: number) => void;
  currentPage: number;
  maxResults: number;
}

export function CustomPagination({
  setCurrentPage,
  currentPage,
  maxResults,
}: CustomPaginationProps) {
  const [scroll, scrollTo] = useWindowScroll();

  const changePage = (val: number) => {
    scrollTo({ y: 0 });
    setCurrentPage(val);
  };
  return <Pagination value={currentPage} onChange={(val) => changePage(val)} total={maxResults} />;
}
