import { notifications } from '@mantine/notifications';
import { ActionIcon, Badge, Group } from '@mantine/core';
import { IconShoppingCartMinus, IconShoppingCartPlus } from '@tabler/icons-react';
import { BookVolume } from '@/components/atoms/BookType';
import { useBookVolumes, useSetBookVolumes } from '@/components/hooks/useData';

interface CartAddRemoveProps {
  item: BookVolume;
}

export function CartAddRemoveItem({ item }: CartAddRemoveProps) {
  const cart = useBookVolumes();
  const setCart = useSetBookVolumes();
  const addToCart = () => {
    const existItem = cart.find((elem) => item.id === elem.id);
    const newCount = (existItem?.count ?? 0) + 1;
    const newItem = { ...item, count: newCount };

    notifications.show({
      title: 'Ürün sepete eklendi.',
      message: 'Keyifli alışverişler dileriz.',
      pos: 'fixed',
      bottom: 30,
      right: 30,
      color: 'blue',
    });
    if (!existItem) {
      setCart([...cart, newItem]);
    } else {
      const newCart = cart.map((elem) => (item.id === elem.id ? newItem : elem));
      setCart(newCart);
    }
  };

  const removeToCart = () => {
    let updatedCart = [...cart];
    const existItem = updatedCart.find((elem) => item.id === elem.id);

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
    <Group pos="absolute" right={15} top={15} gap={5}>
      <ActionIcon
        variant="gradient"
        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
        onClick={() => removeToCart()}
      >
        <IconShoppingCartMinus />
      </ActionIcon>
      <ActionIcon
        variant="gradient"
        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
        pos="relative"
        onClick={() => addToCart()}
      >
        <IconShoppingCartPlus />
        <Badge
          pos="absolute"
          bottom={-18}
          left={-18}
          fz={12}
          mih={18}
          variant="gradient"
          gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
        >
          {cart.find((elem) => elem.id === item.id)?.count ?? 0}
        </Badge>
      </ActionIcon>
    </Group>
  );
}
