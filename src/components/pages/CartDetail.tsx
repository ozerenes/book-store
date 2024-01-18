import { Group, Avatar, Text, Accordion, Box, Button, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useBookVolumes } from '@/components/hooks/useData';
import { BookVolume } from '@/components/atoms/BookType';
import { CartAddRemoveItem } from '@/components/molecules/CartAddRemoveItem';
import { PaymentForm } from '@/components/molecules/PaymentForm';

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
  price?: string;
  item: BookVolume;
}

function AccordionLabel({ label, image, description, price, item }: AccordionLabelProps) {
  return (
    <Group wrap="nowrap" gap={0}>
      <Box pos="relative">
        <Avatar src={image} radius="md" size="xl" />
        <CartAddRemoveItem item={item} />
      </Box>
      <Accordion.Control>
        <div>
          <Text>{label}</Text>
          <Text size="sm" c="dimmed" fw={400}>
            Yazar : {description}
          </Text>
          <Text size="sm" c="dimmed" fw={400}>
            Toplam Ücret : {price}
          </Text>
        </div>
      </Accordion.Control>
    </Group>
  );
}

export function CartDetail() {
  const cart = useBookVolumes();
  const [opened, { open, close }] = useDisclosure(false);

  const reduceTotalMoney = () => {
    const totalMoney = cart.reduce(
      (accumulator, currentValue) =>
        accumulator + (currentValue.saleInfo.listPrice.amount * (currentValue?.count ?? 1) ?? 0),
      0
    );
    return totalMoney;
  };

  const items = cart.map((item, index) => (
    <Accordion.Item value={item.id + index} key={item.volumeInfo.title}>
      <AccordionLabel
        label={item.volumeInfo.title}
        description={item.volumeInfo.authors.join(', ')}
        image={item.volumeInfo.imageLinks.thumbnail}
        price={`${(Number(item.saleInfo.listPrice.amount) * (item?.count ?? 1))
          .toFixed(2)
          .toString()} ${item?.saleInfo?.listPrice?.currencyCode}`}
        item={item}
      />
      <Accordion.Panel>
        <Text size="md" fw="bold">
          Açıklama
        </Text>
        <Text size="sm">{item.volumeInfo.description}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return cart.length > 0 ? (
    <>
      <Accordion chevronPosition="right" variant="contained">
        {items}
      </Accordion>
      <Modal opened={opened} onClose={close} title="Ödeme Bilgileri" centered>
        <PaymentForm close={close} totalMoney={reduceTotalMoney()} />
      </Modal>

      <Button onClick={open}>Satın Al</Button>
    </>
  ) : (
    <Text>Sepetinizde ürün bulunamadı.</Text>
  );
}
