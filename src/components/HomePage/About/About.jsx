import React from "react";
import "./About.css";
import Gambar from "../../../assets/terpercaya.png";
import Gambar1 from "../../../assets/FastRespond.png";
import Gambar2 from "../../../assets/Terlengkap.png";
function About() {
  return (
    <>
      <section className="page-section" id="About">
        <div className="container">
          <div className="text-center">
            <h1 id="tagline" className="section-heading">
              Tentang Kami
            </h1>
            <h5 className="section-subheading">Apasih yang tersedia?</h5>
            <hr />
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="px-3 drop-shadow-lg">
                <div>
                  <img src={Gambar} alt="" className="gambarabout" />
                  <h4 className="my-3">Berita Yang Menarik</h4>
                  <p className="text">Berita yang kami sajikan merupakan berita yang menarik dan terbaru mengenai kesehatan</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="px-3 drop-shadow-lg">
                <div>
                  <img src={Gambar1} alt="" className="gambarabout" />
                  <h4 className="my-3">Tersedia Tips Kesehatan</h4>
                  <p className="text">Tiap hari selalu ada tips kesehatan yang mudah diterapkan dimanapun dan kapanpun</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="px-3 drop-shadow-lg">
                <div>
                  <img src={Gambar2} alt="" className="gambarabout" />
                  <h4 className="my-3">Terlengkap</h4>
                  <p className="text">Informasi yang diberikan sangat lengkap untuk segala umur dan kalangan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
