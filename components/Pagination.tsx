import { Flex, List, ListItem } from "@chakra-ui/react";
import { range } from "@/lib/utils";
import { FC } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";

interface PaginationProps {
  currentPage: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void;
  total: number;
  limit: number;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  onPageChange,
  total,
  limit,
}) => {
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);
  const paginationPerPage = 5;
  const indexOfCurrentPagination = currentPage - 3 < 1 ? 0 : currentPage - 3;
  const isThereMorePagination =
    pagesCount > currentPage - 1 + paginationPerPage;

  if (currentPage > pagesCount) {
    onPageChange(1);
  }

  const EmptyDots = () => {
    return <Flex w={"13.3px"}></Flex>;
  };
  const EmptyArrow = () => {
    return <Flex w={"12px"}></Flex>;
  };

  return (
    <Flex
      as={List}
      gap={1}
      justify={"center"}
      align={"center"}
      w={"100%"}
      h={"100%"}
    >
      {currentPage > 1 ? (
        <ListItem
          onClick={() => onPageChange(currentPage - 1)}
          alignSelf={"end"}
        >
          <ArrowLeftIcon
            cursor={"pointer"}
            color={"menuGray"}
            _hover={{ color: "activeOrange" }}
            boxSize={"12px"}
          />
        </ListItem>
      ) : (
        <EmptyArrow />
      )}
      {currentPage > paginationPerPage ? (
        <ListItem
          alignSelf={"end"}
          onClick={() => onPageChange(currentPage - paginationPerPage)}
          color={"menuGray"}
          cursor={"pointer"}
          _hover={{ color: "activeOrange" }}
        >
          ...
        </ListItem>
      ) : (
        <EmptyDots />
      )}
      {pages
        .slice(indexOfCurrentPagination, paginationPerPage + currentPage - 3)
        .map((page) => (
          <PaginationItem
            key={page}
            page={page}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        ))}
      {isThereMorePagination ? (
        <ListItem
          onClick={() => onPageChange(currentPage + paginationPerPage)}
          color={"menuGray"}
          cursor={"pointer"}
          _hover={{ color: "activeOrange" }}
          alignSelf={"end"}
        >
          ...
        </ListItem>
      ) : (
        <EmptyDots />
      )}
      {currentPage < pagesCount ? (
        <ListItem
          onClick={() => onPageChange(currentPage + 1)}
          alignSelf={"end"}
        >
          <ArrowRightIcon
            cursor={"pointer"}
            color={"menuGray"}
            _hover={{ color: "activeOrange" }}
            boxSize={"12px"}
          />
        </ListItem>
      ) : (
        <EmptyArrow />
      )}
    </Flex>
  );
};

const PaginationItem = ({
  page,
  currentPage,
  onPageChange,
}: {
  page: number;
  currentPage: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void;
}) => {
  const isActive = page === currentPage;
  return (
    <ListItem
      mt={2}
      bg={isActive ? "activeOrange" : "white"}
      color={isActive ? "white" : "menuGray"}
      border={isActive ? "1px solid #ff422a" : "1px solid #999"}
      boxShadow={isActive ? "1px 1px #999" : "0.5px 0.5px #999"}
      rounded={"full"}
      w={"25px"}
      cursor={"pointer"}
      onClick={() => onPageChange(page)}
      transition={"ease 0.1s"}
      _hover={{
        color: isActive ? "white" : "activeOrange",
        border: isActive ? "1px solid white" : `1px solid #ff422a`,
        boxShadow: isActive ? "1px 1px #999" : "1px 1px #ff422a",
      }}
    >
      <Flex justify={"center"}>{page}</Flex>
    </ListItem>
  );
};
