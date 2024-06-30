import Landing from "components/views/Landing.js";
import Head from "next/head";

// export const metadata = {
//   title: "Dat nguyen developer",
//   description: "Nguyễn Quốc Đạt - Front-end developer",
// };

export default function Home() {
  return (
    <div id="root">
      <Head>
        <title>Dat Nguyen developer</title>
        <meta
          name="description"
          content="Nguyễn Quốc Đạt - Front-end developer"
        ></meta>
      </Head>
      <Landing />
    </div>
  );
}
