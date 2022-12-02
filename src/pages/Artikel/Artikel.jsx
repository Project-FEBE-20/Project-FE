import React from "react";
import Aos from "aos";
import Navbar from "../../components/Layout/Navbar";
import "./Artikel.css";
import DaftarArtikel from "../../components/DaftarArtikel/DaftarArtikel";

function Artikel() {
  Aos.init();
  return (
    <>
      <Navbar />
      <section className="page-section" id="artikel">
        <div className="container">
          <div className="text-center">
            <h2 id="tagline" className="section-heading">
              Artikel Kesehatan
            </h2>
            <h5 className="section-subheading">Kami menyediakan artikel yang menarik mengenai kesehatan</h5>
            <hr />
          </div>
          
          <DaftarArtikel />
        </div>
      </section>
    </>
  );
}

export default Artikel;
