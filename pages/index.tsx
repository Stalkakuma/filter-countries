import Head from "next/head";
import { VStack } from "@chakra-ui/react";
import { Countries } from "@/components/Countries";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useQuery, dehydrate, QueryClient } from "react-query";
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
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("countries", fetchCountries);
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
};
export default Home;
