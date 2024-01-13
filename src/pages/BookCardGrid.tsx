import { useBookVolumes } from '@/components/hooks/useData';
import { useEffect } from 'react';
import { Badge, Button, Card, Group, Image, SimpleGrid, Text, Tooltip } from '@mantine/core';

export function BookCardGrid() {
  const bookVolume = useBookVolumes();

  useEffect(() => {
    console.log(bookVolume);
  }, [bookVolume]);
  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
        {bookVolume?.length > 0 &&
          bookVolume.map((item) => (
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src={item?.volumeInfo?.imageLinks?.thumbnail ?? ''}
                  height={160}
                  alt="Norway"
                />
              </Card.Section>

              {item.saleInfo.saleability === 'FOR_SALE' && (
                <Badge pos="absolute" top={15} right={15} color="green">
                  Stokta var
                </Badge>
              )}

              {item.saleInfo.saleability === 'NOT_FOR_SALE' && (
                <Badge pos="absolute" top={15} right={15} color="pink">
                  Stokta yok
                </Badge>
              )}

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Norway Fjord Adventures</Text>
              </Group>
              <Text size="sm">
                {item?.volumeInfo?.authors.map((elem) => (elem ? 'Yazar : ' + elem : '-'))}
              </Text>
              <Tooltip maw={500} multiline={true} label={item?.volumeInfo?.description ?? '-'}>
                <Text size="sm" c="dimmed" lineClamp={4} h={80}>
                  {item?.volumeInfo?.description ?? '-'}
                </Text>
              </Tooltip>

              <Button color="blue" fullWidth mt="md" radius="md">
                Book classic tour now
              </Button>
            </Card>
          ))}
      </SimpleGrid>
    </>
  );
}
