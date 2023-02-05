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
    <Flex
      align="center"
      position="relative"
      w={{ md: "40%", base: "100%" }}
      px={{ base: 4, md: 0 }}
    >
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
          cursor={countryName.length ? "pointer" : "cursor"}
          zIndex="docked"
          onClick={clearInput}
          _hover={{ color: countryName.length ? "activeOrange" : "" }}
        >
          {countryName.length ? <CloseIcon /> : <SearchIcon />}
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};
