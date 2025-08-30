import React, { useState } from "react";

export default function Interior() {
  const services = [
    {
      title: "Residential Interiors",
      img: "/assets/img/xyz1.jpeg",
      desc: "We design elegant and personalized home interiors that reflect your lifestyle and taste. Every space, from cozy living rooms to luxurious bedrooms and functional kitchens, is thoughtfully crafted to maximize comfort, aesthetics, and practicality. Our approach ensures homes that are not only visually stunning but also intuitive for daily living, promoting harmony and well-being for residents."
    },
    {
      title: "Commercial Interiors",
      img: "/assets/img/xyz2.jpeg",
      desc: "Our commercial interior solutions create modern and professional environments for offices, retail outlets, and showrooms. We focus on balancing aesthetics, functionality, and brand identity, ensuring spaces that boost productivity, inspire creativity, and leave a lasting impression on clients and employees alike."
    },
    {
      title: "Fit-Out & Furnishing",
      img: "/assets/img/xyz3.jpeg",
      desc: "We provide complete fit-out solutions, including premium furniture, lighting, flooring, and decorative elements. Each project is delivered turnkey, ensuring spaces are ready to use immediately. Attention to detail, quality craftsmanship, and innovative design are at the core of every fit-out, creating seamless and functional environments."
    },
    {
      title: "Luxury Interior Design",
      img: "/assets/img/xyz8.jpeg",
      desc: "For clients seeking sophistication, we craft luxury interiors with high-end materials, bespoke furnishings, and timeless designs. Every element is carefully curated to elevate spaces, combining elegance, comfort, and exclusivity to create interiors that impress and inspire."
    },
    {
      title: "Space Planning & Optimization",
      img: "/assets/img/xyz11.jpeg",
      desc: "Our experts ensure optimal utilization of every square foot, whether for apartments, offices, or large commercial spaces. Thoughtful layouts enhance efficiency, functionality, and aesthetics, creating environments that are practical, comfortable, and visually appealing."
    },
    {
      title: "Renovation & Remodeling",
      img: "/assets/img/xyz6.jpeg",
      desc: "We transform outdated interiors into modern, vibrant, and functional spaces. Our renovation services incorporate innovative design, sustainable materials, and smart solutions to breathe new life into homes, offices, and commercial properties, elevating both style and usability."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="container py-5">
      {/* Section Title */}
      <h1 className="text-center mb-3" style={{ color: "#FFC107" }}>
        Interior Design & Fit-Out
      </h1>
      <h3
        className="text-center mb-4 text-muted"
        style={{ lineHeight: "1.6", fontSize: "1rem" }}
      >
        At Vardaan Enterprise, we create interiors that perfectly blend style,
        functionality, and innovation. Our designs transform homes, offices,
        and luxury spaces into environments that inspire comfort, creativity,
        and productivity. From space planning and optimal layout design to
        high-end finishes and bespoke furnishings, we craft interiors that
        reflect your personality, elevate aesthetics, and enhance everyday
        experiences. Every project is thoughtfully executed with attention to
        detail, modern trends, and sustainable practices, ensuring spaces that
        are not only visually stunning but also practical and timeless.
      </h3>

      {/* Cards Section */}
      <div className="row g-4">
        {services.map((service, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <div className="service-card shadow-sm rounded overflow-hidden h-100">
              <div
                className="image-wrapper"
                onClick={() =>
                  setActiveIndex(activeIndex === idx ? null : idx)
                }
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="img-fluid"
                />
                {/* Overlay */}
                <div
                  className={`overlay ${
                    activeIndex === idx ? "active" : ""
                  }`}
                >
                  <h5>{service.title}</h5>
                </div>
              </div>
              <div className="card-content p-3">
                <h4 className="fw-bold" style={{ color: "#FFC107" }}>
                  {service.title}
                </h4>
                <p className="text-muted">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Styling */}
      <style>{`
        .service-card {
          transition: transform 0.4s, box-shadow 0.4s;
          background: #fff;
          border-radius: 15px;
          cursor: pointer;
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }
        .image-wrapper {
          height: 250px;
          overflow: hidden;
          position: relative;
        }
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s;
        }
        .service-card:hover .image-wrapper img {
          transform: scale(1.1);
        }
        .overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s;
          color: #fff;
          font-size: 1.2rem;
          font-weight: bold;
        }
        .image-wrapper:hover .overlay,
        .overlay.active {
          opacity: 1;
        }
        @media(max-width: 768px){
          .image-wrapper { height: 200px; }
        }
      `}</style>
    </div>
  );
}
