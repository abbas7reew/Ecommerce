import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { useLanguage } from "../context/LanguageContext";

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState([]);
  const { lang } = useLanguage();

  useEffect(() => {
    axios.get("http://localhost:4000/testimonials")
      .then(res => setTestimonials(res.data))
      .catch(err => console.error("Failed to load testimonials:", err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <section className="container mx-auto px-4 py-12 animate-fadeUp">
      <h2 className="text-3xl font-semibold mb-6 text-center animate-fadeScale">
        {lang === "en" ? "Customer Reviews" : "آراء العملاء"}
      </h2>
      <Slider {...settings}>
        {testimonials.map(client => (
          <div key={client.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center mx-2 transform transition hover:-translate-y-2 hover:shadow-lg animate-fadeUp">
            <img src={client.image} alt={client.name} className="w-20 h-20 rounded-full object-cover mb-4 mx-auto animate-fadeScale" />
            <p className="text-gray-700 dark:text-gray-300 mb-2">"{client.message}"</p>
            <strong>- {client.name}</strong>
          </div>
        ))}
      </Slider>
    </section>
  );
}









