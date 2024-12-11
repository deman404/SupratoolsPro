import React from "react";
//icons
import { IoSearchSharp } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";
export default function searsh({ onClose }) {
  const inputatyles = {
    background: "#161618",
    padding: "5px 12px",
    borderRadius: 5,
    cursor: "text",
    height: 30,
    border: "solid 1px #333333",
    width: 400,
    margin: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 15,
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: 15,
        backgroundColor: "#10101087",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
      }}
      
    >
      <div
        style={{
          width: 480,
          height: 180,
          backgroundColor: "#242424",
          borderRadius: 10,
          marginTop: 100,
          border: "solid 1px #a8b1ff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={inputatyles}>
          <IoSearchSharp size={20} color={"#fff"} />
          <input
            type="text"
            style={{
              backgroundColor: "#161618",
              border: "none",
              width: "100%",
              height: "100%",
              marginLeft: 10,
            }}
          />
          <IoMdCloseCircle size={20} color={"#fff"} style={{cursor:"pointer"}} onClick={onClose}/>
        </div>
        
      </div>
    </div>
  );
}
