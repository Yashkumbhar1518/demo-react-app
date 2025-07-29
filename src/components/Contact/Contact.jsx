import {React , useEffect} from "react";
import Style from "./Contact.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contact() {
  useEffect(() =>{
    AOS.init({
      duration:2000
    })
  },[])
  return (
    <div className={Style.container} data-aos="zoom-in">
      <h1 data-aos="fade-left"
        style={{
          marginLeft: "3%",
          fontFamily: "Poppins",
          marginTop: "10%",
          fontWeight: "700",
          color: "black",
          fontSize: "70px",
        }}
      >
        Repair & Access Services
      </h1>
      <p data-aos="fade-up"
        style={{
          marginLeft: "3%",
          fontFamily: "Roboto",
          marginTop: "2%",
          fontWeight: "400",
          fontSize: "30px",
          color: "black",
        }}
      >
        Do your home and yourself a favour - update that interior ,<br /> take care of
        needed reapirs , or complete a makeover with <br /> help from the home service
      </p>
    </div>
  );
}

export default Contact;
