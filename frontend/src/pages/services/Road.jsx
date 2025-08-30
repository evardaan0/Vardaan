import React from "react";

export default function Road() {
  const projects = [
    { 
      title: "Highway Development", 
      img: "/assets/img/road1.jpg", 
      desc: "We construct strong and safe highways using modern engineering techniques. Every highway is designed to handle high traffic, ensure smooth travel, and meet stringent safety standards for long-lasting durability." 
    },
    { 
      title: "Urban Roads", 
      img: "/assets/img/road2.jpg", 
      desc: "Our urban roads provide smooth connectivity within cities. We use durable materials, smart traffic design, and sustainable construction methods to reduce maintenance costs and improve city mobility." 
    },
    { 
      title: "Rural Roads", 
      img: "/assets/img/road3.jpg", 
      desc: "Reliable rural road infrastructure connecting villages and towns. We focus on accessibility, safety, and sustainable construction to support local communities and economic growth." 
    },
    { 
      title: "Expressways", 
      img: "/assets/img/constructions-3.jpg", 
      desc: "Fast-track expressways designed for long-term strength and minimal congestion. Our planning includes advanced engineering solutions to ensure efficiency, safety, and environmental compliance." 
    },
    { 
      title: "Building Construction", 
      img: "/assets/img/features-1.jpg", 
      desc: "Strong and secure bridges and overpasses that improve connectivity. Each structure is built using high-quality materials, modern construction methods, and strict safety standards." 
    },
    { 
      title: "Smart Road Tech", 
      img: "/assets/img/road4.jpg", 
      desc: "Integrated smart technology for modern road systems including intelligent lighting, traffic monitoring, and sensor-based maintenance solutions to enhance safety, efficiency, and durability." 
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-3" style={{ color: "#FFC107" }}>
        Road Construction Services
      </h1>
      <h3 className="text-center mb-4 text-muted" style={{ lineHeight: "1.6", fontSize: "1rem" }}>
        At Vardaan Enterprise, we design and construct modern road infrastructure that ensures safety, durability, and efficiency. 
        Our projects range from highways and urban roads to rural pathways, expressways, and smart road systems. 
        Each road is meticulously planned using advanced engineering, high-quality materials, and innovative technology to deliver long-term strength and seamless connectivity. 
        We focus on sustainable construction practices that support mobility, economic growth, and community development. 
        Every road we build is designed to meet present-day demands while creating a future-ready transport network for safe, smooth, and efficient travel.
      </h3>

      <div className="row g-4">
        {projects.map((p, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <div className="service-card shadow-sm rounded overflow-hidden h-100">
              <div className="image-wrapper position-relative">
                <img src={p.img} alt={p.title} className="img-fluid" />
                <div className="overlay d-flex justify-content-center align-items-center">
                  <h4 className="fw-bold text-white">{p.title}</h4>
                </div>
              </div>
              <div className="card-content p-3">
                <p className="text-muted">{p.desc}</p>
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
          overflow: hidden;
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
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .service-card:hover .overlay {
          opacity: 1;
        }

        @media(max-width: 768px){
          .image-wrapper { height: 200px; }
        }
      `}</style>
    </div>
  );
}
