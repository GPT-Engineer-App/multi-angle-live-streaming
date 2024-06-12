import { Container, Text, VStack, Heading, Image } from "@chakra-ui/react";

const Charge = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">
          Easy to charge the audience
        </Heading>
        <Image src="/images/charge.jpg" alt="Easy to charge the audience" />
        <Text fontSize="xl" textAlign="center">
          Monetize your live events with ease.
        </Text>
      </VStack>
    </Container>
  );
};

export default Charge;