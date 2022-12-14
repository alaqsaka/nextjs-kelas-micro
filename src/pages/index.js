import Head from "next/head";
// import axios from "configs/axios";
import Circle from "public/images/circle-accent-1.svg";
import Header from "src/parts/Header";
import Hero from "src/parts/Hero";
import Clients from "src/parts/Clients";
import ListCourses from "src/parts/ListCourses";
import { CourseData } from "src/data/MockCourseData";

export default function Home() {
  const data = CourseData;
  return (
    <>
      <Head>
        <title>Competend</title>
      </Head>

      <main>
        <section className="header-clipping pt-10">
          <Circle className="absolute left-0 bottom-0 hidden lg:block"></Circle>
          <div className="hidden md:block sunshine"></div>
          <div className="container mx-auto">
            <Header></Header>
            <Hero />
          </div>
        </section>
        <section className="container mx-auto pt-24">
          <Clients></Clients>
        </section>
        <section className="container mx-auto pt-24">
          <ListCourses data={data}></ListCourses>
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
