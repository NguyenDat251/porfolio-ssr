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
        <meta property="og:title" content="Dat Nguyen Developer" />
        <meta property="og:image" content="https://i.imgur.com/yWOXtK6.png" />
        <meta
          property="og:description"
          content="Nguyễn Quốc Đạt - Front-end developer. This is a personal website I created to showcase my career."
        />
      </Head>
      <Landing />
    </div>
  );
}
