import { Badge, Button, Card, Group, Image, SimpleGrid, Text, Tooltip } from '@mantine/core';
import { IconLibraryPhoto } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { BookVolume } from '@/components/atoms/BookType';
import { CartAddRemoveItem } from '@/components/molecules/CartAddRemoveItem';

interface BookCardGridProps {
  data: BookVolume[];
}
export function BookCardGrid({ data }: BookCardGridProps) {
  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}>
        {data?.length > 0 &&
          data.map((item) => (
            <Card shadow="sm" padding="lg" radius="md" withBorder key={item.id}>
              <Card.Section>
                {item?.volumeInfo?.imageLinks?.thumbnail ? (
                  <Image
                    src={item?.volumeInfo?.imageLinks?.thumbnail ?? ''}
                    height={160}
                    alt={item?.volumeInfo?.title ?? '-'}
                    bg="transparent"
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                ) : (
                  <IconLibraryPhoto width={'100%'} size={153} />
                )}
              </Card.Section>

              {item.saleInfo.saleability === 'FOR_SALE' && (
                <>
                  <Badge
                    pos="absolute"
                    top={15}
                    left={15}
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                  >
                    Stokta var
                  </Badge>
                  <CartAddRemoveItem item={item} />
                </>
              )}

              {item.saleInfo.saleability === 'NOT_FOR_SALE' && (
                <Badge
                  pos="absolute"
                  top={15}
                  left={15}
                  variant="gradient"
                  gradient={{ from: 'orange', to: 'red', deg: 90 }}
                >
                  Stokta yok
                </Badge>
              )}

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500} size="sm" lineClamp={1}>
                  {item.volumeInfo.title}
                </Text>
              </Group>
              <Tooltip
                label={
                  item?.volumeInfo?.authors?.length > 0
                    ? item?.volumeInfo?.authors?.map((elem) => elem)
                    : '-'
                }
              >
                <Text size="sm" lineClamp={1}>
                  Yazar :{' '}
                  {item?.volumeInfo?.authors?.length > 0
                    ? item?.volumeInfo?.authors?.map((elem) => elem)
                    : '-'}
                </Text>
              </Tooltip>

              <Tooltip
                maw={500}
                multiline={true}
                label={item?.volumeInfo?.description ?? '-'}
                hidden={!item?.volumeInfo?.description}
              >
                <Text size="sm" c="dimmed" lineClamp={4} h={80}>
                  {item?.volumeInfo?.description ?? '-'}
                </Text>
              </Tooltip>

              <Link
                style={{
                  textDecoration: 'none',
                  color: '#fff',
                }}
                to={'/details/' + item.id}
              >
                <Button variant="gradient" fullWidth mt="md" radius="md">
                  Detay Göster
                </Button>
              </Link>
            </Card>
          ))}
      </SimpleGrid>
    </>
  );
}
