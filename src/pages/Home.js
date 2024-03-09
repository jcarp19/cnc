import React from "react";
import CardList from "../components/Card";
import Gallery from "../components/Gallery";
import { Button } from "../components/Button";
// import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Gallery />
      <section className='home'>
        <a href='tel:2488905625' className='a-link ctr'>
          <Button />
        </a>
        <CardList />
      </section>
    </>
  );
};

export default Home;
