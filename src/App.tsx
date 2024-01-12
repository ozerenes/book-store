import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { CustomAppShell } from '@/AppShell';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <CustomAppShell />
    </MantineProvider>
  );
}
