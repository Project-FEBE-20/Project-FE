import React from "react";
import Aos from "aos";
import Navbar from "../../components/Layout/Navbar";
import "./Profile.css";
import DataProfile from "../../components/DataProfile/DataProfile";

import { Search } from "react-bootstrap-icons";

function Profile() {
  Aos.init();
  return (
    <>
      <Navbar />
      <section className="page-section" id="Profile">
        <div className="container">
          <div className="text-center">
            <h2 id="tagline" className="section-heading">
              Profile
            </h2>
            <hr />
          </div>
          <div className="container">
            <div data-aos="zoom-in" data-aos-duration="2000">
              <DataProfile />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
