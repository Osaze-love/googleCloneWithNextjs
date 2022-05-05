import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

const search = ({ results }) => {
  console.log(results);

  const router = useRouter();
  return (
    <>
      <Head>
        <title>{router.query.term} ~ Google Search</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <SearchResults results={results} />
    </>
  );
};

export default search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((r) => r.json());
  return {
    props: {
      results: data,
    },
  };
}
