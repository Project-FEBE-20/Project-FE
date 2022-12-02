import React, { useEffect } from "react";
import Masthead from "../../components/HomePage/Masthead/Masthead";
import About from "../../components/HomePage/About/About";
import "./HomePage.css";
// import { useCheckLogin } from "../../helper/getLocalStorage";
import Navbar from "../../components/Layout/Navbar";

function HomePage() {
  // const { userData } = useCheckLogin();
  // useEffect(() => {}, [userData]);
  // fetch('/user/login', {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(
  //     {
  //       "email":"l@mkjhail.com",
  //       "nama":"Kelor",
  //       "password":"Androdi",
  //       "phone":"04422442"
  //     }
  //   )
  // }).then(data=>data.json()).then(
  //   data=>console.log(data)
  // );
  return (
    <>
      <Navbar />
      <Masthead />

      <div data-aos="fade-up" data-aos-duration="3000">
        <About />
      </div>
      
    </>
  );
}
export default HomePage;
