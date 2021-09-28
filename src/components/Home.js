import React, { useState } from "react";
import "../css/home.css";
import "../css/masjid.css";
import Header from "./Header";
import { Card, CardImg, CardText, CardTitle, CardBody } from "reactstrap";
import { FadeTransform } from "react-animation-components";
import CountUp from "react-countup";
import image1 from "./images/image1.jpeg";
import image2 from "./images/image2.png";
import image3 from "./images/image3.jpeg";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import image6 from "./images/image6.png";
import { Link } from "react-router-dom";

function RenderCard(props) {
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: "scale(0.5) translateY(-50%)",
      }}
    >
      <div>
        <Card
          style={{
            backgroundColor: "white",
            paddingTop: "30px",
            borderRadius: "40px",
          }}
        >
          <CardImg
            top
            width="100%"
            height="200vh"
            src={props.img}
            alt={props.name}
          />

          <CardBody>
            <CardTitle
              tag="h1"
              style={{
                color: "black",
                textDecoration: "none",
                textAlign: "right",
              }}
            >
              {props.name}
            </CardTitle>
            <CardText tag="h4" style={{ color: "black", textAlign: "right" }}>
              {props.des}
            </CardText>
          </CardBody>
        </Card>
      </div>
    </FadeTransform>
  );
}

export default function Home({ transactions }) {
  let totalMasjidAmount = transactions.reduce((acc, list) => {
    if (list.transType === "expense") {
      acc = list.amount + acc;
    }
    return acc;
  }, 0);
  let totalIncomeAmount = transactions.reduce((acc, list) => {
    if (list.transType === "income") {
      acc = list.amount + acc;
    }
    return acc;
  }, 0);
  return (
    <div className="main_div">
      <Header />
      <div className="container main_div">
        <div className="row flex-direction-row align-items-center justify-content-center">
          <div className="col-12 col-md-5 col-lg-3 m-4">
            <Link to="/masjid" style={{ textDecoration: "none" }}>
              <RenderCard
                img={image1}
                name={"مساجد"}
                des={<CountUp end={totalMasjidAmount} duration={1.5} />}
              />
            </Link>
          </div>

          <div className="col-12 col-md-5 col-lg-3 m-4 ">
            <Link to="/masjid" style={{ textDecoration: "none" }}>
              <RenderCard
                img={image2}
                name={"پانی"}
                des={<CountUp end={15000} duration={1.5} />}
              />
            </Link>
          </div>

          <div className="col-12 col-md-5 col-lg-3 m-4 ">
            <Link to="/masjid" style={{ textDecoration: "none" }}>
              <RenderCard
                img={image3}
                name={"جانور"}
                des={<CountUp end={25000} duration={1.5} />}
              />
            </Link>
          </div>

          <div className="col-12 col-md-5 col-lg-3 m-4 ">
            <Link to="/masjid" style={{ textDecoration: "none" }}>
              <RenderCard
                img={image4}
                name={"راشن"}
                des={<CountUp end={19000} duration={1.5} />}
              />
            </Link>
          </div>

          <div className="col-12 col-md-5 col-lg-3 m-4 ">
            <Link to="/account" style={{ textDecoration: "none" }}>
              <RenderCard
                img={image5}
                name={"کھاتہ"}
                des={<CountUp end={totalIncomeAmount} duration={1.5} />}
              />
            </Link>
          </div>

          <div className="col-12 col-md-5 col-lg-3 m-4">
            <Link to="/loan" style={{ textDecoration: "none" }}>
              <RenderCard
                img={image6}
                name={"قرضہ جات"}
                des={<CountUp end={totalMasjidAmount} duration={1.5} />}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}