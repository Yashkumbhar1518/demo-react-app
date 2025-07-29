import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Comp2() {
  React.useEffect(() =>{
    AOS.init({
      duration:2000
    })
  },[])
  return (
    <div style={{ display: "flex", margin: "5% 10%", alignItems: "center", flexWrap: "wrap" }}>
      <div data-aos="fade-right" style={{ 
        backgroundImage: `url(${require("../Images/rt.jpg")})`, 
        minHeight: "629px", 
        width: "50%", // Set width to 100% to ensure wrapping
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center' 
      }}>
      </div>
      <div data-aos="fade-left" style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", margin: "10% 10%", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <span style={{ height: "33px", width: "33px" }}><img src={require('../Images/download.png')} alt="" style={{ height: "100%", width: "100%" }} /></span>
          <p style={{ margin: "13px 0 0", fontSize: "1.25rem" }}>The mark of a true professional handyman is not just fixing things, but leaving behind a smile on the faces of those they help</p>
          <h5 style={{ fontWeight: "700", margin: "13px auto 0", fontSize: "2rem" }}>Benjamin Franklin</h5>
        </div>
        <div style={{ display: "flex", margin: "10% 10%", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
          <span style={{ height: "33px", width: "33px" }}><img src={require('../Images/download.png')} alt="" style={{ height: "100%", width: "100%" }} /></span>
          <p style={{ margin: "13px 0 0", fontSize: "1.25rem" }}>Behind every beautifully maintained home, there's a dedicated handyman who knows that attention to detail makes all the difference</p>
          <h5 style={{ fontWeight: "700", margin: "13px auto 0", fontSize: "2rem" }}>Alan Hirsch</h5>
        </div>
      </div>
    </div>
  );
}

export default Comp2;
