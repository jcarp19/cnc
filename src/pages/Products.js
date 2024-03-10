import React from "react";
import CardList from "../components/Card";

const Products = () => {
  return (
    <>
      <section className='products'>
        <h1>Explore Our Tooling Solutions</h1>
        <h5>
          <a href='http://www.google.com' className='link'>
            Click Here to View Our Line Card
          </a>
        </h5>
        <div className='products__list'>
          <CardList />
        </div>
      </section>
    </>
  );
};

export default Products;
