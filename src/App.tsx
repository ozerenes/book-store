import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme';
import { CustomAppShell } from '@/AppShell';
import { Notifications } from '@mantine/notifications';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <CustomAppShell />
    </MantineProvider>
  );
}
