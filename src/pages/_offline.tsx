import Head from "next/head";
import { Fragment } from "react";

const Fallback = () => (
  <Fragment>
    <Head>
      <title>SWM Offline</title>
    </Head>
    <h1>This is offline fallback page</h1>
    <h2>When offline, any page route will fallback to this page</h2>
  </Fragment>
);

export default Fallback;
