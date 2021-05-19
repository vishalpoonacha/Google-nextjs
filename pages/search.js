import Head from "next/head";
import Header from "../components/Header";
import HeaderOptions from "../components/HeaderOptions";

function Search() {
  return (
    <div>
      <Head>
        <title>Search Results</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header */}
      <Header />

      {/*Search Results */}
    </div>
  );
}

export default Search;
