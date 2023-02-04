import { Grid, GridItem, Flex } from "@chakra-ui/react";
import { useState, MouseEvent, ChangeEvent, FC } from "react";
import { Filter } from "./Filter";
import { Search } from "./Search";
import { Card } from "./Card";
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
  const [countriesListed, setCountriesListed] = useState(countries);
  const [countryName, setCountryName] = useState("");
  const [isOcFilterActive, setIsOcFilterActive] = useState(false);
  const [isAreaFilterActive, setIsAreaFilterActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const countriesSortedAlphAsc = [...countries].sort((a, b) =>
    a.name > b.name ? 1 : -1
  );
  const countriesSortedAlphDesc = [...countries].sort((a, b) =>
    a.name > b.name ? -1 : 1
  );

  const filters: string[] = ["Oceania", "area"];

  const handleFilterClick = (e: MouseEvent) => {
    setCurrentPage(1);
    const el = e.target as HTMLElement;
    el.textContent === filters[0]
      ? setIsOcFilterActive(!isOcFilterActive)
      : setIsAreaFilterActive(!isAreaFilterActive);
  };

  const handleSort = (e: MouseEvent) => {
    const element = e.target as HTMLElement;
    setCountriesListed(
      element.textContent === "Ascending (A-Z)"
        ? countriesSortedAlphAsc
        : element.textContent === "Descending (Z-A)"
        ? countriesSortedAlphDesc
        : countries
    );
  };

  const filteredCountriesListed = countriesListed
    ?.filter((byInp) =>
      byInp.name.toLowerCase().includes(countryName.toLowerCase())
    )
    .filter((byOcea) =>
      isOcFilterActive ? byOcea.region.includes(filters[0]) : byOcea
    )
    .filter((byArea) =>
      isAreaFilterActive && byArea.area
        ? byArea.area <= areaOfLithuania
        : byArea
    );

  const clearInput = () => {
    setCountryName("");
  };

  return (
    <>
      <Flex flexDir={"column"} gap={5} mt={"4rem"} p={3}>
        <Search
          countryName={countryName}
          clearInput={() => clearInput()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setCountryName(e.target.value);
          }}
        />

        <Grid
          gridTemplateColumns={{ md: "repeat(8, 1fr)", base: "repeat(4, 1fr)" }}
          gridTemplateRows={{ base: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
          gap={5}
        >
          {filters.map((filter, index) => {
            return (
              <GridItem key={index}>
                <Filter
                  title={filter}
                  isActive={
                    filter === filters[0]
                      ? isOcFilterActive
                      : isAreaFilterActive
                  }
                  onClick={(e: MouseEvent) => handleFilterClick(e)}
                />
              </GridItem>
            );
          })}
          <GridItem
            colStart={{ md: 3, base: 1 }}
            colEnd={{ md: 8, base: 4 }}
            rowStart={{ md: 1, base: 2 }}
            overflow={"hidden"}
          >
            <Flex justify={"center"}>
              {filteredCountriesListed && (
                <Pagination
                  currentPage={currentPage}
                  onPageChange={(page) => setCurrentPage(page)}
                  total={filteredCountriesListed.length}
                  limit={countriesPerPage}
                />
              )}
            </Flex>
          </GridItem>
          <GridItem colStart={{ md: 8 }} colEnd={{ md: 9 }}>
            <Sort onClick={(e: MouseEvent) => handleSort(e)} />
          </GridItem>
        </Grid>
      </Flex>
      <Flex
        flexDir={"column"}
        gap={2}
        mt={2}
        overflowY={"auto"}
        maxH={"calc(100vh - 15rem)"}
        p={3}
        as={motion.div}
      >
        <AnimatePresence>
          {filteredCountriesListed &&
            filteredCountriesListed
              .slice(indexOfFirstCountry, indexOfLastCountry)
              .map((country, index) => (
                <Card
                  key={index}
                  name={country.name}
                  region={country.region}
                  area={country.area}
                />
              ))}
        </AnimatePresence>
      </Flex>
    </>
  );
};
