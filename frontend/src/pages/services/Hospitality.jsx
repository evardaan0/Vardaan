import React from "react";

export default function Hospitality() {
  const services = [
    {
      title: "Luxury Hotels",
      img: "/assets/img/project1.jpg",
      desc: "We design and construct luxury hotels with premium architecture, cutting-edge facilities, and world-class hospitality standards. Each hotel is meticulously planned to offer guests ultimate comfort, seamless functionality, and unforgettable experiences."
    },
    {
      title: "Resorts & Villas",
      img: "/assets/img/project2.jpg",
      desc: "Our resorts and villas harmoniously blend natural beauty with luxury living. Every design emphasizes sustainability, scenic integration, and personalized features to ensure guests enjoy comfort and exclusivity."
    },
    {
      title: "Restaurants & Cafes",
      img: "/assets/img/projects/construction-2.jpg",
      desc: "We construct high-quality dining spaces ranging from fine-dining restaurants to casual cafes and food courts. Every space is crafted to enhance the dining experience and reflect the brand’s identity."
    },
    {
      title: "Convention & Banquet Halls",
      img: "/assets/img/project4.jpg",
      desc: "From corporate conferences to wedding banquets, we deliver modern, spacious halls equipped with advanced acoustics, professional lighting, and ergonomic seating arrangements."
    },
    {
      title: "Wellness & Spa Centers",
      img: "/assets/img/project10.jpg",
      desc: "Our wellness centers and spa facilities offer serene, luxurious environments that promote relaxation and well-being, using eco-friendly materials and advanced amenities."
    },
    {
      title: "Hospitality Renovation",
      img: "/assets/img/project8.jpg",
      desc: "We provide renovation services for hotels, resorts, and restaurants, transforming outdated spaces into modern, attractive, and highly efficient hospitality facilities."
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-3" style={{ color: "#FFC107" }}>
        Commercial Building Construction
      </h1>
      <h3 className="text-center mb-4 text-muted" style={{ lineHeight: "1.6", fontSize: "1rem" }}>
        At Vardaan Enterprise, we specialize in designing and constructing world-class hotels, resorts, villas, and hospitality spaces that combine modern architecture, luxurious comfort, and seamless functionality.
      </h3>

      <div className="row g-4">
        {services.map((service, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <div className="service-card shadow-sm rounded overflow-hidden h-100">
              <div className="image-wrapper">
                <img src={service.img} alt={service.title} className="img-fluid" />
                <div className="hover-title">{service.title}</div>
              </div>
              <div className="card-content p-3">
                <h4 className="fw-bold" style={{ color: "#FFC107" }}>{service.title}</h4>
                <p className="text-muted">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .service-card {
          transition: transform 0.4s, box-shadow 0.4s;
          background: #fff;
          border-radius: 15px;
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }
        .image-wrapper {
          position: relative;
          height: 250px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
        }
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s, filter 0.4s;
        }
        .service-card:hover .image-wrapper img {
          transform: scale(1.05);
          filter: brightness(0.75);
        }
        .hover-title {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.6);
          color: #FFC107;
          font-weight: bold;
          text-align: center;
          padding: 10px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .image-wrapper:hover .hover-title {
          opacity: 1;
        }
        @media(max-width: 992px) {
          .image-wrapper { height: 220px; }
        }
        @media(max-width: 576px) {
          .image-wrapper { height: 180px; }
        }
      `}</style>
    </div>
  );
}
