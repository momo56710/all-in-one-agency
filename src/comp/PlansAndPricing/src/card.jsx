import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function Cards({ title, price, Specs, month }) {
  const priceCheck = price => {
    if (price) return <Text fontSize={'3xl'}>$</Text>;
  };
  const monthCheck = month => {
   
    if (month == 'year'){
      return (
        <Text color={'purple.900'} opacity={'0.5'} fontSize={'3xl'}>
          /year
        </Text>
      );
    }
    if (month)
    return (
      <Text color={'purple.900'} opacity={'0.5'} fontSize={'3xl'}>
        /month
      </Text>
    );
  };
  const specsCheck = Specs => {
    if (Specs) {
      return Specs.map(e => {
        console.log(e);
        return (
          <ListItem>
            <ListIcon as={CheckIcon} color="purple.400" />
            {e}
          </ListItem>
        );
      });
    }
  };
  return (
    <Center py={6}>
      <Box
        data-theme="dark"
        w={'300px'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Stack textAlign={'center'} p={6} color={'gray.800'} align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={'purple.400'}
            p={2}
            px={3}
            color={'white'}
            rounded={'full'}
          >
            {title}
          </Text>
          <Stack
            color={'purple.900'}
            direction={'row'}
            align={'center'}
            justify={'center'}
          >
            {priceCheck(price)}

            <Text fontSize={'6xl'} fontWeight={800}>
              {price}
            </Text>
            {monthCheck(month)}
          </Stack>
        </Stack>

        <Box color={'purple.900'} bg={'gray.200'} px={6} py={10}>
        <List spacing={3}>
            {specsCheck(Specs)}
          </List>
          <Button
            mt={10}
            w={'full'}
            bg={'purple.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'purple.500',
            }}
            _focus={{
              bg: 'purple.500',
            }}
          >
            GET STARTED
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
