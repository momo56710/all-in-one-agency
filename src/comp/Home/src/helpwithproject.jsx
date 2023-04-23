import React from 'react'

export default function helpwithproject() {
  return (
    <Stack>
    <FormControl
      display={'grid'}
      gridTemplateColumns={'1fr 1fr 1fr'}
      gap={'20px'}
    >
      <Box>
        <FormLabel>Project descripition</FormLabel>
        <Input
          variant="flushed"
          type="link"
          placeholder="pdf link"
          required
        />
      </Box>
      <Box>
        <FormLabel>Email address</FormLabel>
        <Input
          variant="flushed"
          type="email"
          placeholder="Email"
          required
        />
      </Box>
      <Box>
        <FormLabel>Full name</FormLabel>
        <Input
          variant="flushed"
          type="text"
          placeholder="Full Name"
          required
        />
      </Box>
      <Button
        mt={4}
        variant={'outline'}
        type="submit"
        gridColumn={'2'}
      >
        Submit
      </Button>
    </FormControl>
    <Text fontSize={'0.8em'}>
      We’ll conduct an analysis of your website and deliver a custom
      proposal based on your marketing needs in one day!
    </Text>
  </Stack>
  )
}
