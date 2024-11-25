import Head from "next/head";
import React from "react";

const Pipeline = () => (
  <div>
    <Head>
      <title>Pipeline</title>
      <link rel="icon" href="/nextjs-ssr/pipeline/public/favicon.ico" />
    </Head>

    <div className="hero">
      <h1>Pipeline Page</h1>
      <h3 className="title">
        This is a federated page owned by localhost:3002
      </h3>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 20px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
);

export default Pipeline;
