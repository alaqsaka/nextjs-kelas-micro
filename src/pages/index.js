import Head from "next/head";
import axios from "configs/axios";
import Circle from "public/images/circle-accent-1.svg";
import Header from "src/parts/Header";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Competend</title>
      </Head>

      <main>
        <section className="header-clipping pt-10">
          <Circle className="absolute left-0 bottom-0"></Circle>
          <div className="sunshine"></div>
          <div className="container mx-auto">
            <Header></Header>
          </div>
        </section>
      </main>
    </>
  );
}

// Home.getInitialProps = async () => {
//   try {
//     const data = await axios.get("/users");
//     return { data };
//   } catch (error) {
//     return error;
//   }
// };
