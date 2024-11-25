import Head from "next/head";
import Link from "next/link";
import React from "react";

const productLinks = [
  { href: "/d/1", label: "Document 1" },
  { href: "/d/2", label: "Document 2" },
  { href: "/d/3", label: "Document 3" },
].map((link) => {
  link.key = `product-link-${link.href}-${link.label}`;
  return link;
});

const ESign = () => {
  return (
    <div>
      <Head>
        <title>eSign</title>
        <link rel="icon" href="/nextjs-ssr/esign/public/favicon.ico" />
      </Head>

      <div className="hero">
        <h1>eSign Page</h1>
        <h3 className="title">
          This is a federated page owned by localhost:3001
        </h3>
        <ul>
          {productLinks.map(({ key, href, label }) => (
            <li key={key}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
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
};

export default ESign;
