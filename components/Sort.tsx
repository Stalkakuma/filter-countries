import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { ArrowUpDownIcon } from "@chakra-ui/icons";
import { MouseEventHandler } from "react";

export const Sort = ({ onClick }: { onClick: MouseEventHandler }) => {
  const sortCategories: string[] = [
    "None",
    "Ascending (A-Z)",
    "Descending (Z-A)",
  ];
  return (
    <Menu>
      <MenuButton variant={"solid"} h={"100%"} w={"100%"} as={Button}>
        <Flex align={"center"} gap={1}>
          <Heading as={"h3"}>Sort</Heading>
          <ArrowUpDownIcon boxSize={"21px"} />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          defaultValue="None"
          title="Alphabetically"
          type="radio"
        >
          {sortCategories.map((category) => (
            <MenuItemOption key={category} value={category} onClick={onClick}>
              {category}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
