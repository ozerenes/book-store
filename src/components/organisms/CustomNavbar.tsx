import { ActionIcon, Input, NavLink, TextInput } from '@mantine/core';
import { IconGauge, IconFingerprint, IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import api from '@/components/atoms/AxiosIns';

export function CustomNavbar() {
  const [value, setValue] = useState('');

  async function fetchBookData() {
    try {
      const response = await api.get('/volumes', {
        params: {
          q: value, // Your search query
        },
      });

      console.log('Book data:', response.data);
    } catch (error) {
      console.error('Error fetching book data:', error);
    }
  }

  return (
    <>
      <TextInput
        placeholder="En az 3 harf ile bir kitap arayınız."
        rightSection={
          <ActionIcon variant="subtle" onClick={() => fetchBookData()}>
            <IconSearch size="1rem" stroke={2} />
          </ActionIcon>
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
    </>
  );
}
