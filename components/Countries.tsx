import { Grid, GridItem, Flex, VStack, Text } from "@chakra-ui/react";
import { useState, MouseEvent, ChangeEvent, FC } from "react";
import { Filter } from "./Filter";
import { Search } from "./Search";
import { CountryItem } from "./CountryItem";
import { Country } from "../lib/types";
import { Sort } from "./Sort";
import { Pagination } from "./Pagination";
import { motion, AnimatePresence } from "framer-motion";

interface CountriesProps {
  countries: Country[];
}

export const Countries: FC<CountriesProps> = ({ countries }) => {
  const countriesPerPage = 10;
  const areaOfLithuania = 65300;
  const [countryName, setCountryName] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [areaOfLithuaniaFilter, setAreaOfLithuaniaFilter] = useState("");
  const [sortFilter, setSortFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const filters = [
    {
      filter: "Area",
      category: "Lithuania",
      options: ["none", "smaller", "larger"],
    },
    {
      filter: "Region",
      options: ["none", "Oceania", "Europe", "Asia", "Africa"],
    },
  ];

  const handleAreaFilterClick = (e: MouseEvent) => {
    setCurrentPage(1);
    const el = e.target as HTMLElement;
    setAreaOfLithuaniaFilter(el.textContent as string);
  };

  const handleRegionFilterClick = (e: MouseEvent) => {
    setCurrentPage(1);
    const el = e.target as HTMLElement;
    setRegionFilter(el.textContent as string);
  };

  const handleSort = (e: MouseEvent) => {
    const element = e.target as HTMLElement;
    setSortFilter(element.textContent as string);
  };

  const filteredCountriesListed =
    sortFilter === "Descending (Z-A)"
      ? [...countries].sort((a, b) => (a.name > b.name ? -1 : 1))
      : sortFilter === "Ascending (A-Z)"
      ? [...countries].sort((a, b) => (a.name > b.name ? 1 : -1))
      : [...countries]
          .filter((byInp) =>
            byInp.name.toLowerCase().includes(countryName.toLowerCase())
          )
          .filter((byRegion) =>
            regionFilter !== "None"
              ? byRegion.region.includes(regionFilter)
              : byRegion
          )
          .filter((byArea) =>
            byArea.area && areaOfLithuaniaFilter === "Smaller"
              ? byArea.area <= areaOfLithuania
              : byArea.area && areaOfLithuaniaFilter === "Larger"
              ? byArea.area >= areaOfLithuania
              : byArea
          );

  const clearInput = () => {
    setCountryName("");
  };

  return (
    <>
      <VStack align="start" gap={5} mt="4rem" mb="2rem" w="100%">
        <Search
          countryName={countryName}
          clearInput={() => clearInput()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setCurrentPage(1);
            setCountryName(e.target.value);
          }}
        />
        <VStack w="100%">
          <Text px={{ base: 4, md: 0 }} alignSelf="start" color="menuGray">
            Filters:
          </Text>
          <Grid
            px={{ base: 4, md: 0 }}
            w="100%"
            gridTemplateColumns={{
              md: "repeat(8, 1fr)",
              base: "repeat(4, 1fr)",
            }}
            gridTemplateRows={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
            gap={{ base: 2, md: 5 }}
          >
            {filters.map((filter, index) => {
              return (
                <GridItem key={index}>
                  <Filter
                    filter={filter}
                    onClick={
                      filter.category
                        ? (e: MouseEvent) => handleAreaFilterClick(e)
                        : (e: MouseEvent) => handleRegionFilterClick(e)
                    }
                  />
                </GridItem>
              );
            })}
            <GridItem
              colStart={{ md: 3, base: 2 }}
              colEnd={{ md: 8, base: 4 }}
              rowStart={{ md: 1, base: 2 }}
              alignSelf="center"
            >
              <Flex justify="center">
                <Pagination
                  currentPage={currentPage}
                  onPageChange={(page) => setCurrentPage(page)}
                  total={filteredCountriesListed.length}
                  limit={countriesPerPage}
                />
              </Flex>
            </GridItem>
            <GridItem colStart={{ md: 8, base: 4 }} colEnd={{ md: 9 }}>
              <Sort onClick={(e: MouseEvent) => handleSort(e)} />
            </GridItem>
          </Grid>
        </VStack>
      </VStack>
      <VStack
        w="100%"
        align={{ base: "center", md: "start" }}
        gap={1}
        overflowY="auto"
        maxH={{ md: "calc(100vh - 18rem)", base: "calc(100vh - 20rem)" }}
        as={motion.div}
      >
        <AnimatePresence>
          {filteredCountriesListed
            .slice(indexOfFirstCountry, indexOfLastCountry)
            .map((country, index) => (
              <CountryItem
                key={index}
                name={country.name}
                region={country.region}
                area={country.area}
              />
            ))}
        </AnimatePresence>
      </VStack>
    </>
  );
};
