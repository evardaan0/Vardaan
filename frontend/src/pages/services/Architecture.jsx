import React from "react";

export default function Architecture() {
  const services = [
    {
      title: "Residential Projects",
      img: "/assets/img/project1.jpg",
      desc: "We design and construct high-quality residential buildings that combine modern design, durability, and comfort. Each home is carefully planned to ensure optimal space utilization, natural lighting, and ventilation, making it energy-efficient and sustainable. From luxury villas to family apartments, our focus is on creating personalized, safe, and welcoming environments that families can enjoy for generations."
    },
    {
      title: "Commercial Buildings",
      img: "/assets/img/project2.jpg",
      desc: "We deliver commercial spaces that adhere to international standards while prioritizing functionality, aesthetics, and long-term usability. From office complexes to shopping centers, each project incorporates modern amenities, ergonomic layouts, and sustainable building materials. Our designs not only enhance business operations but also create visually appealing spaces that leave a lasting impression on clients and visitors."
    },
    {
      title: "Infrastructure Development",
      img: "/assets/img/project3.jpg",
      desc: "We specialize in large-scale infrastructure projects including roads, bridges, and civic utilities, using cutting-edge engineering and sustainable practices. Every project is designed for safety, resilience, and long-term performance. Our team ensures seamless integration with urban planning, traffic optimization, and environmental considerations to create infrastructure that supports communities and economic growth efficiently."
    },
    {
      title: "Interior & Renovation",
      img: "/assets/img/project4.jpg",
      desc: "Our interior and renovation services transform spaces into modern, functional, and aesthetically pleasing environments. From smart layouts and innovative storage solutions to premium finishes and furniture selection, we enhance both comfort and style. Whether updating a home, office, or commercial space, our team ensures that every renovation aligns with the client's vision and maximizes the value of the property."
    },
    {
      title: "Land Development",
      img: "/assets/img/project5.jpg",
      desc: "We provide comprehensive land development solutions, from residential plots to industrial sites. Each project includes meticulous planning, proper utility integration, sustainable landscaping, and future-ready layouts. We focus on creating organized, efficient, and environmentally conscious spaces that enhance the community and maximize the potential of every land parcel."
    },
    {
      title: "MEP & Safety Solutions",
      img: "/assets/img/project6.jpg",
      desc: "We offer end-to-end Mechanical, Electrical, and Plumbing (MEP) services combined with advanced safety systems to ensure technical excellence and building security. Our solutions include HVAC, electrical networks, water systems, fire safety, and energy-efficient installations. We ensure every project meets regulatory standards and provides safe, reliable, and efficient environments for all occupants."
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-3" style={{ color: "#FFC107" }}>
        Our Construction Services
      </h1>
      <h3
        className="text-center mb-4 text-muted"
        style={{ lineHeight: "1.6", fontSize: "1rem" }}
      >
        At Vardaan Enterprise, we deliver residential, commercial, and
        infrastructure projects with precision, creativity, and sustainability.
        Every project is executed using modern technology, eco-friendly
        materials, and expert craftsmanship to ensure durability, aesthetic
        appeal, and functional excellence. Our goal is to create spaces that not
        only meet client expectations but also enrich communities, enhance
        lifestyles, and leave a lasting legacy of quality construction.
      </h3>

      <div className="row g-4">
        {services.map((service, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <div className="service-card shadow-sm rounded overflow-hidden h-100">
              <div className="image-wrapper position-relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="img-fluid"
                />
                {/* Hover Title */}
                <div className="hover-title d-flex justify-content-center align-items-center">
                  <h5 className="text-white fw-bold">{service.title}</h5>
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
          height: 250px;
          overflow: hidden;
          position: relative;
        }
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s;
          border-radius: 10px;
        }
        .service-card:hover .image-wrapper img {
          transform: scale(1.1);
        }

        /* Hover title style */
        .hover-title {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
          background: rgba(0,0,0,0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .image-wrapper:hover .hover-title {
          opacity: 1;
        }
        .hover-title h5 {
          margin: 0;
        }

        @media(max-width: 768px){
          .image-wrapper { height: 200px; }
        }
      `}</style>
    </div>
  );
}
