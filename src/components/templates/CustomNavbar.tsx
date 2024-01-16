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
      <Container style={{ zIndex: 9999 }} h={320} w={'100%'}>
        <LibraryModel />
      </Container>
    </>
  );
}
