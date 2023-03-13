import React from "react";
import "./Klinik.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import k1 from "./kampanyalar/1.webp";
import k2 from "./kampanyalar/2.webp";
import k3 from "./kampanyalar/3.webp";
import k4 from "./kampanyalar/4.webp";
import k5 from "./kampanyalar/5.webp";
import k6 from "./kampanyalar/6.webp";
import k7 from "./kampanyalar/7.webp";
import k8 from "./kampanyalar/8.webp";
import k9 from "./kampanyalar/9.webp";

import KampComp from "./KlinikComp.js";

//Owl Carousel Settings
const options = {
  margin: 5,
  responsiveClass: true,
  autoplayHoverPause: false,
  dots: 2,
  autoplay: true,
  loop: true,
  dotsSpeed: 2,
  navText: ["", ""],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};

export default function Klinik() {
  return (
    <div
      class="col-12"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        zIndex: "1000",
      }}
    >
      <OwlCarousel className="owl-theme owl-roof" {...options}>
        <KampComp
          kampanyaResim={k1}
          kampanyaAd="https://wa.me/+905060326506?text=Merhaba%2C%20T%C3%BCm%20Kol%20-%20Koltukalt%C4%B1%20-%20T%C3%BCm%20Bacak%20-%20Genital%20-%20Popo%201499%E2%82%BA%20bayan%20epilasyon%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
        />

        <KampComp
          kampanyaResim={k2}
          kampanyaAd="https://wa.me/+905060326506?text=Merhaba%2C%20Koltukalt%C4%B1%20-%20T%C3%BCm%20Bacak%20-%20Genital%20B%C3%B6lge%20999%E2%82%BA%20bayan%20epilasyon%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
        />
        <KampComp
          kampanyaResim={k3}
          kampanyaAd="https://wa.me/+905060326506?text=Merhaba%2C%20Tepeden%20T%C4%B1rna%C4%9Fa%20T%C3%BCm%20V%C3%BCcut%202500%E2%82%BA%20bayan%20epilasyon%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
        />

        <KampComp
          kampanyaResim={k4}
          kampanyaAd="https://wa.me/+905060326506?text=Merhaba%2C%20Y%C3%BCz%20B%C3%B6lgesi%20650%E2%82%BA%20bayan%20epilasyon%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
        />

        <KampComp
          kampanyaResim={k5}
          kampanyaAd="https://wa.me/+905060326506?text=Merhaba%2C%20Ense%20-%20Boyun%20-%20Yanak%20650%E2%82%BA%20bay%20epilasyon%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
        />

        <KampComp
          kampanyaResim={k6}
          kampanyaAd="https://wa.me/+905060326506?text=Merhaba%2C%20Kemer%20%C3%9Cst%C3%BC%201499%E2%82%BA%20bay%20epilasyon%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
        />

        <KampComp
          kampanyaResim={k7}
          kampanyaAd="https://wa.me/+905060326506?text=Merhaba%2C%204%20Seans%20Hydrafacial%20Cilt%20Bak%C4%B1m%C4%B1%20kampanyas%C4%B1%20(699%E2%82%BA)%20%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
        />

        <KampComp
          kampanyaResim={k8}
          kampanyaAd="https://wa.me/+905060326506?text=Merhaba%2C%206%20Seans%20G5%20Masaj%C4%B1%20kampanyas%C4%B1%20(599%E2%82%BA)%20%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
        />

        <KampComp
          kampanyaResim={k9}
          kampanyaAd="https://wa.me/+905060326506?text=Merhaba%2C%206%20Seans%20B%C3%B6lgesel%20%C4%B0ncelme%20kampanyas%C4%B1%20(699%E2%82%BA)%20%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
        />
      </OwlCarousel>
    </div>
  );
}
