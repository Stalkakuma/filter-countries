import { Flex, Heading } from "@chakra-ui/react";
import { capitalize } from "@/lib/utils";
import { MouseEventHandler } from "react";

export const Filter = ({
  title,
  isActive,
  onClick,
}: {
  title: string;
  isActive: boolean;
  onClick: MouseEventHandler;
}) => {
  return (
    <Flex
      py={1}
      px={2}
      bg={isActive ? "activeOrange" : "white"}
      color={isActive ? "white" : "black"}
      cursor={"pointer"}
      justify={"center"}
      alignItems={"center"}
      borderRadius={"md"}
      border={"1px solid black"}
      boxShadow={isActive ? "1px 1px black" : "0.2px 0.2px black"}
      transition={"ease-in 0.08s"}
      _hover={{
        transform: "scale(1.03)",
        bg: isActive ? "" : "var(--chakra-colors-gray-200)",
      }}
      onClick={onClick}
    >
      <Heading as={"h3"}>{capitalize(title)}</Heading>
    </Flex>
  );
};
