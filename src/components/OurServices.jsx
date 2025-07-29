import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import assemblyImage from '../Images/Assembly.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function OurServices() {
  React.useEffect(()=>{
    AOS.init({
      duration:2000
    })
  })
    const serviceList = [
        {
            name:"Electrician",
            img: require("../Images/Electricalpng.png")
        },{
            name:"Carpenter",
            img: require("../Images/Carpenter.png")
        },{
            name:"Cleaning",
            img: require("../Images/Cleaning.png")
        },{
            name:"Painting",
            img: require("../Images/Painting.png")
        },{
            name:"Flooring",
            img: require("../Images/Flooring.png")
        },{
            name:"Plumbing",
            img: require("../Images/Plumbing.png")
        },{
            name:"Remodeling",
            img: require("../Images/Remodeling.png")
        },{
            name:"Water Proofing",
            img: require("../Images/pngegg.png")
        }
    ]
  return (
    <>
    <h1  data-aos="fade-up" style={{textAlign:"center" , marginTop:"3%" , fontFamily:"Roboto" , fontWeight:"700"}} >OUR SERVICES</h1>
    <div style={{ display: 'flex',justifyContent: "space-evenly",flexWrap:"wrap", margin:"0 10%" }} >
    {serviceList.map((items,id)=>{
        return(<Card  data-aos="fade-up" key={id} sx={{ maxWidth: 270, boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;", margin:"2% 0" }} >
            <CardActionArea style={{ display: 'flex',flexDirection:"column" ,alignItems: 'start', padding: "1rem" , }}>
              <span style={{ flex: '0 0 auto', marginRight: '16px', width: '75px', height: '75px', backgroundColor: ' #219ebc',borderRadius:"50%" }}>
                <img src={items.img} alt="lkdsfhnslkjd" style={{ width: '100%', height: '100%', objectFit: '',padding:"15%" }} />
              </span>
              <CardContent>
                <Typography sx={{ textAlign: "left"  , fontFamily:"Poppins" , fontWeight:"700"}} gutterBottom variant="h5" component="div">
                {items.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left"  , fontFamily:"Lato" , fontWeight:"400"}}>
                Explore our range of expert handyman services designed to make your life easier. From small repairs to major renovations, our skilled professionals are ready to tackle any project with precision and care. Get in touch today and let's bring your home improvement dreams to life!
                </Typography>
              </CardContent>
              <Button size="small" style={{padding:"10px 10px" , backgroundColor:"#219ebc" , color:"black" , marginTop:"2%" , width:"100%" , borderRadius:"20px" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" , fontFamily:"Poppins"}}><Link style={{textDecoration:"none" , color:"black"}}to={`/card/${items.name}`}>Book Service</Link>
                
              </Button>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>)
    })}
    </div>
    </>
  );
}
