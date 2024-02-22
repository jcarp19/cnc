import React from "react";
import CardList from "../components/Card";
import Gallery from "../components/Gallery";
import { Button } from "../components/Button";

const Home = () => {
  return (
    <>
      <Gallery />
      <Button />
      <section className='content'>
        <CardList />
      </section>
    </>
  );
};

export default Home;
