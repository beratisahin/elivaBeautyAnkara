import "./Iletisim.css";
import React from "react";
import useDocumentTitle from "../../useDocumentTitle.js";
import Title from "../title/Title";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Mail from "./ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactMailIcon from '@material-ui/icons/ContactMail';


function Iletisim() {
  useDocumentTitle("İletişim - Ankara Eliva Beauty ");
  return (
    <div className="col-12">
      <div
        className="card m-4"
        style={{
          align: "center",
          backgroundColor: "#f8f7fb",
          borderRadius: "5px",
        }}
      >
        <Title page_title="İletişim" />
      </div>

      <div
        class="col-lg-6s col-md-6 col-sm-12 col-12"
        style={{ }}
      >
        <p className="contactInfo">İletişim Bilgilerimiz</p>

        <p style={{ fontSize: "medium", textAlign: "left" }}>
              {" "}
              <a href="mailto:elivabeautyankara@gmail.com">
                <ContactMailIcon style={{ fontSize: "x-large" }} />
              </a>
              &nbsp; elivabeautyankara@gmail.com
            </p>
            <p style={{ fontSize: "medium", textAlign: "left", }}>
              {" "}
              <a
                href="tel: +905060326506"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon style={{ fontSize: "x-large",color:"#25d366" }} />
              </a>
              &nbsp; <b>0506 032 65 06</b> <FontAwesomeIcon icon="coffee" size="lg" />
            </p>
            <p style={{ fontSize: "medium", textAlign: "left" }}>
              <a
                href="https://goo.gl/maps/VsnbDNwofeigAHJo8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LocationOnIcon style={{ fontSize: "x-large",color:"#c71535" }} />
              </a>
              &nbsp; Kocatepe Mahallesi Meşrutiyet Caddesi Özay Apartmanı No:32 Kat:2 Daire:4 Çankaya / ANKARA
           
              
            </p>
      </div>











      <div class="col-lg-6 col-md-6 col-sm-12 col-12">
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
            border: "2px #b22e86 solid",
            paddingBottom: "0.5rem",
            paddingTop: "0.5rem",
          }}
        >
          {" "}
        </iframe>
      </div>
        <Mail/>

    </div>
  );
}

export default Iletisim;
