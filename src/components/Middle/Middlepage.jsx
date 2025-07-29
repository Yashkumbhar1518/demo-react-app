import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

function Middlepage() {
  useEffect(() =>{
    AOS.init({
      duration:2000
    })
  },[])
  return (
    <div data-aos="zoom-in"
      style={{
        backgroundColor: "#bde0fe",
        width: "90%",
        height: "80vh",
        backgroundRepeat: "no-repeat",
        marginTop: "-40px",
        marginLeft: "5%",
        marginRight: "5%",
        borderRadius: "30px",
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        paddingTop: "10px",
      }}
    >
      <h1 data-aos="fade-up"
        style={{
          marginLeft: "35%",
          fontFamily: "Lato",
          marginTop: "10%",
          fontWeight: "900",
        //   fontSize:"larger",
          color: "black",
        }}
      >
        Install & Repair Services
      </h1>

      <p data-aos="fade-up"
        style={{
          marginLeft: "25%",
          fontFamily: "Roboto",
          marginTop: "3%",
          fontWeight: "100",
          fontSize: "20px",
          color: "black",
        }}
      >
        Our Local experts in your Neighbourhood area can be there as soon as on
        possible
      </p>

      <p
        style={{
          marginLeft: "20%",
          fontFamily: "Roboto",
        //   marginTop: "1%",
          fontWeight: "400",
          fontSize: "20px",
          color: "black",
        }}
      >
        Trust us to tackle your household tasks efficiently and effectively ,
        leaving your house in tip-top shape
      </p>

      <button data-aos="flip-right" link
        style={{
          marginLeft: "47%",
          fontFamily: "Poppins",
          marginTop: "3%",
          fontWeight: "400",
          fontSize: "20px",
          padding: "10px 30px",
          backgroundColor: "transparent",
          border: "1px solid black ",
          borderRadius: "10px",
          color: "black",
        }}
      > 
        <Link to ={'/contact'}>
        Contact Us
        </Link>
      </button>
    </div>
    
  );
}

export default Middlepage;
