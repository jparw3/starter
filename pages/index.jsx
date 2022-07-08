import React from "react";
import Layout from "../components/Layout/Layout";
import SEO from "../components/Layout/seo";
import HeroSection from "../components/Sections/HeroSection";

export default function Home({}) {
  return (
    <Layout>
      <SEO title="Starter" />
      <HeroSection/>
    </Layout>
  );
}
