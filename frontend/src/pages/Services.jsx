
// // export default Services;
// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Services = () => {
//   return (
//     <>
//       {/* Navbar */}
//       <Navbar />

//       {/* Page Header */}
//       <div className="container-fluid page-header bg-dark text-white py-5 mb-5">
//         <div className="container text-center">
//           <h1 className="display-3 text-uppercase text-warning mb-3">Our Services</h1>
//           <div className="d-inline-flex text-white">
//             <h6 className="text-uppercase m-0">
//               <a href="/" className="text-warning">Home</a>
//             </h6>
//             <h6 className="text-white m-0 px-3">/</h6>
//             <h6 className="text-uppercase text-white m-0">Services</h6>
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="container py-6">
//         <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
//           <h5 className="text-warning fw-bold">What We Do</h5>
//           <h1 className="display-5 text-uppercase mb-3">
//             We Provide <span className="text-dark">The Best</span> Construction Services
//           </h1>
//           <p className="text-muted">
//             Our team delivers top-notch architecture, interior design, renovation, and turnkey projects with innovation and quality.
//           </p>
//         </div>

//         <div className="row g-4">
//           {/* Service Item */}
//           {[
//             {
//               img: "/assets/img/road.jpg",
//               icon: "fa-building",
//               title: "Building Construction",
//               desc: "High-quality building construction with modern technology and durability."
//             },
//             {
//               img: "/assets/img/Archiectural.jpg",
//               icon: "fa-home",
//               title: "House Renovation",
//               desc: "Transform your old spaces into modern and stylish homes."
//             },
//             {
//               img: "/assets/img/landscaping.jpg",
//               icon: "fa-drafting-compass",
//               title: "Architecture Design",
//               desc: "Creative and functional architectural designs tailored to your needs."
//             },
//             {
//               img: "/assets/img/Commercial.jpg",
//               icon: "fa-palette",
//               title: "Interior Design",
//               desc: "Elegant interiors that reflect personality and functionality."
//             },
//             {
//               img: "/assets/img/Interior.jpg",
//               icon: "fa-tools",
//               title: "Turnkey Projects",
//               desc: "From planning to execution – we handle complete projects seamlessly."
//             },
//             {
//               img: "/assets/img/project10.jpg",
//               icon: "fa-paint-brush",
//               title: "Painting & Finishing",
//               desc: "Give your walls a premium finish with our professional painting services."
//             },
//           ].map((s, i) => (
//             <div className="col-lg-4 col-md-6" key={i}>
//               <div className="service-item bg-white rounded shadow-sm text-center p-4 h-100 position-relative overflow-hidden"
//                 style={{ transition: "0.4s" }}
//               >
//                 <img className="img-fluid rounded mb-3" src={s.img} alt={s.title} />
//                 <div
//                   className="service-icon bg-warning d-flex align-items-center justify-content-center mx-auto mb-3"
//                   style={{
//                     width: "70px",
//                     height: "70px",
//                     borderRadius: "50%",
//                   }}
//                 >
//                   <i className={`fa fa-2x ${s.icon} text-dark`}></i>
//                 </div>
//                 <h4 className="text-uppercase mb-3">{s.title}</h4>
//                 <p className="text-muted">{s.desc}</p>
//                 <a className="btn btn-outline-warning mt-2" href="#">
//                   Read More <i className="bi bi-arrow-right"></i>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

    
     

//       {/* CSS Styling */}
//       <style>
//         {`
//           .service-item:hover {
//             transform: translateY(-10px);
//             box-shadow: 0 10px 25px rgba(0,0,0,0.15);
//           }
//           .service-item:hover .service-icon {
//             background: #000;
//           }
//           .service-item:hover .service-icon i {
//             color: #ffc107;
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default Services;

import React from 'react';
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
           <section className="py-5 bg-light" id="services">
              <div className="container text-center">
                <h2 className="fw-bold mb-5 animate-on-load" style={{ color: "#FFC107" }}>
                  Our Services
                </h2>
                <div className="row g-4">
      
                  {/* Road */}
                  <div className="col-md-6 col-lg-4 animate-on-load">
                    <Link to="services/road" className="text-decoration-none text-dark">
                      <div className="card shadow-sm border-0 h-100 service-card p-3">
                        <img src="/assets/img/road.jpg" alt="Road Construction" className="img-fluid mb-3 rounded service-img" />
                        <h5 className="fw-bold mb-2" style={{ color: "#FFC107" }}>Road Construction</h5>
                        <p className="text-muted">Building durable and safe roads with modern techniques.</p>
                      </div>
                    </Link>
                  </div>
      
                  {/* Architecture */}
                  <div className="col-md-6 col-lg-4 animate-on-load">
                    <Link to="services/architecture" className="text-decoration-none text-dark">
                      <div className="card shadow-sm border-0 h-100 service-card p-3">
                        <img src="/assets/img/Architectural.jpg" alt="Architectural Design" className="img-fluid mb-3 rounded service-img" />
                        <h5 className="fw-bold mb-2" style={{ color: "#FFC107" }}>Architecture Construction</h5>
                        <p className="text-muted">Modern architectural planning & hospital construction.</p>
                      </div>
                    </Link>
                  </div>
      
                  {/* Land */}
                  <div className="col-md-6 col-lg-4 animate-on-load">
                    <Link to="services/land" className="text-decoration-none text-dark">
                      <div className="card shadow-sm border-0 h-100 service-card p-3">
                        <img src="/assets/img/landscaping.jpg" alt="Landscaping Services" className="img-fluid mb-3 rounded service-img" />
                        <h5 className="fw-bold mb-2" style={{ color: "#FFC107" }}>Land Construction</h5>
                        <p className="text-muted">Sustainable land development and landscaping solutions.</p>
                      </div>
                    </Link>
                  </div>
      
                  {/* Commercial Building */}
                  <div className="col-md-6 col-lg-4 animate-on-load">
                    <Link to="services/hospitality" className="text-decoration-none text-dark">
                      <div className="card shadow-sm border-0 h-100 service-card p-3">
                        <img src="/assets/img/Commercial.jpg" alt="Commercial Building" className="img-fluid mb-3 rounded service-img" />
                        <h5 className="fw-bold mb-2" style={{ color: "#FFC107" }}>Commercial Building Construction</h5>
                        <p className="text-muted">Constructing modern commercial complexes and offices.</p>
                      </div>
                    </Link>
                  </div>
      
                  {/* Interior */}
                  <div className="col-md-6 col-lg-4 animate-on-load">
                    <Link to="services/interior" className="text-decoration-none text-dark">
                      <div className="card shadow-sm border-0 h-100 service-card p-3">
                        <img src="/assets/img/Interior.jpg" alt="Interior Design" className="img-fluid mb-3 rounded service-img" />
                        <h5 className="fw-bold mb-2" style={{ color: "#FFC107" }}>Interior Construction</h5>
                        <p className="text-muted">Stylish and functional interiors tailored to your taste.</p>
                      </div>
                    </Link>
                  </div>
      
                  {/* MEP */}
                  <div className="col-md-6 col-lg-4 animate-on-load">
                    <Link to="services/mep" className="text-decoration-none text-dark">
                      <div className="card shadow-sm border-0 h-100 service-card p-3">
                        <img src="/assets/img/landscaping.jpg" alt="MEP Services" className="img-fluid mb-3 rounded service-img" />
                        <h5 className="fw-bold mb-2" style={{ color: "#FFC107" }}>MEP Construction</h5>
                        <p className="text-muted">Energy-efficient and sustainable building systems.</p>
                      </div>
                    </Link>
                  </div>
      
                </div>
              </div>
            </section>
            
                  {/* 🔹 Global Styles */}
                  <style>{`
                    .btn-yellow { background-color: #FFC107; color: #000; border: none; transition: 0.3s; }
                    .btn-yellow:hover { background-color: #e0a800; transform: scale(1.05); box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
                    .fade-slide-in { opacity: 0; transform: translateY(20px); animation: fadeSlideIn 0.8s forwards; }
                    @keyframes fadeSlideIn { to { opacity: 1; transform: translateY(0); } }
                    .about-img { width: 100%; height: 450px; object-fit: cover; border-radius: 15px; transition: transform 0.5s, filter 0.5s; }
                    .about-image-wrapper:hover .about-img { transform: scale(1.05) rotate(1deg); filter: brightness(1.1); }
                  `}</style>
    </div>
  )
}

export default Services