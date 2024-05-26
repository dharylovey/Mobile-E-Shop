import Banner from "@/components/Homepage/Hero/Banner";
import Category from "@/components/Homepage/Hero/Category";
import Hero from "@/components/Homepage/Hero/Hero";
import Products from "@/components/Homepage/Hero/Products";
import SmallBanner from "@/components/Homepage/Hero/SmallBanner";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Banner />
      <SmallBanner />
      <Category />
      <Products />
    </>
  );
}
