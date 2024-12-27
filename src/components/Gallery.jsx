import React, { useState, useEffect } from "react";
import image from '../images/dummy.png';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://s3-alpha-sig.figma.com/img/dc74/b258/2d50b9fca433aaaf3e06fe6599e61a78?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lTN6Dm8TtnNEJxUh1NRqaPsCmCPkco~iKXhCYP1W-BLybTqE7FTK5uspxShvmmnmGzc2nHTJwqCa0yrkx-Xe4Zp505F~NOEkUQ6OYY-RJLdz7DmNAoSbXHLXmL5o-MnZF2aJMFK3yijdfc3szA37KR9ENqBxssSTd-08qMII6mbBXvKG270MSc7ooj8eJGiAzxpcyb7psuZG~h~s95qA8P8j0Pb-p1OgZX2EG~YHsOp0DBXrYefe54rnZXy1TB1SsiJPA~5nh1lOFYlShS-ZIwOwdiBww~MtcKVKzihrl5eAzgxlJrTI37CE64GoHrJAjtyyHGF4~F6XMaU6~NTsjg__",
    "https://s3-alpha-sig.figma.com/img/3464/224f/018d5a44d821532990d1d9211083a671?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XjVx9k~7WKiRsmR7CDbLkbS8srGzUhP04Mkw~yAgCXntgqN45Tlzkf-wzDkRhb18zh-kOLO1mwc32uur6CO59YbnlYLhtwWiG98SVas2QSmSf7kGFsTlP2LrKBmCrTCKKaLQu6zq8cEeYjmdGXBjOm9NNgEhz6QWO7z717O--zmyWgDPeOh5dT6twV0S~FU-8L3BQYy0Yw-BycS2K2xKxscogo~kFYjxdasXJ11wDrczcxfhB8hIZ9qpCH1Nv5x1Mkdr4PU26SOsidoHmf0X12njA5nFJm5ufIhnHQWaOmF5HogL2b6bTVFPCeNekwIRM80ywQaeYRGBrvynLAMLcQ__",
    "https://s3-alpha-sig.figma.com/img/ed55/0610/f1753e8a9b298637eff46382f5b8cd17?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ModjuA3bkIQujIqPt6zH1s6MNe7sN1fY~sRIGdkdhDxqm8-lrv3HZth9yI37kjbEAPJGseEoW8kBmbDr40Y1Do-1Hzc46YGPmLZyovnF7Cho~NSB7ZRWHXdCdPJz7B5okQK0fzRK9T3IXPyXyIepL2mukMWhy0OL44pEICuGWN2mNzUQe6bfvnH8Jl24XlHKiZgzwCRIjjdneAvAV3pCPqmyIhx6MzS-gUFk6FVFIfCBg75R-a0thVU7~c84UlEWJO33AWzHKxfJrCvXVUWFeZ4qcvAdUSQMY7Pl~fWvef2UJGhVenbK70KhQS7Po5ULcmbYuyHKuQCoVweXCG1tVQ__",
    "https://s3-alpha-sig.figma.com/img/19bc/5f9d/4001d0e614e321c71d39372da8dab2ba?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EqUugX2mSFO5Kt7t7o0sdIKENphz3mCIRxIieTDTDsRlYVKJ9q8Hsi0y91guwsMwyxciGmKAx-xalSzUQSKVMR55U68tsCBm3l80sNrqBUKuO7kVcbs~TQSqO8-RTmnSPoxxp2SOhE1jXE18HOttDB~Xhsqly2lW~64yvmEDWIsEAPddwgQiApH7YwV6zPN5msxaZSJTuYzqDspE6qXK9O~cLUggMHas8fniUAEwv2me2r6YJT2k6D~H~Vdv1zgKxevTRMYjG5unHQ658ABUOGHSBG6s5NPmcf8Ps7DxsOXaNHpJu1q--QtFtPrp2WSvgQu4N2B1~dq-fiz9F5N2RQ__",
    image,
  ];

  
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY); // Capture the vertical scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
    <div className="custom-gallery">
      <div
        className="gallery-item gallery-item-1"
        style={{ transform: `translate(-${scrollOffset * 0.05}px, -${scrollOffset * 0.05}px)` }}
      >
        <img src={images[0]} alt="Gallery 1" />
      </div>
      <div
        className="gallery-item gallery-item-2"
        style={{ transform: `scale(${1 - scrollOffset * 0.0001})` }}
      >
        <img src={images[1]} alt="Gallery 2" />
      </div>
      <div
        className="gallery-item gallery-item-3"
        style={{ transform: `translate(${scrollOffset * 0.05}px, -${scrollOffset * 0.05}px)` }}
      >
        <img src={images[2]} alt="Gallery 3" />
      </div>
      <div
        className="gallery-item gallery-item-4"
        style={{ transform: `translate(-${scrollOffset * 0.05}px, ${scrollOffset * 0.05}px)` }}
      >
        <img src={images[3]} alt="Gallery 4" />
      </div>
      <div
        className="gallery-item gallery-item-5"
        style={{ transform: `translate(${scrollOffset * 0.05}px, ${scrollOffset * 0.05}px)` }}
      >
        <img src={images[4]} alt="Gallery 5" />
      </div>
    </div>
    </section>

  );
};

export default Gallery;

