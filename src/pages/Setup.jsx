import { Container, Text, VStack, Heading, Image } from "@chakra-ui/react";

const Setup = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">
          Quick to set up
        </Heading>
        <Image src="/images/setup.jpg" alt="Quick to set up" />
        <Text fontSize="xl" textAlign="center">
          Stream live events effortlessly with our easy setup process.
        </Text>
      </VStack>
    </Container>
  );
};

export default Setup;