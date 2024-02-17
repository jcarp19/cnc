import React from "react";

const companyDetail = [
  {
    image: "../_images/cnc_tooling_logo.svg",
    headline: "Who We Are",
    detail:
      "CNC Tooling Solutions, LLC a technical sales and marketing company that specializes in cutting tools, workholding, machine tool accessories, coolant and coolant maintenance.  We promote products through distribution with a focus on the end user. Our goal is to help our customers reduce costs with better ideas and products.  We build brand awareness with our Distributors and their customers through personal visits, direct marketing, trade shows and social media.",
  },
  {
    image: "../_images/cnc_tooling_logo.svg",
    headline: "Our Mission",
    detail:
      "Our mission is to provide high quality products and a high level of service and support to our customers and principals.",
  },
];

function CardList() {
  return <Card items={companyDetail} />;
}

function Card({ items }) {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className='card'>
          <div className='card__image'>
            <img src={item.image} alt='' />
          </div>
          <div>
            <h2 className='card__headline'>{item.headline}</h2>
          </div>
          <div className='card__detail'>
            <p>{item.detail}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardList;
