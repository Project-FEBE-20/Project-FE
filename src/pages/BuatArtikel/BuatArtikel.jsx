import React, { useEffect, useState } from "react";
import "./BuatArtikel.css";
import Aos from "aos";
import Swal from "sweetalert2";
import Navbar from "../../components/Layout/Navbar";
import { useNavigate } from "react-router-dom";

function BuatArtikel() {
  Aos.init();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [writer, setWriter] = useState("");
  const [contentArticle, setContentArticle] = useState([]);

  const getartikel = () => {
    const formData = localStorage.getItem("formartikel");
    setContentArticle(JSON.parse(formData));
  };

  const formhandle = () => {
    let dataArtikel = {
      "title": title,
      "category": category,
      "content": contentArticle,
      "writter" : JSON.parse(localStorage.getItem("userlogin"))._id
    };
    if (title === "" || category === "" || writer === "" || contentArticle === "") {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Data tidak boleh kosong atau data yang anda masukkan salah",
      });
    } else {
      // if (isikonsul === null) {
      //   setIsikonsul([datakonsul]);
      //   localStorage.setItem("formkonsul", JSON.stringify([datakonsul]));
      // } else {
      //   localStorage.setItem("formkonsul", JSON.stringify([...isikonsul, datakonsul]));
      //   setIsikonsul([...isikonsul, datakonsul]);
      // }
      fetch("https://bronze-cape-buffalo-sari.cyclic.app/article/add", {
        method: "POST",
        body: JSON.stringify(dataArtikel),
        headers: {
          "Content-Type": "application/json",
          "authorization":localStorage.getItem("authToken")
        },
      })
        .then((response) => JSON.parse(response))
        .then((data) => setContentArticle(data));

      Swal.fire({
        title: "Berhasil!",
        text: "Artikel Berhasil terkirim",
        icon: "success",
        confirmButtonText: "Selesai",
      });
      navigate("/");
    }
  };
  useEffect(() => {
    getartikel();
  }, []);

  useEffect(() => {
    console.log(contentArticle);
  }, [contentArticle]);
  return (
    <>
      <Navbar />
      <div id="containerartikel" className="mb-3">
        <div data-aos="flip-in" data-aos-anchor-placement="center-center" data-aos-duration="1500">
          <div id="services">
            <h1 id="tagline" className="section-heading">
              artikel
            </h1>
            <h5 className="section-subheading">Anda menyampaikan kami mendengarkan</h5>
            <hr />
          </div>
        </div>
      </div>
      <div className="form-body">
        <div className="form-holder">
          <div className="form-content" id="formArtikel">
            <div className="form-items">
              <h3>Artikel</h3>
              {/* <h3 className="section-subheading" style={{ color: "red" }}>
                GRATIS!!! GRATIS!!! GRATIS!!!
              </h3> */}
              <form className="requires-validation" noValidate>
                <div className="col-md-12">
                  <input className="form-control" type="text" name="title" placeholder="Judul Artikel" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="col-md-12">
                  <input className="form-control" type="text" name="writer" placeholder="Penulis" onChange={(e) => setWriter(e.target.value)} />
                </div>
                <div className="col-md-12">
                  <input className="form-control mt-3" type="tetx" name="category" placeholder="Kategori" onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div className="form-group">
                  <textarea className="form-control mt-3" id="exampleFormControlTextarea1" rows="6" placeholder="Tulis artikel anda" onChange={(e) => setContentArticle(e.target.value)}></textarea>
                </div>
                <div className="text-center mt-4">
                  <label className="form-check-label">
                    <b>I confirm that all data are correct and can be responsible</b>
                  </label>
                </div>
                <div className="form-button mt-3">
                  <button id="submit" type="submit" className="noselect" onClick={(e) => formhandle(e.preventDefault())}>
                    Kirimkan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default BuatArtikel;
