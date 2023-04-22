import { Heading, Box, Center, Text, Image, Grid ,Button} from '@chakra-ui/react';
export default function Card({image,title,description}) {
  return (
    <Box
      w={{base : '100%' , sm: '250px'}}
      h={{base : 'fit-content' , md: '450px'}}
     
      bg={'white'}
      display={'grid'}
      gap={'2em'}
      boxShadow={'2xl'}
      color={'black'}
      rounded={'lg'}
      p={6}
    >
      <Box>
        <Image src={image} w={'80px'} /> <br />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {title}
        </Heading>
      </Box>

      <Text fontWeight={600} color={'gray.500'} mb={4} lineHeight={'25px'}>
        {description}
      </Text>
      <Button>LEARN MORE </Button>
    </Box>
  );
}
