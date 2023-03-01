import React from "react";
import "./Home.css";
import NedenBercislina from "../home/neden/Neden.js";
import Mail from "../iletisim/ContactForm";
import Owl from "../slider/owlcarousel/Owl";
import Klinik from "../klinik/Klinik.js";

import TopluHizmet from "../topluhizmet/TopluHizmet.js";

function Home() {
  return (
    <div>
      <div className="row">
        <h2
          className="doktorlarTitle"
          style={{
            textAlign: "center",
            fontSize: "x-large",
            marginTop: "1rem",
            color: "#E59026",
            fontFamily: "sans-serif",
          }}
        >
          Kayıtlarımız Başlamıştır
        </h2>
        <Klinik />
      </div>

      <br />
      <hr />

      <div className="col-12">
        <NedenBercislina />
      </div>

      <br />
      <hr />
      <div className="row">
        <TopluHizmet />
      </div>

      <hr />

      <div className="row">
        <h2
          className="doktorlarTitle"
          style={{
            textAlign: "center",
            fontSize: "x-large",
            color: "#E59026",
            fontFamily: "sans-serif",
          }}
        >
          Hizmetlerimiz
        </h2>
        <Owl />
      </div>
      <br />
      <div className="col-12">
        <Mail />
      </div>
      <br />
      <div className="row m-2">
        <div
          className="col-lg-12  col-12 harita"
          style={{ marginTop: "2.5rem" }}
        >
          <p className="harita_baslik">Lokasyonumuz</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12242.481537682064!2d32.8603997!3d39.9051308!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fb21fdc10c7%3A0x2b0faa7595dfec08!2sLavinya%20Golden%20Ankara!5e0!3m2!1str!2str!4v1677537876831!5m2!1str!2str"
            className="googleharita"
            style={{
              width: "100%",
              height: "45rem",
              frameBorder: "0",
              allowFullScreen: "",
              referrerpolicy: "no-referrer-when-downgrade",
              ariaHidden: "false",
              tabIndex: "0",
              border: "2px #E59026 solid",
              paddingBottom: "0.5rem",
              paddingTop: "0.5rem",
            }}
          >
            {" "}
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Home;
