import React from 'react'
import './Klinik.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import k1 from "./kampanyalar/1.webp";
import k2 from "./kampanyalar/2.webp";
import k3 from "./kampanyalar/3.webp";
import k4 from "./kampanyalar/4.webp";
import k5 from "./kampanyalar/5.webp";
import k6 from "./kampanyalar/6.webp";
import k7 from "./kampanyalar/7.webp";




import KampComp from "./KlinikComp.js";





//Owl Carousel Settings
const options = {
    margin: 5,
    responsiveClass: true,
    autoplayHoverPause:false,
    dots:2,
    autoplay: true,
    loop:true,
    dotsSpeed:2,
    navText: ["",""],
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
        }
    },
  };


export default function Klinik() {
    return (
        <div class="col-12" style={{width:"100%",display:"flex",justifyContent:"center",flexWrap:"wrap",zIndex: "1000"}}>
            <OwlCarousel className="owl-theme owl-roof" {...options}>
                 
               <KampComp
                    kampanyaResim={k1}
                    kampanyaAd="https://wa.me/+905528179398?text=Merhaba%2C%20Bayanlar%20i%C3%A7in%20T%C3%BCm%20Kol%2C%20Koltukalt%C4%B1%2C%20T%C3%BCm%20Bacak%2C%20Genital%20B%C3%B6lge%20ve%20Popo%20Lazer%20Epilasyon%20(1700%E2%82%BA)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k2}
                    kampanyaAd="https://wa.me/+905528179398?text=Merhaba%2C%20Bayanlar%20i%C3%A7in%20Koltukalt%C4%B1%2C%20T%C3%BCm%20Bacak%20ve%20Genital%20B%C3%B6lge%20Lazer%20Epilasyon%20(1200%E2%82%BA)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
                <KampComp
                    kampanyaResim={k3}
                    kampanyaAd="https://wa.me/+905528179398?text=Merhaba%2C%20Tepeden%20T%C4%B1rna%C4%9Fa%20T%C3%BCm%20V%C3%BCcut%20Lazer%20Epilasyon%20(2800%E2%82%BA)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k4}
                    kampanyaAd="https://wa.me/+905528179398?text=Merhaba%2C%20Bayanlar%20i%C3%A7in%20Y%C3%BCz%20B%C3%B6lgesi%20Lazer%20Epilasyon%20(650%E2%82%BA)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k5}
                    kampanyaAd="https://wa.me/+905528179398?text=Merhaba%2C%20Erkekler%20i%C3%A7in%20Ense%2C%20Boyun%20ve%20Yanak%20Lazer%20Epilasyon%20(650%E2%82%BA)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k6}
                    kampanyaAd="https://wa.me/+905528179398?text=Merhaba%2C%20Komple%20Kemer%C3%BCst%C3%BC%20Lazer%20Epilasyon%20(1700%E2%82%BA)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />

                <KampComp
                    kampanyaResim={k7}
                    kampanyaAd="https://wa.me/+905528179398?text=Merhaba%2C%20Erkekler%20i%C3%A7in%20Tepeden%20T%C4%B1rna%C4%9Fa%20T%C3%BCm%20V%C3%BCcut%20Lazer%20Epilasyon%20(4000%E2%82%BA)%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20alabilir%20miyim%3F"
                />
            </OwlCarousel>
        </div>    
    )
}

