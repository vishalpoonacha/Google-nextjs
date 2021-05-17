import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex w-full bg-red-500">
        <div className="flex space-x-4 items-center">
          <p>About</p>
          <p>Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p>Gmail</p>
          <p>Images</p>
        </div>
      </header>
    </div>
  );
}
