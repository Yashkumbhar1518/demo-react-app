import React, { useEffect } from "react";
import Style from "./Home.module.css";
import Middlepage from "./Middle/Middlepage";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import OurServices from "./OurServices";
import Comp2 from "./Comp2";
import { useNavigate } from "react-router-dom";

function Home() {
  useEffect(() =>{
    AOS.init({
      duration:2000
    })
  },[])

  const navigate = useNavigate()
  const handleBook = () =>{
      navigate('/service')
  }
  return (
    <>
      <div className={Style.mymain} data-aos="zoom-in" >
        <h1 data-aos="fade-left"
          style={{
            marginLeft: "5%",
            fontFamily: "Poppins",
            marginTop: "10%",
            fontWeight: "700",
            color: "white",
            fontSize: "70px",
          }}
        >
          Handyman Services
        </h1>
        <p data-aos="fade-right"
          style={{
            marginLeft: "5%",
            fontFamily: "Lota",
            marginTop: "1%",
            fontWeight: "400",
            fontSize: "30px",
            color: "white",
          }}
        >
          Bringing craftsmenship to your doorstep . <br />Elevating homes with expertise
        </p>
        <button data-aos="flip-right" onClick={handleBook}
          style={{
            marginLeft: "5%",
            fontFamily: "Poppins",
            marginTop: "1%",
            fontWeight: "400",
            fontSize: "20px",
            padding: "10px 20px",
            backgroundColor: "transparent",
            border: "1px solid white ",
            borderRadius: "10px",
            color: "white",
          }}
        >
          Book Your Service{" "}
          <i class="fa-solid fa-arrow-right" style={{ padding: "10px"  , }}></i>
        </button>
      </div>
      <Middlepage />
      <Contact/>
      <Comp2/>
      <OurServices/>
      <Footer/>
    </>
  );
}

export default Home;
