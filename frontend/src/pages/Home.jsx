
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

export default function Home() {
  // Scroll Animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("in-view");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Projects for modal
  const projects = [
    { id: 1, img: "/assets/img/road1.jpg", title: "Highway Road Development", category: "Road Construction", desc: "Successfully completed 25+ km highway stretch with modern quality standards." },
    { id: 2, img: "/assets/img/projecthome2.jpg", title: "Commercial Plaza", category: "Commercial", desc: "Designed and constructed a premium commercial complex with world-class facilities." },
    { id: 3, img: "/assets/img/projecthome3.jpg", title: "Smart City MEP Work", category: "MEP", desc: "Executed full-scale Mechanical, Electrical & Plumbing works for smart city projects." },
    { id: 4, img: "/assets/img/projects/construction-2.jpg", title: "Land Development Project", category: "Land Development", desc: "Transformed raw land into planned sites with roads, drainage & green landscapes." },
    { id: 5, img: "/assets/img/projecthome5.jpg", title: "Luxury Interior Work", category: "Interior", desc: "Delivered modern interiors with aesthetic design and functional space planning." },
    { id: 6, img: "/assets/img/projects/construction-1.jpg", title: "Corporate Office Building", category: "Commercial", desc: "Constructed multi-storey office building with sustainable architecture." },
    { id: 7, img: "/assets/img/projecthome7.jpg", title: "Industrial Shed", category: "Industrial", desc: "Designed and built durable industrial shed structures for manufacturing units." },
    { id: 8, img: "/assets/img/projecthome8.jpg", title: "Hospital Infrastructure", category: "Healthcare", desc: "Developed modern hospital facilities ensuring safety and reliability." },
    { id: 9, img: "/assets/img/xyz.jpeg", title: "Luxury Apartment Complex", category: "Residential", desc: "High-end apartments with modern amenities and sustainable design." },
    { id: 10, img: "/assets/img/xyz17.jpeg", title: "Corporate Tower", category: "Commercial", desc: "Multi-storey office tower built with modern architecture and eco-friendly materials." },
    { id: 11, img: "/assets/img/project01.jpg", title: "Shopping Mall Project", category: "Commercial", desc: "Developed a premium shopping mall with integrated entertainment zones." },
    { id: 12, img: "/assets/img/xyz.jpeg", title: "Hotel & Resort", category: "Hospitality", desc: "Constructed luxury hotel and resort facilities with world-class standards." },
    { id: 13, img: "/assets/img/project2.jpg", title: "Modern Villa", category: "Residential", desc: "Designed and built modern villas with aesthetic landscaping." },
    { id: 14, img: "/assets/img/xyz22.jpeg", title: "Educational Campus", category: "Institutional", desc: "Developed campus infrastructure for schools and universities with innovative design." },
    { id: 15, img: "/assets/img/xyz14.jpeg", title: "Industrial Complex", category: "Industrial", desc: "Built state-of-the-art industrial complexes with efficient layout and facilities." },
    { id: 16, img: "/assets/img/Commercial.jpg", title: "Healthcare Center", category: "Healthcare", desc: "Constructed modern healthcare facilities ensuring patient safety and comfort." },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);
  const handleOpen = (index) => setCurrentIndex(index);
  const handleClose = () => setCurrentIndex(null);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  return (
    <>
      {/* 🔹 Hero Section */}
      <section className="hero-section position-relative">
        <video className="video-bg" autoPlay muted loop playsInline>
          <source src="/assets/video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay"></div>

        <div className="container text-center text-white hero-content">
          <h1 className="fw-bold display-4 typing-text">
            Welcome to Vardaan Enterprise
          </h1>
          <p className="lead fade-in">
            We Build Roads, Buildings, Hospitals & More
          </p>
          <Link to="/contact">
            <button className="btn btn-warning">Contact Us</button>
          </Link>
        </div>

        <style>{`
    .hero-section {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      z-index: 1000;
    }
    .video-bg {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      object-fit: cover;
      z-index: 0;
    }
    .overlay {
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0,0,0,0.55);
      z-index: 1;
    }
    .hero-content {
      position: relative;
      z-index: 2;
    }
  `}</style>
      </section>


      {/* 🔹 Services Section */}
      <section className="py-5 bg-light" id="services">
        <div className="container text-center">
          <h2 className="fw-bold mb-5 animate-on-load" style={{ color: "#FFC107" }}>
            Our Services
          </h2>
          <div className="row g-4">
            {[
              {
                title: "Road Construction",
                img: "/assets/img/road.jpg",
                desc: "We specialize in building strong, long-lasting, and safe roadways using advanced materials and modern techniques. Our goal is to ensure smooth transportation and reliable connectivity for all types of infrastructure projects.",
                link: "/services/road"
              },
              {
                title: "Architecture Construction",
                img: "/assets/img/constructions-1.jpg",
                desc: "From concept to creation, we deliver comprehensive architectural planning and execution services. Our designs focus on functionality, aesthetics, and sustainability to meet the unique vision of every client.",
                link: "/services/architecture"
              },
              {
                title: "Land Construction",
                img: "/assets/img/landscaping.jpg",
                desc: "We offer complete land development and construction services — including site preparation, leveling, and landscaping — ensuring environmentally responsible and cost-effective results.",
                link: "/services/land"
              },
              {
                title: "Commercial Building Construction",
                img: "/assets/img/Commercial.jpg",
                desc: "We construct modern commercial spaces such as offices, malls, and industrial complexes that combine functionality, innovation, and style to create the perfect business environment.",
                link: "/services/hospitality"
              },
              {
                title: "Interior Construction",
                img: "/assets/img/Interior.jpg",
                desc: "Our interior design and construction services bring life to spaces. We focus on style, comfort, and efficiency — transforming ideas into elegant, customized interiors.",
                link: "/services/interior"
              },
              {
                title: "MEP Construction",
                img: "/assets/img/project8.jpg",
                desc: "We design and implement integrated Mechanical, Electrical, and Plumbing systems for residential, commercial, and industrial projects — ensuring safety, efficiency, and long-term reliability.",
                link: "/services/mep"
              },
            ].map((service, i) => (
              <div key={i} className="col-md-6 col-lg-4 animate-on-load">
                <div className="card shadow-sm border-0 h-100 service-card p-3">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="img-fluid mb-3 rounded service-img"
                    style={{ height: "200px", width: "100%", objectFit: "cover" }}
                  />
                  <h5
                    className="fw-bold mb-2"
                    style={{ color: "#FFC107", fontSize: "1.3rem" }}
                  >
                    {service.title}
                  </h5>
                  <p className="text-muted" style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                    {service.desc}
                  </p>

                  {/* ✅ Simple text link (no background/button) */}
                  <Link
                    to={service.link}
                    className="fw-bold text-decoration-none"
                    style={{
                      color: "#FF7043",
                      fontSize: "0.95rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#E64A19")}
                    onMouseOut={(e) => (e.target.style.color = "#FF7043")}
                  >
                    View More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 About Section */}
      <section className="py-5 bg-light" id="about">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Left Side Image */}
            <div className="col-lg-6 scroll-animate">
              <div className="about-image-wrapper position-relative overflow-hidden rounded shadow-lg">
                <img
                  src="/assets/img/about-21.jpg"
                  alt="Vardaan Enterprises"
                  className="img-fluid about-img"
                />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="col-lg-6 scroll-animate">
              <div className="about-content">
                <h6 className="text-uppercase text-secondary fw-bold mb-2 animate__animated animate__fadeInDown">
                  Who We Are
                </h6>
                <h2 className="fw-bold mb-4 text-warning display-6 animate__animated animate__fadeInUp">
                  About Vardaan Enterprises
                </h2>

                <p className="text-muted mb-3 animate__animated animate__fadeInUp animate__delay-1s">
                  Vardaan Enterprises is a <strong>fast-growing construction company</strong>
                  dedicated to delivering excellence in <strong>infrastructure, roads, bridges,
                    and modern buildings</strong>. With a focus on <em>quality, safety, and sustainability</em>,
                  we bring innovative engineering solutions to life.
                </p>

                <p className="text-muted mb-4 animate__animated animate__fadeInUp animate__delay-2s">
                  Our expert engineers, architects, and skilled professionals
                  ensure every project is executed with <strong>precision, durability, and
                    client satisfaction</strong>.
                </p>

                {/* Key Highlights */}
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="p-3 bg-white rounded shadow-sm h-100 animate__animated animate__fadeInUp animate__delay-3s">
                      <p className="mb-1">✔ <strong>Roads & Bridges</strong></p>
                      <small className="text-muted">Strong expertise in civil & highway works</small>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-white rounded shadow-sm h-100 animate__animated animate__fadeInUp animate__delay-4s">
                      <p className="mb-1">✔ <strong>Modern Interiors</strong></p>
                      <small className="text-muted">Innovative spaces with MEP excellence</small>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="p-3 bg-white rounded shadow-sm h-100 animate__animated animate__fadeInUp animate__delay-5s">
                      <p className="mb-1">✔ <strong>Trusted by Clients</strong></p>
                      <small className="text-muted">Successful projects across multiple states in India</small>
                    </div>
                  </div>
                </div>

                {/* Learn More Button */}
                <Link
                  to="/about"
                  className="btn btn-warning btn-lg px-5 rounded-pill fw-bold animate__animated animate__pulse animate__infinite"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS */}
        <style>{`
    /* Image hover & zoom */
    .about-image-wrapper {
      height: 500px; /* bigger image */
    }
    .about-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease, filter 0.6s ease;
    }
    .about-img:hover {
      transform: scale(1.12) rotate(1deg);
      filter: brightness(1.1);
    }

    /* Button hover */
    .btn-warning:hover {
      background-color: #e0a800;
      transform: scale(1.05);
      transition: all 0.3s ease;
    }

    /* Animate.css CDN */
  `}</style>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </section>


      {/* 🔹 Projects Section */}
      <section className="py-5 bg-white" id="projects">
        <div className="container text-center">
          <h2 className="fw-bold mb-5 scroll-animate" style={{ color: "#FFC107" }}>Our Projects</h2>
          <div className="row g-4">
            {projects.map((p, index) => (
              <div key={p.id} className="col-md-3 col-sm-6 scroll-animate">
                <div
                  className="card shadow-sm border-0 h-100 project-card"
                  style={{ cursor: "pointer" }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img src={p.img} className="img-fluid project-img rounded-top" alt={p.title} />
                  <div className="p-3 text-start">
                    <h5 className="fw-bold mb-1" style={{ color: "#FFC107" }}>{p.title}</h5>
                    <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>{p.desc}</p>
                    <small className="text-info fw-bold">{p.category}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/projects" className="btn btn-yellow btn-lg mt-4 interactive-btn">View All Projects</Link>
        </div>

        {/* 🔹 Project Modal */}
        {currentIndex !== null && (
          <div className="modal fade show" style={{ display: "block", background: "rgba(0,0,0,0.85)" }}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content bg-transparent border-0 text-center">
                <h4 className="fw-bold text-warning mb-2">{projects[currentIndex].title}</h4>
                <p className="text-light">{projects[currentIndex].desc}</p>
                <p className="text-warning fw-bold mb-2">{projects[currentIndex].category}</p>
                <img
                  src={projects[currentIndex].img}
                  className="img-fluid rounded shadow"
                  alt="Project"
                  style={{ maxHeight: "600px", objectFit: "cover" }}
                />
                <div className="d-flex justify-content-between mt-3">
                  <button className="btn btn-warning text-dark fw-bold" onClick={() => setCurrentIndex((currentIndex === 0 ? projects.length - 1 : currentIndex - 1))}>⬅ Prev</button>
                  <button className="btn btn-dark border-warning fw-bold" onClick={() => setCurrentIndex(null)}>✖ Close</button>
                  <button className="btn btn-warning text-dark fw-bold" onClick={() => setCurrentIndex((currentIndex + 1) % projects.length)}>Next ➡</button>
                </div>
              </div>
            </div>
          </div>
        )}

        <style>{`
    /* Project Cards */
    .project-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-radius: 12px;
      overflow: hidden;
    }
    .project-card:hover {
      transform: scale(1.05);
      box-shadow: 0 12px 30px rgba(0,0,0,0.25);
    }
    .project-img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
    }
  `}</style>
      </section>

      {/* 🔹 Career Section */}
      <section
        className="py-5 position-relative"
        id="career"
        style={{ background: "#fff", overflow: "hidden" }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4" style={{ color: '#FFB74D' }}>
            Career With Us
          </h2>
          <p
            className="text-muted mb-5 mx-auto"
            style={{ maxWidth: "750px", fontSize: "1.1rem", color: '#6c757d' }}
          >
            At <strong>Vardaan Enterprises</strong>, we don’t just build infrastructures –
            we build <span className="fw-bold text-dark">careers & futures</span>.
            Join a passionate team where construction excellence meets innovation.
          </p>

          <div className="row justify-content-center g-4">
            {[
              {
                title: "Why Join Us?",
                sticker: "/assets/img/sticker-1.jpg",
                messages: [
                  "Work on landmark construction projects",
                  "Collaborate with skilled engineers",
                  "Hands-on experience with latest construction techniques"
                ]
              },
              {
                title: "Opportunities",
                sticker: "/assets/img/sticker-2.jpg",
                messages: [
                  "Openings in Civil, MEP, Architecture & Project Management",
                  "Participate in urban infrastructure development",
                  "Grow with challenging and innovative projects"
                ]
              },
              {
                title: "Growth",
                sticker: "/assets/img/sticker-3.jpg",
                messages: [
                  "Skill-building workshops & training",
                  "Mentorship from industry experts",
                  "Career advancement in construction leadership"
                ]
              },
            ].map((card, idx) => (
              <div key={idx} className="col-md-4 d-flex align-items-stretch">
                <div className="card career-card border-0 shadow-lg position-relative w-100">
                  {/* Sticker inside card, centered */}
                  <div className="sticker-wrapper">
                    <img src={card.sticker} alt={`sticker${idx}`} className="career-sticker" />
                  </div>

                  <div className="card-body pt-5 text-center">
                    <h5 className="fw-bold mt-3" style={{ color: '#FFB74D' }}>{card.title}</h5>
                    <ul className="list-unstyled mt-3 construction-messages">
                      {card.messages.map((msg, mIdx) => (
                        <li key={mIdx} className="text-muted">{msg}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/career"
            className="btn btn-warning btn-lg px-5 mt-5 fw-bold rounded-pill explore-btn"
          >
            Explore Careers →
          </Link>
        </div>

        {/* 🔹 Custom CSS */}
        <style>{`
    .career-card {
      border-radius: 18px;
      background: #fff;
      padding-top: 120px;
      cursor: default;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      min-height: 350px;
    }
    .sticker-wrapper {
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 120px;
      height: 120px;
    }
    .career-sticker {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .construction-messages li {
      margin: 6px 0;
      font-size: 0.95rem;
      color: #6c757d;
    }
    .explore-btn {
      transition: all 0.3s ease;
    }
    .explore-btn:hover {
      background-color: #e0a800;
      transform: scale(1.05);
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    }
  `}</style>
      </section>











      <section className="py-5 bg-light text-center" id="customer-reviews">
        <div className="container">
          <h2 className="fw-bold mb-4" style={{ color: "#FFC107" }}>
            What Our Customers Say
          </h2>
          <p className="text-muted mb-4">
            We take pride in delivering high-quality construction services. Here's what our clients say about us.
          </p>
          <Link to="/reviews" className="btn btn-yellow btn-lg interactive-btn">
            View Customer Reviews
          </Link>
        </div>

        <style>{`
    .btn-yellow {
      background-color: #FFC107;
      color: #000;
      border: none;
      padding: 12px 30px;
      font-size: 1.1rem;
      transition: 0.3s;
      border-radius: 8px;
    }
    .btn-yellow:hover {
      background-color: #e0a800;
      transform: scale(1.05);
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    }
    #customer-reviews {
      background: linear-gradient(135deg, #fff8e1, #ffe082);
    }
  `}</style>
      </section>

    </>
  );
}
