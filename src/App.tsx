import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from './theme';
import { CustomAppShell } from '@/AppShell';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <CustomAppShell />
    </MantineProvider>
  );
}
