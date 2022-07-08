import React from "react";
import Head from "next/head";

export default function SEO({ children, ...customMeta }) {
  const meta = {
    title: "Jack Willars - Software Engineer",
    description: `An 18-year-old software engineer based in Peterborough, United Kingdom.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://jparw.xyz/`} />
        <link rel="canonical" href={`https://jparw.xyz/`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Jack Willars" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jparw3" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
    </div>
  );
}
