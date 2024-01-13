import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '@/components/atoms/AxiosIns';
import { ActionIcon, Badge, Button, Flex, Group, Image, Text } from '@mantine/core';
import { IconEyeglass, IconInfoSquare } from '@tabler/icons-react';

interface Book {
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
    industryIdentifiers: {
      type: string;
      identifier: string;
    }[];
    readingModes: {
      text: boolean;
      image: boolean;
    };
    pageCount: number;
    printedPageCount: number;
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
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
  layerInfo: {
    layers: {
      layerId: string;
      volumeAnnotationsVersion: string;
    }[];
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
      acsTokenLink: string;
    };
    pdf: {
      isAvailable: boolean;
      acsTokenLink: string;
    };
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
  };
}

interface FormatTurkishDateOptions {
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit';
  day?: 'numeric' | '2-digit';
  timeZone?: string;
}

export function BookDetail() {
  const { id } = useParams();
  const [data, setData] = useState<Book | null>();

  async function fetchBookData() {
    try {
      const response = await api.get('/volumes/' + id, {});
      console.log('Book data:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching book data:', error);
    }
  }

  useEffect(() => {
    fetchBookData();
  }, []);

  const stripHtmlTags = (input: string) => {
    const doc = new DOMParser().parseFromString(input, 'text/html');
    const textContent = doc.body.textContent || '';
    return textContent;
  };

  const formatTurkishDate = (isoDate: string) => {
    if (!isoDate) return '';

    const options: FormatTurkishDateOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timeZone: 'Europe/Istanbul', // Türkiye'nin saat dilimi
    };

    return new Date(isoDate).toLocaleDateString('tr-TR', options);
  };

  return (
    <>
      <Flex>
        <Group pos="relative" h="fit-content" gap={0}>
          <Image
            src={data?.volumeInfo?.imageLinks?.thumbnail}
            alt={data?.volumeInfo?.title ?? '-'}
            w={300}
            miw={300}
            style={{
              objectFit: 'contain',
            }}
          />
          <ActionIcon
            pos="absolute"
            top={0}
            left={0}
            size={40}
            variant="gradient"
            radius={0}
            component={'a'}
            href={data?.volumeInfo?.previewLink}
            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          >
            <IconEyeglass />
          </ActionIcon>
          <ActionIcon
            pos="absolute"
            top={0}
            right={0}
            size={40}
            variant="gradient"
            radius={0}
            component={'a'}
            href={data?.volumeInfo?.infoLink}
            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          >
            <IconInfoSquare />
          </ActionIcon>
          <Button
            variant="gradient"
            radius={0}
            component={'a'}
            href={data?.saleInfo?.buyLink}
            w={'100%'}
            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
          >
            Satın Al
          </Button>
        </Group>

        <Flex direction="column" p={15} pt={0}>
          <Text size="bold" fz={40}>
            {data?.volumeInfo?.title}
          </Text>
          <Text>Yazarlar: {data?.volumeInfo?.authors?.join(', ')}</Text>
          <Text>Yayınevi: {data?.volumeInfo?.publisher}</Text>
          <Text>
            Yayın Tarihi:{' '}
            {data?.volumeInfo?.publishedDate
              ? formatTurkishDate(data?.volumeInfo?.publishedDate)
              : '-'}
          </Text>
          <Group gap={5}>
            <Text>Kategoriler:</Text>{' '}
            {data?.volumeInfo?.categories?.map((elem) => <Badge>{elem}</Badge>)}
          </Group>
          <Text>Dil: {data?.volumeInfo?.language}</Text>
          <Text>Sayfa Sayısı: {data?.volumeInfo?.pageCount}</Text>
          <Text>Basım Türü: {data?.volumeInfo?.printType}</Text>
          <Text>
            Liste Fiyatı: {data?.saleInfo?.listPrice?.amount}{' '}
            {data?.saleInfo?.listPrice?.currencyCode}
          </Text>
          <Text>
            Satış Fiyatı: {data?.saleInfo?.retailPrice?.amount}{' '}
            {data?.saleInfo?.retailPrice?.currencyCode}
          </Text>
          <Text>Açıklama: {stripHtmlTags(data?.volumeInfo?.description ?? '')}</Text>
        </Flex>
      </Flex>
    </>
  );
}
