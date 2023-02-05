import Head from "next/head";
import { VStack } from "@chakra-ui/react";
import { Countries } from "@/components/Countries";
import queryClient from "../lib/clients/react-query";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { fetchCountries } from "@/lib/queries/fetch-countries";
import { LoadingScreen } from "@/components/LoadingScreen";

const Home: InferGetServerSidePropsType<typeof getServerSideProps> = () => {
  const { data } = useQuery("countries", fetchCountries);

  return (
    <>
      <Head>
        <title>Search and filter countries</title>
        <link rel="icon" href="/siteIco.ico" />
      </Head>
      <VStack as="main" mx="auto">
        {data ? <Countries countries={data} /> : <LoadingScreen />}
      </VStack>
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
