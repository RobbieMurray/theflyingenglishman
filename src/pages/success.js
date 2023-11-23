import * as React from "react";
import Layout from "../components/Layout";
import BasicTextModule from "../components/BasicTextModule/BasicTextModule";

const success = () => {
  return (
    <>
      <Layout>
        <BasicTextModule
          title="Thank You!"
          content="Your message has been successfully received."
          link="/"
          linkText="Return to Home"
        />
      </Layout>
    </>
  );
};

export default success;
