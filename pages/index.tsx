import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { Countries } from "@/components/Countries";
import queryClient from "../lib/clients/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { fetchCountries } from "@/lib/queries/fetch-countries";
import { Spinner } from "@chakra-ui/react";

const Home: InferGetServerSidePropsType<typeof getServerSideProps> = () => {
  const { data } = useQuery("countries", fetchCountries);

  return (
    <>
      <Head>
        <title>Search and filter countries</title>
        <link rel="icon" href="/siteIco.ico" />
      </Head>
      <Flex as={"main"} flexDir={"column"} maxW={"1000px"} m={"0 auto"}>
        {data ? <Countries countries={data} /> : <LoadingScreen />}
      </Flex>
    </>
  );
};

const getServerSideProps: GetServerSideProps = async () => {
  await queryClient.prefetchQuery("countries", fetchCountries);
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
};
export default Home;

const LoadingScreen = () => {
  return (
    <Flex maxW={"1000px"} justify={"center"} align={"center"} minH={"100vh"}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Flex>
  );
};
