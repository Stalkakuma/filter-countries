import { Spinner, Center } from "@chakra-ui/react";

export const LoadingScreen = () => {
  return (
    <Center as="main">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Center>
  );
};
