import { ChangeEventHandler } from "react";
import { Input, Flex } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const Search = ({ onChange }: { onChange: ChangeEventHandler }) => {
  return (
    <Flex
      align={"center"}
      position={"relative"}
      w={{ md: "40%", base: "100%" }}
    >
      <Input
        aria-label="search countries"
        type={"text"}
        bg={"white"}
        paddingInlineEnd={"40px"}
        onChange={onChange}
        placeholder={"Type a country name..."}
      />
      <SearchIcon position={"absolute"} right={"16px"} zIndex={"docked"} />
    </Flex>
  );
};
