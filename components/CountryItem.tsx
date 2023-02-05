import { Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Country } from "@/lib/types";

export const CountryItem = ({ name, region, area }: Country) => {
  return (
    <VStack
      w="90%"
      as={motion.div}
      bg="white"
      rounded="md"
      border="cardDefault"
      boxShadow="default"
      py={1.5}
      px={5}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      _hover={{
        borderColor: "activeOrange",
        boxShadow: "active",
        h2: {
          color: "activeOrange",
        },
      }}
    >
      <Heading as={"h2"} alignSelf={{ md: "start", base: "center" }}>
        {name}
      </Heading>
      <HStack w="100%">
        <VStack w="100%">
          <Text fontSize="xs" color="menuGray">
            Region
          </Text>
          <Text fontSize="lg">{region}</Text>
        </VStack>
        <VStack w="100%">
          <Text fontSize="xs" color="menuGray">
            Area
          </Text>
          <Text fontSize="lg">
            {`${area} km`}
            <Text as="sup">2</Text>
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};
