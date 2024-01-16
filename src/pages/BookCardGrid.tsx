import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  SimpleGrid,
  Text,
  Tooltip,
} from '@mantine/core';
import { IconLibraryPhoto, IconShoppingCartMinus, IconShoppingCartPlus } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useBookVolumes, useSetBookVolumes } from '@/components/hooks/useData';
import { notifications } from '@mantine/notifications';
import { BookVolume } from '@/components/atoms/BookType';

interface BookCardGridProps {
  data: BookVolume[];
}
export function BookCardGrid({ data }: BookCardGridProps) {
  const setCart = useSetBookVolumes();
  const cart = useBookVolumes();

  const addToCart = (item: BookVolume) => {
    let existItemCount = cart.filter((elem) => item.id === elem.id).length;
    item.count = existItemCount + 1;
    notifications.show({
      title: 'Ürün sepete eklendi.',
      message: 'Keyifli alışverişler dileriz.',
      pos: 'fixed',
      bottom: 30,
      right: 30,
      color: 'blue',
    });
    setCart([...cart, item]);
  };

  const removeToCart = (item: BookVolume) => {
    let updatedCart = [...cart];
    let existItem = updatedCart.find((elem) => item.id === elem.id);

    if (existItem) {
      if (existItem.count && existItem.count > 1) {
        existItem.count -= 1;
      } else {
        updatedCart = updatedCart.filter((elem) => elem.id !== item.id);
      }

      notifications.show({
        title: 'Ürün sepetten çıkarıldı.',
        message: 'İyi günler dileriz.',
        pos: 'fixed',
        bottom: 30,
        right: 30,
        color: 'red',
      });

      setCart(updatedCart);
    }
  };

  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}>
        {data?.length > 0 &&
          data.map((item) => (
            <Card shadow="sm" padding="lg" radius="md" withBorder>
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
                  <Group pos="absolute" right={15} top={15} gap={5}>
                    <ActionIcon onClick={() => removeToCart(item)}>
                      <IconShoppingCartMinus />
                    </ActionIcon>
                    <ActionIcon pos="relative" onClick={() => addToCart(item)}>
                      <IconShoppingCartPlus />
                      <Badge pos="absolute" bottom={-18} left={-17} fz={12} mih={18}>
                        {cart.find((elem) => elem.id === item.id)?.count ?? 0}
                      </Badge>
                    </ActionIcon>
                  </Group>
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

              <Button variant="gradient" fullWidth mt="md" radius="md">
                <Link
                  style={{
                    textDecoration: 'none',
                    color: '#fff',
                  }}
                  to={'/details/' + item.id}
                >
                  Detay Göster
                </Link>
              </Button>
            </Card>
          ))}
      </SimpleGrid>
    </>
  );
}
