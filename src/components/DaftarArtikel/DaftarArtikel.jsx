import React, { useEffect, useState } from "react";
import "./DaftarArtikel.css";
import { Whatsapp } from "react-bootstrap-icons";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import  Search  from "../../components/Search/Search"

function DaftarArtikel() {
  let userData = localStorage.getItem("userlogin");
  
  const navigate = useNavigate();
  const [contentArticle, setContentArticle] = useState([]);
  const [allContent, setAllContent] = useState([]);
  // const whatssap = (nama) => {
  //   let url = `https://api.whatsapp.com/send/?phone=62${nama.phonenumber}&text=` + "Nama : " + nama.nama + "%0a" + "Layanan : " + nama.layanan + "%0a" + "Keluhan : " + nama.keluhan + "%0a" + "Jawaban Dokter : ";
  //   window.open(url);
  // };
  let refresh = ()=>{
    fetch("https://bronze-cape-buffalo-sari.cyclic.app/article/", {
      method: "GET",
      headers:{ 
        "authorization": localStorage.getItem("authToken"),
      "Content-Type": "application/json",
      "Accept": "*/*",
    }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setContentArticle(data.data);        
        setAllContent(data.data);        
      });
  }

  let cari = (value)=>{
    console.log(value);
    if(value!==""){
      setContentArticle(contentArticle.filter(function (el) {
        return el.title.toLowerCase().includes(value);
      }))
      console.log(value);
    }else{
      refresh();
    }
  }
  useEffect(() => {
    refresh();
  }, []);

  // useEffect(() => {
  //   const formData = localStorage.getItem("formkonsul");
  //   setIsikonsul(JSON.parse(formData));
  // }, [isikonsul]);
  let hapus = async (id) =>{
   try {
    let hasil = await fetch("https://bronze-cape-buffalo-sari.cyclic.app/article/"+id, {
      method: "DELETE",
      body:JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
        "authorization":localStorage.getItem("authToken")
      },
    })
    hasil = await hasil.json()
    Swal.fire({
      title: "Berhasil!",
      text: hasil.message,
      icon: "success",
      confirmButtonText: "Selesai",
    });
    // navigate("/Artikel")
    refresh();
   } catch (error) {
    console.log(error);
   }
  }
  if (contentArticle === null) {
    return (
      <div className="container">
      <div data-aos="zoom-in" data-aos-duration="2000">
      <>
        <div className="container justify-content-center konsul">
          <div className="row d-flex justify-content-center">
            <h2>Belum ada Artikel</h2>
          </div>
        </div>
      </>        
      </div>
    </div>

    );
  } else {
    if(userData.role !="user"){
    return (
      <>
      <Search onType={cari}/>
        <div class="container bootstrap snippets bootdeys">
          <div class="row d-flex justify-content-center">
            {contentArticle.map((nama) => (
              <>
                <div class="col-md-25 col-sm-16 content-card mb-10">
                  <div class="card-big-shadow">
                    <div class="card card-just-text p-5" data-background="color" data-color="blue" data-radius="none">
                      <div class="content">
                        <p className="d-none" class="user" data-id={nama._id}></p>
                        <p className="list">Judul Artikel : {nama.title}</p>
                        <p className="list">Kategori : {nama.category}</p>
                        <p className="list">Tanggal : {nama.createdAt}</p>
                        <p className="list">Penulis : {nama.writter.nama}</p>
                        <p className="list">Artikel : {nama.content}</p>
                        <button className="btn btn-danger" onClick={() => hapus(nama._id)}>Hapus</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  }else{
    return (
      <>
      <Search onType={cari}/>
        <div class="container bootstrap snippets bootdeys">
          <div class="row d-flex justify-content-center">
            {contentArticle.map((nama) => (
              <>
                <div class="col-md-25 col-sm-16 content-card mb-10">
                  <div class="card-big-shadow">
                    <div class="card card-just-text p-5" data-background="color" data-color="blue" data-radius="none">
                      <div class="content">
                        <p className="d-none" class="user" data-id={nama._id}></p>
                        <p className="list">Judul Artikel : {nama.title}</p>
                        <p className="list">Kategori : {nama.category}</p>
                        <p className="list">Tanggal : {nama.createdAt}</p>
                        <p className="list">Penulis : {nama.writter.nama}</p>
                        <p className="list">Artikel : {nama.content}</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
  } 
  }
}
export default DaftarArtikel;
