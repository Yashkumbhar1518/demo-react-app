import React from "react";
import Style from "./Footer.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Footer() {
  React.useEffect(() =>{
    AOS.init({
      duration:2000
    })
  },[])
  return (
    <>
      <div className={Style.container} data-aos="zoom-in">
        <img data-aos="fade-up"
          src="/images/repairo-logo.png"
          alt=""
          style={{
            height: "15%",
            width: "10%",
            marginTop: "3%",
            marginLeft: "45%",
          }}
        />

        <h1 data-aos="fade-up"
          style={{
            // marginLeft: "42%",
            fontFamily: "Lato",
            marginTop: "2%",
            fontWeight: "400",
            color: "black",
            fontSize: "40px",
            textAlign: "center",
            // padding:"20px 20px"
          }}
        >
          Follow Us On
        </h1>
        <div data-aos="fade-up"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            marginTop: "3%",
            alignItems:"center"
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <i class="fa-solid fa-envelope"></i>
            <h5 style={{ marginLeft: "5px" , padding:"5px" }}>repairooservice@gmail.com</h5>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i class="fa-brands fa-facebook"></i>
            <h5 style={{ marginLeft: "5px" , padding:"5px" }}>Repairoo</h5>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <i class="fa-brands fa-instagram"></i>
            <h5 style={{ marginLeft: "5px"  , padding:"5px"}}>Repairoo_service</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
