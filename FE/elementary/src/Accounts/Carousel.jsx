import React, { useState, useEffect } from "react";
import './acc.scss';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
      title: "Chào mừng bạn",
      caption: "Đăng nhập để khám phá thêm!",
    },
    {
      img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop",
      title: "Học tập dễ dàng",
      caption: "Truy cập tài liệu mọi lúc, mọi nơi.",
    },
    {
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
      title: "Kết nối cộng đồng",
      caption: "Chia sẻ và học hỏi cùng mọi người.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          <div className="slide-caption">
            <h3>{slide.title}</h3>
            <p>{slide.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;