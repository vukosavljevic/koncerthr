import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventCard = ({ title, date, location, image }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-image" />
      <div className="event-details">
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

const Events = () => {
  const events = [
    {
      title: 'Plavi orkestar',
      date: '21.12.2024, 21:00',
      location: 'Osijek, Gradski vrt',
      image: 'https://s3-alpha-sig.figma.com/img/de87/103b/d641d4eddbe1a1882cfc670342b313ab?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Svk8FGySgP~p6VHbPZNrCeUm5xI3zm2P5oXcrP6f0x6ufo7IZtmsgrDtLnDQZohi01yCX--vxpT6jpPLooEDffOTHKiKKw6J1QYeUSXBUl0g9uFKpDDmJ-MJasods0Ir47XUudfDczyAbo1zaQDPO38MGdQhmkI6eFFdJ6TkA4eEPRUkxDjiFezKueVGeo~ztxi8snCnNMnGnZVm2t93-z3UBD88a~BVth6KIRwcVbr5fkIpcgdN1QKHrPRDUwQkHEkc1cSyxMSjlrDk26MZ8IGLNBnsWJgV8awlfgnfQVAhZumIRhQ2lAb3c1036xEAX~iRT1HgAXNyUtkvywKFXg__',
    },
    {
      title: 'Nina Badrić',
      date: '13.02.2025., 20:00',
      location: 'Dvorana Zamet, Rijeka',
      image: 'https://s3-alpha-sig.figma.com/img/de87/103b/d641d4eddbe1a1882cfc670342b313ab?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Svk8FGySgP~p6VHbPZNrCeUm5xI3zm2P5oXcrP6f0x6ufo7IZtmsgrDtLnDQZohi01yCX--vxpT6jpPLooEDffOTHKiKKw6J1QYeUSXBUl0g9uFKpDDmJ-MJasods0Ir47XUudfDczyAbo1zaQDPO38MGdQhmkI6eFFdJ6TkA4eEPRUkxDjiFezKueVGeo~ztxi8snCnNMnGnZVm2t93-z3UBD88a~BVth6KIRwcVbr5fkIpcgdN1QKHrPRDUwQkHEkc1cSyxMSjlrDk26MZ8IGLNBnsWJgV8awlfgnfQVAhZumIRhQ2lAb3c1036xEAX~iRT1HgAXNyUtkvywKFXg__',
    },
    {
      title: 'Doček Nove Godine Tanja Savić',
      date: '31.12.2024, 22:00',
      location: 'Gastro Globus, Zagreb',
      image: 'https://s3-alpha-sig.figma.com/img/de87/103b/d641d4eddbe1a1882cfc670342b313ab?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Svk8FGySgP~p6VHbPZNrCeUm5xI3zm2P5oXcrP6f0x6ufo7IZtmsgrDtLnDQZohi01yCX--vxpT6jpPLooEDffOTHKiKKw6J1QYeUSXBUl0g9uFKpDDmJ-MJasods0Ir47XUudfDczyAbo1zaQDPO38MGdQhmkI6eFFdJ6TkA4eEPRUkxDjiFezKueVGeo~ztxi8snCnNMnGnZVm2t93-z3UBD88a~BVth6KIRwcVbr5fkIpcgdN1QKHrPRDUwQkHEkc1cSyxMSjlrDk26MZ8IGLNBnsWJgV8awlfgnfQVAhZumIRhQ2lAb3c1036xEAX~iRT1HgAXNyUtkvywKFXg__',
    },
    {
      title: 'Valentinovo uz Crvenu Jabuku',
      date: '14.02.2025., 20:00',
      location: 'Dvorana Gradski Vrt, Osijek',
      image: 'https://s3-alpha-sig.figma.com/img/de87/103b/d641d4eddbe1a1882cfc670342b313ab?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Svk8FGySgP~p6VHbPZNrCeUm5xI3zm2P5oXcrP6f0x6ufo7IZtmsgrDtLnDQZohi01yCX--vxpT6jpPLooEDffOTHKiKKw6J1QYeUSXBUl0g9uFKpDDmJ-MJasods0Ir47XUudfDczyAbo1zaQDPO38MGdQhmkI6eFFdJ6TkA4eEPRUkxDjiFezKueVGeo~ztxi8snCnNMnGnZVm2t93-z3UBD88a~BVth6KIRwcVbr5fkIpcgdN1QKHrPRDUwQkHEkc1cSyxMSjlrDk26MZ8IGLNBnsWJgV8awlfgnfQVAhZumIRhQ2lAb3c1036xEAX~iRT1HgAXNyUtkvywKFXg__',
    },
    {
      title: 'Valentinovo uz Crvenu Jabuku',
      date: '14.02.2025 ., 20:00',
      location: 'Dvorana Gradski Vrt, Osijek',
      image: 'https://s3-alpha-sig.figma.com/img/de87/103b/d641d4eddbe1a1882cfc670342b313ab?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Svk8FGySgP~p6VHbPZNrCeUm5xI3zm2P5oXcrP6f0x6ufo7IZtmsgrDtLnDQZohi01yCX--vxpT6jpPLooEDffOTHKiKKw6J1QYeUSXBUl0g9uFKpDDmJ-MJasods0Ir47XUudfDczyAbo1zaQDPO38MGdQhmkI6eFFdJ6TkA4eEPRUkxDjiFezKueVGeo~ztxi8snCnNMnGnZVm2t93-z3UBD88a~BVth6KIRwcVbr5fkIpcgdN1QKHrPRDUwQkHEkc1cSyxMSjlrDk26MZ8IGLNBnsWJgV8awlfgnfQVAhZumIRhQ2lAb3c1036xEAX~iRT1HgAXNyUtkvywKFXg__',
    },
    {
      title: 'Valentinovo uz Crvenu Jabuku',
      date: '14.02.2025., 20:00',
      location: 'Dvorana Gradski Vrt, Osijek',
      image: 'https://s3-alpha-sig.figma.com/img/de87/103b/d641d4eddbe1a1882cfc670342b313ab?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Svk8FGySgP~p6VHbPZNrCeUm5xI3zm2P5oXcrP6f0x6ufo7IZtmsgrDtLnDQZohi01yCX--vxpT6jpPLooEDffOTHKiKKw6J1QYeUSXBUl0g9uFKpDDmJ-MJasods0Ir47XUudfDczyAbo1zaQDPO38MGdQhmkI6eFFdJ6TkA4eEPRUkxDjiFezKueVGeo~ztxi8snCnNMnGnZVm2t93-z3UBD88a~BVth6KIRwcVbr5fkIpcgdN1QKHrPRDUwQkHEkc1cSyxMSjlrDk26MZ8IGLNBnsWJgV8awlfgnfQVAhZumIRhQ2lAb3c1036xEAX~iRT1HgAXNyUtkvywKFXg__',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  return (
    <div className="events-container">
           <div className="section-title">
                <h2>0/2</h2>
                <h1>Nadolazeći eventi</h1>
                <p>Rezervirajte svoje mjesto danas</p>
            </div>
      <Slider {...settings} className="carousel-settings">
        {events.map((event) => (
          <EventCard key={event.title} title={event.title} date={event.date} location={event.location} image={event.image} />
        ))}
      </Slider>
    </div>
  );
};

export default Events;