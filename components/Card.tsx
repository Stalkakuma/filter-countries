import { Flex, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Country } from "@/lib/types";
import { useState } from "react";

export const Card = ({ name, region, area }: Country) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Flex
      as={motion.div}
      bg={"white"}
      rounded={"md"}
      flexDir={"column"}
      border={isActive ? "3px solid #fff" : "3px solid #485F78"}
      boxShadow={isActive ? "-2px -1px 4px 2px #ff422a" : "2px 1px #485F78"}
      gap={0}
      py={1.5}
      px={5}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      transition={"ease 0.07s"}
      _hover={{ transform: "scale(1.01)" }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Heading
        alignSelf={{ md: "start", base: "center" }}
        as={"h2"}
        color={isActive ? "#ff422a" : "black"}
      >
        {name}
      </Heading>
      <Grid
        gridTemplateColumns={{ md: "repeat(7, 1fr)" }}
        gridTemplateRows={"repeat(2, 1fr)"}
      >
        <GridItem alignSelf={"end"} justifySelf={"center"}>
          <Text fontSize={"xs"} color={"menuGray"}>
            Region
          </Text>
        </GridItem>
        {area && (
          <GridItem alignSelf={"end"} justifySelf={"center"}>
            <Text fontSize={"xs"} color={"menuGray"}>
              Area
            </Text>
          </GridItem>
        )}
        <GridItem rowStart={2} justifySelf={"center"}>
          <Text fontSize={"lg"}>{region}</Text>
        </GridItem>
        {area && (
          <GridItem rowStart={2} justifySelf={"center"}>
            <Text fontSize={"lg"}>
              {`${area} km`}
              <Text as={"sup"}>2</Text>
            </Text>
          </GridItem>
        )}
      </Grid>
    </Flex>
  );
};
