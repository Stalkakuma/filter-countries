import { ChangeEventHandler } from "react";
import { Input, InputGroup, InputRightElement, Flex } from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";

export const Search = ({
  onChange,
  countryName,
  clearInput,
}: {
  onChange: ChangeEventHandler;
  countryName: string;
  clearInput: () => void;
}) => {
  return (
    <Flex align="center" position="relative" w={{ md: "40%", base: "100%" }}>
      <InputGroup>
        <Input
          aria-label="search countries"
          type="text"
          bg="white"
          paddingInlineEnd="40px"
          onChange={onChange}
          placeholder={"Type a country name..."}
          value={countryName}
          focusBorderColor={"activeOrange"}
        />
        <InputRightElement
          cursor="pointer"
          position="absolute"
          right="16px"
          zIndex="docked"
          onClick={clearInput}
          _hover={{ color: "activeOrange" }}
        >
          {countryName.length ? <CloseIcon /> : <SearchIcon />}
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};
