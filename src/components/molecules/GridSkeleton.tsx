import { SimpleGrid, Skeleton } from '@mantine/core';

export function GridSkeleton() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}>
      {new Array(16).fill(0).map((_, index) => (
        <Skeleton key={index} w={283} h={380} />
      ))}
    </SimpleGrid>
  );
}
