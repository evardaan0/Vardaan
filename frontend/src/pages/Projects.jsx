// import React, { useState } from "react";

// export default function Project() {
//   const projects = [
//     {
//       id: 1,
//       img: "/assets/img/road1.jpg",
//       title: "Highway Road Development",
//       category: "Road Construction",
//       desc: "Successfully completed 25+ km highway stretch with modern quality standards."
//     },
//     {
//       id: 2,
//       img: "/assets/img/project2.jpg",
//       title: "Commercial Plaza",
//       category: "Commercial",
//       desc: "Designed and constructed a premium commercial complex with world-class facilities."
//     },
//     {
//       id: 3,
//       img: "/assets/img/xyz.jpeg",
//       title: "Smart City MEP Work",
//       category: "MEP",
//       desc: "Executed full-scale Mechanical, Electrical & Plumbing works for smart city projects."
//     },
//     {
//       id: 4,
//       img: "/assets/img/project4.jpg",
//       title: "Land Development Project",
//       category: "Land Development",
//       desc: "Transformed raw land into planned sites with roads, drainage & green landscapes."
//     },
//     {
//       id: 5,
//       img: "/assets/img/project5.jpg",
//       title: "Luxury Interior Work",
//       category: "Interior",
//       desc: "Delivered modern interiors with aesthetic design and functional space planning."
//     },
//     {
//       id: 6,
//       img: "/assets/img/project6.jpg",
//       title: "Corporate Office Building",
//       category: "Commercial",
//       desc: "Constructed multi-storey office building with sustainable architecture."
//     },
//     {
//       id: 7,
//       img: "/assets/img/project7.jpg",
//       title: "Industrial Shed",
//       category: "Industrial",
//       desc: "Designed and built durable industrial shed structures for manufacturing units."
//     },
//     {
//       id: 8,
//       img: "/assets/img/project8.jpg",
//       title: "Hospital Infrastructure",
//       category: "Healthcare",
//       desc: "Developed modern hospital facilities ensuring safety and reliability."
//     },
    
//   ];

//   const [currentIndex, setCurrentIndex] = useState(null);

//   const handleOpen = (index) => setCurrentIndex(index);
//   const handleClose = () => setCurrentIndex(null);
//   const handleNext = () =>
//     setCurrentIndex((prev) => (prev + 1) % projects.length);
//   const handlePrev = () =>
//     setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

//   return (
//     <div>
//       {/* 🔹 Page Header (Banner) */}
//       <section
//         className="hero-section text-white d-flex align-items-center"
//         style={{
//           backgroundImage: "url('/assets/img/bgproject.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "350px",
//         }}
//       >
//         <div className="container text-center">
//           <h1 className="fw-bold">PROJECTS</h1>
//           <p>Home » Projects</p>
//         </div>
//       </section>

//       {/* 🔹 Portfolio Section */}
//       <div className="container py-5">
//         <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
//           <h1 className="display-5 text-uppercase fw-bold mb-3">
//             Our <span className="text-warning">Projects</span>
//           </h1>
//           <p className="text-muted">
//             At <b>Vardaan Enterprise</b>, we take pride in delivering high-quality construction projects across
//             <b> Roads, MEP, Land Development, Commercial Complexes, and Interiors</b>.
//             Every project reflects our <b>commitment, innovation, and trust</b>.
//           </p>
//         </div>

//         {/* Project Grid */}
//         <div className="row g-4">
//           {projects.map((p, index) => (
//             <div key={p.id} className="col-xl-3 col-lg-4 col-md-6">
//               <div
//                 className="card border-0 shadow-sm h-100 project-card position-relative"
//                 style={{ cursor: "pointer", overflow: "hidden" }}
//                 onClick={() => handleOpen(index)}
//               >
//                 <div className="image-wrapper">
//                   <img
//                     className="img-fluid rounded project-img"
//                     src={p.img}
//                     alt={p.title}
//                     style={{
//                       height: "250px",
//                       objectFit: "cover",
//                       transition: "0.3s ease-in-out",
//                       width: "100%",
//                     }}
//                   />
//                   {/* Hover Overlay Title */}
//                   <div className="hover-overlay d-flex align-items-center justify-content-center">
//                     <h5 className="text-white fw-bold">{p.title}</h5>
//                   </div>
//                 </div>

//                 <div className="card-body text-center">
//                   <h5 className="fw-bold">{p.title}</h5>
//                   <p className="text-warning small mb-1">{p.category}</p>
//                   <p className="text-muted small">{p.desc}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 🔹 Modal Lightbox */}
//       {currentIndex !== null && (
//         <div
//           className="modal fade show"
//           style={{
//             display: "block",
//             background: "rgba(0,0,0,0.85)",
//           }}
//         >
//           <div className="modal-dialog modal-dialog-centered modal-lg">
//             <div className="modal-content bg-transparent border-0 text-center">
//               <h4 className="fw-bold text-warning mb-2">{projects[currentIndex].title}</h4>
//               <p className="text-light">{projects[currentIndex].desc}</p>
//               <img
//                 src={projects[currentIndex].img}
//                 className="img-fluid rounded shadow"
//                 alt="Project"
//                 style={{ maxHeight: "600px", objectFit: "cover" }}
//               />

//               <div className="d-flex justify-content-between mt-3">
//                 <button
//                   className="btn btn-warning text-dark fw-bold"
//                   onClick={handlePrev}
//                 >
//                   ⬅ Prev
//                 </button>
//                 <button
//                   className="btn btn-dark border-warning fw-bold"
//                   onClick={handleClose}
//                 >
//                   ✖ Close
//                 </button>
//                 <button
//                   className="btn btn-warning text-dark fw-bold"
//                   onClick={handleNext}
//                 >
//                   Next ➡
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 🔹 Extra CSS for hover effect */}
//       <style>{`
//         .project-card:hover .project-img {
//           transform: scale(1.1);
//         }
//         .modal {
//           backdrop-filter: blur(5px);
//         }
//         .image-wrapper {
//           position: relative;
//         }
//         .hover-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0,0,0,0.5);
//           opacity: 0;
//           transition: opacity 0.3s ease-in-out;
//           text-align: center;
//         }
//         .project-card:hover .hover-overlay {
//           opacity: 1;
//         }
//       `}</style>
//     </div>
//   );
// }
import React, { useState } from "react";

export default function Project() {
  const projects = [
    {
      id: 1,
      img: "/assets/img/road1.jpg",
      title: "Highway Road Development",
      category: "Road Construction",
      desc: "Successfully completed 25+ km highway stretch with modern quality standards."
    },
    {
      id: 2,
      img: "/assets/img/project2.jpg",
      title: "Commercial Plaza",
      category: "Commercial",
      desc: "Designed and constructed a premium commercial complex with world-class facilities."
    },
    {
      id: 3,
      img: "/assets/img/xyz.jpeg",
      title: "Smart City MEP Work",
      category: "MEP",
      desc: "Executed full-scale Mechanical, Electrical & Plumbing works for smart city projects."
    },
    {
      id: 4,
      img: "/assets/img/project4.jpg",
      title: "Land Development Project",
      category: "Land Development",
      desc: "Transformed raw land into planned sites with roads, drainage & green landscapes."
    },
    {
      id: 5,
      img: "/assets/img/project5.jpg",
      title: "Luxury Interior Work",
      category: "Interior",
      desc: "Delivered modern interiors with aesthetic design and functional space planning."
    },
    {
      id: 6,
      img: "/assets/img/project6.jpg",
      title: "Corporate Office Building",
      category: "Commercial",
      desc: "Constructed multi-storey office building with sustainable architecture."
    },
    {
      id: 7,
      img: "/assets/img/project7.jpg",
      title: "Industrial Shed",
      category: "Industrial",
      desc: "Designed and built durable industrial shed structures for manufacturing units."
    },
    {
      id: 8,
      img: "/assets/img/project8.jpg",
      title: "Hospital Infrastructure",
      category: "Healthcare",
      desc: "Developed modern hospital facilities ensuring safety and reliability."
    },
    // 🔹 New Building Design Projects
    {
      id: 9,
      img: "/assets/img/xyz.jpeg",
      title: "Residential Apartment Complex",
      category: "Building Design",
      desc: "Designed a multi-storey residential apartment with modern amenities."
    },
    {
      id: 10,
      img: "/assets/img/xyz21.jpeg",
      title: "Luxury Villa Design",
      category: "Building Design",
      desc: "Crafted luxury villas focusing on aesthetics, comfort, and space optimization."
    },
    {
      id: 11,
      img: "/assets/img/xyz20.jpeg",
      title: "Corporate Tower",
      category: "Building Design",
      desc: "Architectural and structural design for a corporate office tower."
    },
    {
      id: 12,
      img: "/assets/img/xyz17.jpeg",
      title: "Shopping Mall Design",
      category: "Building Design",
      desc: "Complete design for a modern shopping mall with food courts and entertainment zones."
    },
    {
      id: 13,
      img: "/assets/img/xyz.jpeg",
      title: "Hotel and Resort Design",
      category: "Building Design",
      desc: "Luxury hotel and resort design with premium guest experience focus."
    },
    {
      id: 14,
      img: "/assets/img/xyz22.jpeg",
      title: "Educational Campus Design",
      category: "Building Design",
      desc: "Comprehensive design for a university campus including classrooms, labs, and auditoriums."
    },
    {
      id: 15,
      img: "/assets/img/project1.jpg",
      title: "Office Interior Design",
      category: "Building Design",
      desc: "Modern office interiors designed to enhance productivity and aesthetics."
    },
    {
      id: 16,
      img: "/assets/img/xyz11.jpeg",
      title: "Green Eco-Building",
      category: "Building Design",
      desc: "Sustainable eco-friendly building design focusing on energy efficiency."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const handleOpen = (index) => setCurrentIndex(index);
  const handleClose = () => setCurrentIndex(null);
  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <div>
      {/* 🔹 Page Header */}
      <section
        className="hero-section text-white d-flex align-items-center"
        style={{
          backgroundImage: "url('/assets/img/bgproject.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold">PROJECTS</h1>
          <p>Home » Projects</p>
        </div>
      </section>

      {/* 🔹 Portfolio Section */}
      <div className="container py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
          <h1 className="display-5 text-uppercase fw-bold mb-3">
            Our <span className="text-warning">Projects</span>
          </h1>
          <p className="text-muted">
            At <b>Vardaan Enterprise</b>, we take pride in delivering high-quality construction projects across
            <b> Roads, MEP, Land Development, Commercial Complexes, Interiors, and Building Designs</b>.
            Every project reflects our <b>commitment, innovation, and trust</b>.
          </p>
        </div>

        {/* Project Grid */}
        <div className="row g-4">
          {projects.map((p, index) => (
            <div key={p.id} className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="card border-0 shadow-sm h-100 project-card position-relative"
                style={{ cursor: "pointer", overflow: "hidden" }}
                onClick={() => handleOpen(index)}
              >
                <div className="image-wrapper">
                  <img
                    className="img-fluid rounded project-img"
                    src={p.img}
                    alt={p.title}
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      transition: "0.3s ease-in-out",
                      width: "100%",
                    }}
                  />
                  <div className="hover-overlay d-flex align-items-center justify-content-center">
                    <h5 className="text-white fw-bold">{p.title}</h5>
                  </div>
                </div>

                <div className="card-body text-center">
                  <h5 className="fw-bold">{p.title}</h5>
                  <p className="text-warning small mb-1">{p.category}</p>
                  <p className="text-muted small">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Modal Lightbox */}
      {currentIndex !== null && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.85)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-transparent border-0 text-center">
              <h4 className="fw-bold text-warning mb-2">{projects[currentIndex].title}</h4>
              <p className="text-light">{projects[currentIndex].desc}</p>
              <img
                src={projects[currentIndex].img}
                className="img-fluid rounded shadow"
                alt="Project"
                style={{ maxHeight: "600px", objectFit: "cover" }}
              />

              <div className="d-flex justify-content-between mt-3">
                <button
                  className="btn btn-warning text-dark fw-bold"
                  onClick={handlePrev}
                >
                  ⬅ Prev
                </button>
                <button
                  className="btn btn-dark border-warning fw-bold"
                  onClick={handleClose}
                >
                  ✖ Close
                </button>
                <button
                  className="btn btn-warning text-dark fw-bold"
                  onClick={handleNext}
                >
                  Next ➡
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🔹 Extra CSS */}
      <style>{`
        .project-card:hover .project-img {
          transform: scale(1.1);
        }
        .modal {
          backdrop-filter: blur(5px);
        }
        .image-wrapper {
          position: relative;
        }
        .hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          text-align: center;
        }
        .project-card:hover .hover-overlay {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
