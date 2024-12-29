import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const Events = () => {
  const slides = [
    {
      title: 'Plavi Orkestar',
      date: '21.12.2024',
      time: '21:00',
      location: 'Osijek, Gradski vrt',
      image: 'https://s3-alpha-sig.figma.com/img/9ddb/e50c/27ac5252f9bca7797a204bfab233b804?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxf5CVQXqZbCf2gapFkTVtTXe743GmTtJv~L4KNjUAjLi3VK85j0LarWQogwsbJV5Hzp5e04Ced0GfqjCeaI1EY4y7QU6OJEohz8hpeM9rTRB9XJC8MIvT8kEQn1s6lMoxJAnODsD8ETSCvSe9iGyLUeIp8OrArfGpcXCXZlVx1Jjt6-soF8jv08Or8a3dgvgc9NIlHyR9kgLMvTjSzA9LsUkvkvmeG8yluQ0DsOcQ8VYE-pNf4Ong8CKLZo8S9F8P-KFqMli3JkLmvVEXyJzXj-hL4CEihn7EjjfzPjzbRumJEYU4g9StjI9w8PSs83W2V63c5wNj7EqpVny~Edag__',
    },
    {
      title: 'Nina Badrić',
      date: '13.02.2025',
      time: '20:00',
      location: 'Dvorana Zamet, Rijeka',
      image: 'https://s3-alpha-sig.figma.com/img/9ddb/e50c/27ac5252f9bca7797a204bfab233b804?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxf5CVQXqZbCf2gapFkTVtTXe743GmTtJv~L4KNjUAjLi3VK85j0LarWQogwsbJV5Hzp5e04Ced0GfqjCeaI1EY4y7QU6OJEohz8hpeM9rTRB9XJC8MIvT8kEQn1s6lMoxJAnODsD8ETSCvSe9iGyLUeIp8OrArfGpcXCXZlVx1Jjt6-soF8jv08Or8a3dgvgc9NIlHyR9kgLMvTjSzA9LsUkvkvmeG8yluQ0DsOcQ8VYE-pNf4Ong8CKLZo8S9F8P-KFqMli3JkLmvVEXyJzXj-hL4CEihn7EjjfzPjzbRumJEYU4g9StjI9w8PSs83W2V63c5wNj7EqpVny~Edag__',
    },
    {
      title: 'Doček Nove Godine Tanja Savić',
      date: '31.12.2024',
      time: '22:00',
      location: 'Gastro Globus, Zagreb',
      image: 'https://s3-alpha-sig.figma.com/img/9ddb/e50c/27ac5252f9bca7797a204bfab233b804?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxf5CVQXqZbCf2gapFkTVtTXe743GmTtJv~L4KNjUAjLi3VK85j0LarWQogwsbJV5Hzp5e04Ced0GfqjCeaI1EY4y7QU6OJEohz8hpeM9rTRB9XJC8MIvT8kEQn1s6lMoxJAnODsD8ETSCvSe9iGyLUeIp8OrArfGpcXCXZlVx1Jjt6-soF8jv08Or8a3dgvgc9NIlHyR9kgLMvTjSzA9LsUkvkvmeG8yluQ0DsOcQ8VYE-pNf4Ong8CKLZo8S9F8P-KFqMli3JkLmvVEXyJzXj-hL4CEihn7EjjfzPjzbRumJEYU4g9StjI9w8PSs83W2V63c5wNj7EqpVny~Edag__',
    },
    {
      title: 'Valentinovo uz Crvenu',
      date: '14.02.2025',
      time: '20:00',
      location: 'Dvorana Gradski Vrt, Osijek',
      image: 'https://s3-alpha-sig.figma.com/img/9ddb/e50c/27ac5252f9bca7797a204bfab233b804?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxf5CVQXqZbCf2gapFkTVtTXe743GmTtJv~L4KNjUAjLi3VK85j0LarWQogwsbJV5Hzp5e04Ced0GfqjCeaI1EY4y7QU6OJEohz8hpeM9rTRB9XJC8MIvT8kEQn1s6lMoxJAnODsD8ETSCvSe9iGyLUeIp8OrArfGpcXCXZlVx1Jjt6-soF8jv08Or8a3dgvgc9NIlHyR9kgLMvTjSzA9LsUkvkvmeG8yluQ0DsOcQ8VYE-pNf4Ong8CKLZo8S9F8P-KFqMli3JkLmvVEXyJzXj-hL4CEihn7EjjfzPjzbRumJEYU4g9StjI9w8PSs83W2V63c5wNj7EqpVny~Edag__',
    },
    {
      title: 'Valentinovo uz Crvenu',
      date: '14.02.2025',
      time: '20:00',
      location: 'Dvorana Gradski Vrt, Osijek',
      image: 'https://s3-alpha-sig.figma.com/img/9ddb/e50c/27ac5252f9bca7797a204bfab233b804?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxf5CVQXqZbCf2gapFkTVtTXe743GmTtJv~L4KNjUAjLi3VK85j0LarWQogwsbJV5Hzp5e04Ced0GfqjCeaI1EY4y7QU6OJEohz8hpeM9rTRB9XJC8MIvT8kEQn1s6lMoxJAnODsD8ETSCvSe9iGyLUeIp8OrArfGpcXCXZlVx1Jjt6-soF8jv08Or8a3dgvgc9NIlHyR9kgLMvTjSzA9LsUkvkvmeG8yluQ0DsOcQ8VYE-pNf4Ong8CKLZo8S9F8P-KFqMli3JkLmvVEXyJzXj-hL4CEihn7EjjfzPjzbRumJEYU4g9StjI9w8PSs83W2V63c5wNj7EqpVny~Edag__',
    },
    {
      title: 'Valentinovo uz Crvenu',
      date: '14.02.2025',
      time: '20:00',
      location: 'Dvorana Gradski Vrt, Osijek',
      image: 'https://s3-alpha-sig.figma.com/img/9ddb/e50c/27ac5252f9bca7797a204bfab233b804?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hxf5CVQXqZbCf2gapFkTVtTXe743GmTtJv~L4KNjUAjLi3VK85j0LarWQogwsbJV5Hzp5e04Ced0GfqjCeaI1EY4y7QU6OJEohz8hpeM9rTRB9XJC8MIvT8kEQn1s6lMoxJAnODsD8ETSCvSe9iGyLUeIp8OrArfGpcXCXZlVx1Jjt6-soF8jv08Or8a3dgvgc9NIlHyR9kgLMvTjSzA9LsUkvkvmeG8yluQ0DsOcQ8VYE-pNf4Ong8CKLZo8S9F8P-KFqMli3JkLmvVEXyJzXj-hL4CEihn7EjjfzPjzbRumJEYU4g9StjI9w8PSs83W2V63c5wNj7EqpVny~Edag__',
    },
  ];

  return (
    <div className="events-container">
      <div className="section-title event-title">
        <h2>0/2</h2>
        <h1>Nadolazeći eventi</h1>
        <p>Rezervirajte svoje mjesto danas</p>
      </div>
      <Swiper
  spaceBetween={15} // Adjust spacing between slides
  slidesPerView={4} // Default number of visible slides
  loop={true}
  scrollbar={{ draggable: true }}
  breakpoints={{
    320: { slidesPerView: 2, spaceBetween: 100 }, // Small screens

    480: { slidesPerView: 2, spaceBetween: 100 }, // Small screens
    768: { slidesPerView: 2, spaceBetween: 15 }, // Tablets
    1024: { slidesPerView: 3, spaceBetween: 20 }, // Larger tablets or small desktops
    1280: { slidesPerView: 4, spaceBetween: 20 }, // Full desktop
  }}
>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="event-card">
              <img src={slide.image} alt={slide.title} className="event-image" />
              <h2>{slide.title}</h2>
              <p>{slide.date} | {slide.time}</p>
              <p>{slide.location}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Events;
