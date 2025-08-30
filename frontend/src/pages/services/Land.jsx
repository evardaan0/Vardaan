import React from "react";

export default function Land() {
  const projects = [
    {
      title: "Urban Land Development",
      img: "/assets/img/project10.jpg",
      desc: "We plan and develop urban land with modern infrastructure, well-laid roads, utilities, and green spaces. Every layout is designed to optimize space, enhance livability, and create sustainable, vibrant communities that stand the test of time."
    },
    {
      title: "Residential Land Projects",
      img: "/assets/img/project1.jpg",
      desc: "Our residential land projects focus on safety, sustainability, and functional layouts. We integrate utilities, green areas, and modern amenities to ensure homes are part of well-planned, thriving neighborhoods that promote a high quality of life."
    },
    {
      title: "Industrial Land Planning",
      img: "/assets/img/project2.jpg",
      desc: "We design industrial land areas with strategic planning for transportation, utilities, and operational efficiency. Our solutions provide scalable, sustainable spaces for industries while maintaining safety and environmental responsibility."
    },
    {
      title: "Eco Landscaping",
      img: "/assets/img/projects/construction-3.jpg",
      desc: "Our eco-landscaping designs enhance outdoor environments with sustainable practices, native planting, water management, and aesthetic layouts. These green spaces improve air quality, community well-being, and property value."
    },
    {
      title: "Hardscaping Solutions",
      img: "/assets/img/projects/construction-2.jpg",
      desc: "We create durable paths, patios, retaining walls, and outdoor structures using premium materials. Our hardscaping solutions are designed to blend functionality with elegance, providing long-lasting and visually appealing landscapes."
    },
    {
      title: "Irrigation Systems",
      img: "/assets/img/projects/construction-1.jpg",
      desc: "Our water-efficient irrigation systems are engineered to maintain healthy landscapes while conserving resources. From automated sprinklers to smart water management, we ensure optimal hydration for gardens and green spaces year-round."
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-3" style={{ color: "#FFC107" }}>
        Land Development & Landscaping
      </h1>
      <h3
        className="text-center mb-4 text-muted"
        style={{ lineHeight: "1.6", fontSize: "1rem" }}
      >
        At Vardaan Enterprise, we provide comprehensive land development and
        landscaping solutions that combine modern planning, sustainability, and
        aesthetic excellence. From urban and residential plots to industrial land
        planning, each project is meticulously designed to optimize space,
        infrastructure, and natural surroundings. Our eco-friendly landscaping,
        hardscaping, and efficient irrigation systems ensure functional, beautiful,
        and sustainable outdoor spaces. We aim to create vibrant, well-planned
        environments that enhance communities, promote green living, and add
        long-term value to every property.
      </h3>

      <div className="row g-4">
        {projects.map((p, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <div className="service-card shadow-sm rounded overflow-hidden h-100 position-relative">
              {/* Image with overlay */}
              <div className="image-wrapper position-relative">
                <img src={p.img} alt={p.title} className="img-fluid" />
                <div className="overlay d-flex align-items-center justify-content-center text-center">
                  <h4 className="fw-bold text-white">{p.title}</h4>
                </div>
              </div>

              {/* Description always visible */}
              <div className="card-content p-3">
                <p className="text-muted">{p.desc}</p>
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
          transition: transform 0.4s, box-shadow 0.4s;
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
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

        /* Overlay style */
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
