import React, { useState, useEffect } from "react";
import output from "./output.json";
import toast from "react-hot-toast";

function Modal(props) {
  const [filterdata, setfilterdata] = useState([]);
  // console.log(props.service)
  useEffect(() => {
    async function filterData() {
      const data = await output.filter(
        (data) => data.Service === props.service
      );
      console.log(data);
      setfilterdata(data);
    }
    filterData();
  }, []);

  const handleBook = () =>{
    toast.success('Service Booked');
  }

  return (
    <div className="container d-flex flex-wrap justify-content-evenly mt-3">
      {filterdata?.map((items, id) => {
        return (
          <div
            className="card mt-3"
            style={{
              width: "18rem",
              border: "none",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
            key={id}
          >
            <h5
              className="card-header text-align-center"
              style={{ fontFamily: "Poppins", backgroundColor: "#219ebc" }}
            >
              {items.Service}
            </h5>
            <div className="card-body">
              <h5 className="card-title" style={{ fontFamily: "Poppins" }}>
                {items.ProviderName}
              </h5>
              <p className="card-text">{items.Price}</p>
              <a
                href="#"
                className="btn "
                style={{
                  padding: "5px 5px",
                  backgroundColor: "#219ebc",
                  color: "black",
                  marginTop: "2%",
                  width: "50%",
                  borderRadius: "20px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  fontFamily: "Poppins",
                }} onClick={handleBook}
              >
                Book Now
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Modal;
