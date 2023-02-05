import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Button,
} from "@chakra-ui/react";
import { capitalize } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface FilterType {
  filter: string;
  category?: string;
  options: string[];
}

export const Filter = ({
  filter,
  onClick,
}: {
  filter: FilterType;
  onClick: MouseEventHandler;
}) => {
  return (
    <Menu>
      <MenuButton variant="solid" h="100%" w="100%" as={Button}>
        {filter.filter}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          key={filter.filter}
          defaultValue="none"
          title={filter.category}
          type="radio"
        >
          {filter.options.map((option) => (
            <MenuItemOption key={option} onClick={onClick} value={option}>
              {capitalize(option)}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
