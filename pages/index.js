import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import Landing from "../components/views/Landing.js";

export default function Home() {
  return (
    <div id="root">
      <Landing />
    </div>
  );
}
