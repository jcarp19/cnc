import React from "react";
import CardList from "../components/Card";

const Products = () => {
  return (
    <>
      <section className='products'>
        <h1>Explore Our Tooling Solutions</h1>
        <p>
          Discover the precision and performance of the product lines we
          represent. From high-speed steel drills to full tooling solutions, our
          product lines meet the demands of today's manufacturing industry.
          Whether you’re shaping carbon steel or stainless steel, our products
          deliver clean cuts, durability, and efficiency to any job. Browse our
          selection of manufacturers and elevate your operations today!
        </p>

        <CardList />
      </section>
    </>
  );
};

export default Products;
