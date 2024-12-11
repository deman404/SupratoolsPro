import React from "react";

//Hooks
//import { useTheme } from "../../Hooks/ThemeContext";
//import Paypal from "../../Hooks/Paypal";

const Box = (props) => {
  const { title, btnClass, btnTitle, price, feature, link } = props;
  const background = "#101010";
  const backgroundCompt = "#242424";
  const color = "aliceblue";
  const border = "#333";
  return (
    <div
      className="fadeAnimation"
      style={{
        width: 250,
        height: 400,
        backgroundColor: backgroundCompt,
        borderColor: border,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
        padding: "20px",
        color: color,
      }}
    >
      <div
        style={{
          paddingBottom: "10px",
        }}
      >
        <h4
          style={{
            margin: 0,
            fontWeight: "normal",
            fontSize: "1.5rem",
          }}
        >
          {title}
        </h4>
      </div>
      <div style={{height:"60%"}}>
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          ${price} <small>/ mo</small>
        </h1>
        <ul
          style={{
            listStyleType: "none",
            marginTop: "1rem",
            marginBottom: "1.5rem",
            padding: 0,
            fontSize: "1rem",
          }}
        >
          {feature &&
            feature.map((data, index) => {
              return <li key={index}>{data}</li>;
            })}
        </ul>
      </div>
      {/*<Paypal price={price} plansType={title} />*/}
    </div>
  );
};

export default Box;