import { ActionIcon, AppShell, Burger, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Router } from './Router';
import { IconBook2, IconShoppingCart } from '@tabler/icons-react';
import { CustomNavbar } from '@/components/organisms/CustomNavbar';
import { BrowserRouter } from 'react-router-dom';
import { useBookVolumes } from '@/components/hooks/useData';
export function CustomAppShell() {
  const [opened, { toggle }] = useDisclosure();
  const cart = useBookVolumes();

  return (
    <BrowserRouter>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <IconBook2 size={30} />
            <Text>Book Store</Text>
            <ActionIcon>
              {cart.length}
              <IconShoppingCart />
            </ActionIcon>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <CustomNavbar />
        </AppShell.Navbar>
        <AppShell.Main>
          <Router />
        </AppShell.Main>
      </AppShell>
    </BrowserRouter>
  );
}
