//react Dom
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//styles
import "../../styles/header.css";

//icons
import { IoBagHandle } from "react-icons/io5";
import { TbLayoutListFilled } from "react-icons/tb";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { RiTranslate } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
//Hooks
import useWindowSize from "../../hooks/useWindowSize";

//components
import Search from "../searsh/searsh";

//Images
import logo from "../../assets/images/logo.png";

function Header() {
  const navigate = useNavigate();
  const size = useWindowSize();
  const isPhone = size.width > 800;
  const [isSearchVisible, setSearchVisible] = useState();

  /*const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "f") {
      event.preventDefault(); // Prevent the default action for Ctrl+S
      //console.log("CTRL + S was pressed");
      ToggleSearch();
      // Place the action you want to perform here
    }
  };*/

  const IconBtn = {
    margin: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#161618",
    padding: 4,
    borderRadius: 5,
    //width: 50,
    fontSize: 13,
    border: "solid 1px #333333",
  };
  const inputatyles = {
    background: "#161618",
    padding: "10px 12px",
    borderRadius: 5,
    cursor: "text",
    height: 20,
    //border: "solid 1px #333333",
    //borderWidth: 1,
    //borderStyle: "solid",
    width: 150,
    margin: "10px 15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    marginLeft: 15,
  };

  return (
    <>
      <div>
        <div
          className="header blur fadeDownAnimation"
          style={{
            width: size.width > 800 ? "100%" : "100%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={logo} alt="logo" className="logo" loading="lazy"/>
              <p style={{ fontSize: 18, cursor: "pointer" }}>
                <a
                  href="/"
                  style={{
                    color: "#ffffff",
                    textDecoration: "none",
                  }}
                >
                  SupraTools
                </a>
              </p>
              
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              //width: 130,
            }}
          >
            {/*list of tabs */}
            <div
              className="listNav"
              style={{ display: isPhone ? "flex" : "none" }}
            >
              <ul>
                <li>
                  <a href="/Home" style={{ color: "#ffffff" }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#ffffff" }}>
                    Developers
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#ffffff" }}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#ffffff" }}>
                    Docs
                  </a>
                </li>
              </ul>
            </div>
            {/*translate of tabs */}
            <div
              style={{
                borderRight: "solid 1px #333333",
                borderLeft: "solid 1px #333333",
                width: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <RiTranslate
                size={20}
                color="#ffffff"
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                marginLeft: 20,
              }}
            >
              <FaGithub size={20} color="#ffffff" />
            </div>
          </div>
        </div>
      </div>
      {/*isSearchVisible && <Search onClose={ToggleSearchHiden} />\*/}
    </>
  );
}

export default Header;
