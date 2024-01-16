import { ActionIcon, AppShell, Burger, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Router } from './Router';
import { IconBook2, IconShoppingCart } from '@tabler/icons-react';
import { CustomNavbar } from '@/components/templates/CustomNavbar';
import { BrowserRouter, Link } from 'react-router-dom';
import { useBookVolumes } from '@/components/hooks/useData';
import { ColorSchemeToggle } from '@/components/atoms/ColorSchemeToggle';
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
          <Group h="100%" px="md" w="100%" justify="space-between">
            <Group>
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <IconBook2 size={30} />
              <Text>Book Store</Text>
            </Group>
            <Group>
              <Link to={`/cart-detail`}>
                <ActionIcon px={15} size="xl" miw={80} variant="default">
                  <IconShoppingCart />
                  <Text fw={500} ml={10}>
                    {cart?.length > 0
                      ? cart.reduce((accumulator, currentValue) => {
                          return accumulator + (currentValue?.count ?? 0);
                        }, 0)
                      : 0}
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
