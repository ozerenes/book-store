import { useEffect, useState } from 'react';
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
import { Link, useParams } from 'react-router-dom';
import api from '@/components/atoms/AxiosIns';
import { useBookVolumes, useSetBookVolumes } from '@/components/hooks/useData';
import { notifications } from '@mantine/notifications';
export interface BookVolume {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    readingModes: {
      text: boolean;
      image: boolean;
    };
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: {
      containsEpubBubbles: boolean;
      containsImageBubbles: boolean;
    };
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  saleInfo: {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice: {
      amount: number;
      currencyCode: string;
    };
    retailPrice: {
      amount: number;
      currencyCode: string;
    };
    buyLink: string;
    offers: {
      finskyOfferType: number;
      listPrice: {
        amountInMicros: number;
        currencyCode: string;
      };
      retailPrice: {
        amountInMicros: number;
        currencyCode: string;
      };
    }[];
  };
  accessInfo: {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: {
      isAvailable: boolean;
    };
    pdf: {
      isAvailable: boolean;
      acsTokenLink: string;
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  };
  searchInfo: {
    textSnippet: string;
  };
  count: number;
}
export function BookCardGrid() {
  const [data, setData] = useState<BookVolume[]>([]);
  const { q } = useParams();
  const setCart = useSetBookVolumes();
  const cart = useBookVolumes();
  async function fetchBookData() {
    try {
      const response = await api.get('/volumes', {
        params: {
          q: q,
        },
      });
      setData(response?.data?.items);
      console.log('Book data:', response.data);
    } catch (error) {
      console.error('Error fetching book data:', error);
    }
  }

  useEffect(() => {
    if (q) {
      fetchBookData();
    }
  }, [q]);

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
                <Badge
                  pos="absolute"
                  top={15}
                  right={15}
                  variant="gradient"
                  gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                >
                  Stokta var
                </Badge>
              )}

              {item.saleInfo.saleability === 'NOT_FOR_SALE' && (
                <Badge
                  pos="absolute"
                  top={15}
                  right={15}
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
              <Text size="sm">
                Yazar :{' '}
                {item?.volumeInfo?.authors?.length > 0
                  ? item?.volumeInfo?.authors?.map((elem) => elem)
                  : '-'}
              </Text>
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

              <Button color="blue" fullWidth mt="md" radius="md">
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
              <ActionIcon onClick={() => removeToCart(item)}>
                <IconShoppingCartMinus />
              </ActionIcon>
              {cart.find((elem) => elem.id === item.id)?.count ?? 0}
              <ActionIcon onClick={() => addToCart(item)}>
                <IconShoppingCartPlus />
              </ActionIcon>
            </Card>
          ))}
      </SimpleGrid>
    </>
  );
}
