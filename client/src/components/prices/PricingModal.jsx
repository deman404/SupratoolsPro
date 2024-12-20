import React from "react";
//hooks
import useWindowSize from "../../hooks/useWindowSize";
//modals
import Box from "./Box";
function PricingModal() {
  const size = useWindowSize();
  const isPhone = size.width > 800;
  const isTablet = size.width > 1300;
  
  const background = "#101010";
  const backgroundCompt = "#242424";
  const color = "aliceblue";
  const border = "#333";
  const featureBox2 = [
    "post up to 3-5 apps/tools",
    "Email support",
    "Moderate Visibility",
    "Help center access",
    "Basic Analytics",
  ];
  const featureBox3 = [
    "Unlimited Posting",
    "Featured Listings",
    "Advanced Analytics",
    "Enhanced Marketing",
    "Help center access",
    "Email support",
  ];
  const cardDeckStyle = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    gap: "20px",
    margin: "20px 0px",
    flexWrap: "wrap",
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: 80,
          zIndex: 1,
        }}
      >
        <h1
          className="fadeDownAnimation"
          style={{
            color: color,
            margin: 0,
            fontSize: isTablet ? 70 : 40,
          }}
        >
          Predictable pricing
        </h1>
        <h3
          className=" fadeDownAnimation"
          style={{
            color: "#0081fb",
            fontSize: isTablet ? 45 : 25,
            margin: 0,
          }}
        >
          designed to scale
        </h3>
        <div style={cardDeckStyle}>
          <Box
            feature={featureBox2}
            price="1"
            title="Starter"
            btnClass="btn-primary"
            btnTitle="Get started"
          />
          <Box
            feature={featureBox3}
            price="9"
            title="Advance"
            btnClass="btn-primary"
            btnTitle="Get started"
          />
        </div>
        <h3
          className=" fadeDownAnimation"
          style={{
            color: "#0081fb",
            fontSize: isTablet ? 45 : 25,
            margin: 0,
          }}
        >
          Choose as your needs
        </h3>
      </div>
    </>
  );
}

export default PricingModal;