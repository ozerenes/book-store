import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, Box, Flex, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useSetBookVolumes } from '@/components/hooks/useData';

interface PaymentFormProps {
  close: () => void;
  totalMoney: number;
}
export function PaymentForm({ close, totalMoney }: PaymentFormProps) {
  const form = useForm({
    validateInputOnChange: ['email', 'name', 'adress1', 'adress2'],
    initialValues: { name: '', email: '', age: 0, adress1: '', adress2: '' },
    validate: {
      name: (value) => (value.length < 2 ? 'İsminiz en az 2 harften oluşmalı!' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Tanımlanamayan email!'),
      age: (value) => (value < 18 ? 'Ödeme yapmak için 18 yaşından büyük ol alısınız!' : null),
      adress1: (value) => (value.length < 5 ? 'Adresiniz daha uzun olmalı!' : null),
    },
  });
  const setCart = useSetBookVolumes();

  const submitForm = (values: any) => {
    console.log(values);
    close();
    notifications.show({
      title: 'Satın alma işlemi başarı ile gerçekleşti.',
      message: 'Teşekkürler, iyi günler.',
      pos: 'fixed',
      bottom: 30,
      right: 30,
      color: 'blue',
    });
    setCart([]);
  };

  return (
    <Box maw={540} mx="auto">
      <form onSubmit={form.onSubmit((values) => submitForm(values))}>
        <TextInput label="İsim" placeholder="İsminizi giriniz" {...form.getInputProps('name')} />
        <TextInput
          mt="sm"
          label="Email"
          placeholder="Email giriniz"
          {...form.getInputProps('email')}
        />
        <NumberInput
          mt="sm"
          label="Yaş"
          placeholder="Yaşınızı giriniz"
          min={0}
          max={99}
          {...form.getInputProps('age')}
        />
        <TextInput
          mt="sm"
          label="Adres 1"
          placeholder="Adres 1"
          {...form.getInputProps('adress1')}
        />
        <TextInput
          mt="sm"
          label="Adres 2"
          placeholder="Adres 2"
          {...form.getInputProps('adress2')}
        />
        <Flex justify="flex-end" w="100%" align="center" gap={15}>
          <Text mb={-12}>Toplam : {totalMoney.toFixed()} TRY</Text>
          <Button type="submit" mt="sm">
            Satın Al
          </Button>
        </Flex>
      </form>
    </Box>
  );
}
