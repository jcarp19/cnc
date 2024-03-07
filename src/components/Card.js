import React from "react";
import { useLocation } from "react-router-dom";
import abanaki from "../_images/abanaki.jpg";
import arntz from "../_images/arntz.jpg";
import ats from "../_images/ats.jpg";
import fowler from "../_images/fowler.jpg";
import maq from "../_images/maq.jpg";
import superbee from "../_images/superbee.jpg";
import swiftcarb from "../_images/swiftcarb.jpg";
import taylortool from "../_images/taylortool.jpg";
import toolcraft from "../_images/toolcraft.jpg";
import company from "../_images/gallery-img-1.jpg";
import mission from "../_images/gallery-img-1.jpg";

const companyDetail = [
  {
    image: company,
    headline: "Who We Are",
    detail:
      "CNC Tooling Solutions, LLC a technical sales and marketing company that specializes in cutting tools, workholding, machine tool accessories, coolant and coolant maintenance.  We promote products through distribution with a focus on the end user. Our goal is to help our customers reduce costs with better ideas and products.  We build brand awareness with our Distributors and their customers through personal visits, direct marketing, trade shows and social media.",
  },
  {
    image: mission,
    headline: "Our Mission",
    detail:
      "Our mission is to provide high quality products and a high level of service and support to our customers and principals.",
  },
];
const lineCard = [
  {
    image: abanaki,
    headline: "The World’s Leading Manufacturer of Industrial Oil Skimmers",
    detail:
      "Coolant maintenance products. Skimmers, coalescers, Refractometers, mixers, mints aerators and vacuums.",
    link: "https://www.abanaki.com/",
  },
  {
    image: arntz,
    headline: "Innovative Cutting Technology",
    detail: "High quality bandsaw blades and circular saw blades.",
    link: "https://www.arntz.de/en-us",
  },
  {
    image: ats,
    headline:
      "Leading National Machine Tool Accessories and Automation Provider",
    detail:
      "Barfeeders, high pressure coolant systems, chillers, mist collection, collet chucks, workholding systems.",
    link: "https://www.atssystems.us/",
  },
  {
    image: fowler,
    headline: "Making Measurement Easy",
    detail: "High precision tools and measuring instruments.",
    link: "https://www.fowlerprecision.com/",
  },
  {
    image: maq,
    headline: "Simplifing Machining by Reducing Vibration",
    detail: "Vibration dampening turning and milling tools.",
    link: "https://maqab.com/",
  },
  {
    image: superbee,
    headline: "USA Made Indexable Tooling",
    detail: "Indexanble carbide radidus, angle and special form cutting tools.",
    link: "https://www.swiftcarb.com/",
  },
  {
    image: swiftcarb,
    headline: "A New Tech Cutting Tools Company, ",
    detail:
      "High performance carbide end mills, indexable corner rounding tools and indexable milling cutters. Made in the USA.",
    link: "https://www.swiftcarb.com/",
  },
  {
    image: taylortool,
    headline: "Highest Standards of quality",
    detail:
      "Custom HSS and powdered metal taps, reamers and Threading dies. Made in Canada",
    link: "https://www.taylortool.com/",
  },
  {
    image: toolcraft,
    headline: "Innovative solutions for your application",
    detail:
      "Made to print carbide round tools. High quality and fast delivery. Made in Michigan.",
    link: "https://www.tool-craft.com/",
  },
];

function CardList() {
  const location = useLocation();
  // console.log("cardlist pathname " + location.pathname);
  if (location.pathname === "/") {
    return <Card items={companyDetail} />;
  } else {
    return <Card items={lineCard} />;
  }
}

function Card({ items }) {
  const path = useLocation();
  // console.log("card pathname " + path.pathname);

  setTimeout(function () {
    // console.log("Executed after 2 second"); // This runs after 1 second
    const linksToHide = document.getElementsByClassName("card__link");

    if (path.pathname === "/")
      for (let i = 0; i < linksToHide.length; i++) {
        linksToHide[i].classList.add("hidden");
      }
  }, 100);

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className='card'>
          <div className='card__image'>
            <img src={item.image} alt={item.image} />
          </div>
          <div>
            <h2 className='card__headline'>{item.headline}</h2>
          </div>
          <div className='card__detail'>
            <p>{item.detail}</p>
          </div>
          <div className='card__text-button'>
            <a className='card__link' href={item.link}>
              Learn More
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardList;
