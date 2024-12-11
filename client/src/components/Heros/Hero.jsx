import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//images

//icons
import { TbMouseFilled, TbAppWindowFilled } from "react-icons/tb";
//hooks
import useWindowSize from "../../hooks/useWindowSize";
//style
import "./hero.css";
//models
import Developper from "../Developper/Developper";
import PricingModal from "../prices/PricingModal";
import Footer from "../footer/footer";

function Hero() {
  const size = useWindowSize();
  const isPhone = size.width > 800;
  const isTablet = size.width > 1300;
  const background = "#121212";
  const backgroundCompt = "#121212";
  const color = "aliceblue";
  const navigate = useNavigate();

  const GoToREgister = () => {
    navigate("/");
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          overflowX: "hidden",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          padding: 10,
        }}
      >
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
            className="fadeAnimation"
            style={{
              color: color,
              margin: 0,
              fontSize: isTablet ? 70 : 40,
            }}
          >
            Built in Days
          </h1>
          <h3
            className="fadeAnimation"
            style={{
              color: "#0081fb",
              fontSize: isTablet ? 45 : 25,
              margin: 0,
            }}
          >
            Scaled for Millions
          </h3>

          <p
            className="fadeAnimation"
            style={{
              fontSize: isTablet ? 20 : 13,
              textAlign: "center",
              fontWeight: "bold",
              width: "50%",
              color: color,
            }}
          >
            SupraTools is the platform for developers to easily launch, publish,
            and scale their tools. With instant deployment, analytics, and
            global reach, grow your projects to millions easily
          </p>
          <div
            className="btn fadeAnimation hover2"
            style={{ padding: "5px 15px", margin: "15px 0px" }}
          >
            <a
              href={GoToREgister()}
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              <p style={{ fontWeight: "bold", fontSize: 15 }}>Start Now</p>
            </a>
          </div>
        </div>
      </div>
      <PricingModal />
      <Developper />
    </>
  );
}

export default Hero;
