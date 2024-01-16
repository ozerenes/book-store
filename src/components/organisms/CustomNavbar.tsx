import { ActionIcon, Container, NavLink, TextInput } from '@mantine/core';
import { IconGauge, IconFingerprint, IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LibraryModel } from '@/components/organisms/LibraryModel';

export function CustomNavbar() {
  const [value, setValue] = useState('');

  return (
    <>
      <TextInput
        placeholder="Kitap yada yazar arayın..."
        rightSection={
          <Link to={`/search/${value}`}>
            <ActionIcon variant="subtle">
              <IconSearch size="1rem" stroke={2} />
            </ActionIcon>
          </Link>
        }
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <NavLink
        href="#required-for-focus"
        label="First parent link"
        leftSection={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        <NavLink href="#required-for-focus" label="First child link" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Nested parent link" childrenOffset={28} href="#required-for-focus">
          <NavLink label="First child link" href="#required-for-focus" />
          <NavLink label="Second child link" href="#required-for-focus" />
          <NavLink label="Third child link" href="#required-for-focus" />
        </NavLink>
      </NavLink>

      <NavLink
        href="#required-for-focus"
        label="Second parent link"
        leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" href="#required-for-focus" />
        <NavLink label="Second child link" href="#required-for-focus" />
        <NavLink label="Third child link" href="#required-for-focus" />
      </NavLink>
      <Container style={{ zIndex: 9999 }} h={320} w={'100%'}>
        <LibraryModel />
      </Container>
    </>
  );
}
