import { ActionIcon, AppShell, Burger, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBook2, IconShoppingCart } from '@tabler/icons-react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './Router';
import { CustomNavbar } from '@/components/templates/CustomNavbar';
import { useBookVolumes } from '@/components/hooks/useData';
import { ColorSchemeToggle } from '@/components/atoms/ColorSchemeToggle';

export function CustomAppShell() {
  const [opened, { toggle }] = useDisclosure();
  const cart = useBookVolumes();

  const calculateCartLength = () =>
    cart.reduce((accumulator, currentValue) => accumulator + (currentValue?.count ?? 0), 0);

  return (
    <BrowserRouter>
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md" w="100%" justify="space-between">
            <Group>
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <IconBook2 size={30} />
              <Text>Book Store</Text>
            </Group>
            <Group>
              <Link to="/cart-detail">
                <ActionIcon px={15} size="xl" miw={80} variant="default">
                  <IconShoppingCart />
                  <Text fw={500} ml={10}>
                    {cart?.length > 0 ? calculateCartLength() : 0}
                  </Text>
                </ActionIcon>
              </Link>
              <ColorSchemeToggle />
            </Group>
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
