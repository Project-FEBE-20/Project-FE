import React, { useEffect, useState } from "react";
import "./DataProfile.css";
import { Whatsapp } from "react-bootstrap-icons";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


function DataProfile() {
  let userData = localStorage.getItem("userlogin");


  const navigate = useNavigate();
  userData = JSON.parse(userData);
  const [name, setName] = useState(userData.nama);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhoneNumber] = useState(userData.phone);
  const formhandle = async () => {
    if (name === "" || email === "" ||phone==="") {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Data tidak boleh kosong atau data yang anda masukkan salah",
      });
    } else {
      
      let data_u = {
        "nama": name,
        "email": email,
        "phone": phone,
        "role":userData.role
      }
      console.log(data_u);
      try {
        let hasil = await fetch("https://bronze-cape-buffalo-sari.cyclic.app/user/profile", { 
      method: "PUT",
      body: JSON.stringify(
        data_u
      ),
      headers: { 
        "authorization": localStorage.getItem("authToken"),
      "Content-Type": "application/json",
      "Accept": "*/*",
    }})
    hasil = await hasil.json()
    // console.log(hasil);
    if(hasil.status == 201){
      Swal.fire({
        title: "Berhasil!",
        text: "Profil Berhasil Diubah",
        icon: "success",
        confirmButtonText: "Selesai",
      });
      localStorage.setItem("userlogin", JSON.stringify(data_u));
      navigate("/");
    }
      } catch (error) {
        console.log(error);
      }
      
  }};
  // const whatssap = (nama) => {
  //   let url = `https://api.whatsapp.com/send/?phone=62${nama.phonenumber}&text=` + "Nama : " + nama.nama + "%0a" + "Layanan : " + nama.layanan + "%0a" + "Keluhan : " + nama.keluhan + "%0a" + "Jawaban Dokter : ";
  //   window.open(url);
  // };

  // useEffect(() => {
  //   const formData = localStorage.getItem("formkonsul");
  //   setIsikonsul(JSON.parse(formData));
  // }, [isikonsul]);


    return (
      <>
        <div class="container bootstrap snippets bootdeys">
          <div class="row d-flex align-text-left">
              <>
                <div class="col-md-25 col-sm-16 content-card mb-10">
                  <div class="card-big-shadow">
                    <div class="card card-just-text p-5" data-background="color" data-color="blue" data-radius="none">
                      <div class="content">
                        {/* <p className="list">Username : <input type="text" name="username" defaultValue={userData.nama} id="username" onChange={(e) => setUser(e.target.value)}/></p> */}
                        <p className="list">Nama : <input type="text" name="name" id="name" defaultValue={userData.nama} onChange={(e) => setName(e.target.value)}/></p>
                        <p className="list">Email : <input type="text" name="email" id="email" defaultValue={userData.email} onChange={(e) => setEmail(e.target.value)}/></p>
                        <p className="list">Nomor Telepon : <input type="text" name="phone" id="phone" defaultValue={userData.phone} onChange={(e) => setPhoneNumber(e.target.value)}/></p>
                      <div className="form-button mt-3">
                          <button id="submit" type="submit" className="noselect" onClick={(e) => formhandle(e.preventDefault())}>
                            Kirimkan
                          </button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>

          </div>
        </div>
      </>
    );
  }

export default DataProfile;
