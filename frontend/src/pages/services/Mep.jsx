import React from "react";

export default function Mep() {
  const services = [
    {
      title: "Mechanical (HVAC Systems)",
      img: "/assets/img/project13.jpg",
      desc: "Design and installation of advanced HVAC systems ensuring optimal air quality, energy efficiency, and comfortable environments.",
    },
    {
      title: "Electrical Engineering",
      img: "/assets/img/features-2.jpg",
      desc: "Comprehensive electrical services including power distribution, lighting, automation, and cabling with international safety standards.",
    },
    {
      title: "Plumbing & Fire Safety",
      img: "/assets/img/features-3.jpg",
      desc: "Reliable plumbing design, water supply networks, drainage systems, and fire protection systems ensuring long-term safety and durability.",
    },
    {
      title: "Low Voltage & Security Systems",
      img: "/assets/img/project6.jpg",
      desc: "Installation of CCTV, access control, structured cabling, and communication systems to ensure security and connectivity.",
    },
    {
      title: "Energy Efficiency Solutions",
      img: "/assets/img/project11.jpg",
      desc: "Sustainable energy design with solar integration, energy management, and eco-friendly MEP solutions to reduce carbon footprint.",
    },
    {
      title: "Operation & Maintenance",
      img: "/assets/img/project8.jpg",
      desc: "End-to-end maintenance services for HVAC, electrical, plumbing, and safety systems to ensure smooth functioning of facilities.",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-3" style={{ color: "#FFC107" }}>
        MEP (Mechanical, Electrical, Plumbing) Services
      </h1>

      <div className="row g-4">
        {services.map((service, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <div className="service-card shadow-sm rounded overflow-hidden h-100 position-relative">
              {/* Image with overlay title */}
              <div className="image-wrapper position-relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="img-fluid"
                />
                <div className="overlay d-flex align-items-center justify-content-center text-center">
                  <h4 className="fw-bold text-white">{service.title}</h4>
                </div>
              </div>

              {/* Description always visible */}
              <div className="card-content p-3">
                <p className="text-muted">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .service-card {
          background: #fff;
          border-radius: 15px;
          overflow: hidden;
        }
        .image-wrapper {
          height: 250px;
          overflow: hidden;
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

        /* Overlay effect */
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .image-wrapper:hover .overlay {
          opacity: 1;
        }

        @media(max-width: 768px){
          .image-wrapper { height: 200px; }
        }
      `}</style>
    </div>
  );
}
