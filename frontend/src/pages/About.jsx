
import React from "react";

function About() {
  return (
    <>
      {/* 🔹 Hero Banner Section */}
     <section
  className="d-flex align-items-center justify-content-center position-relative text-white"
  style={{
    backgroundImage: "url('/assets/img/aboutbg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "320px",
  }}
>
  {/* Overlay */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
  ></div>

  {/* Text Content */}
  <div className="position-relative text-center">
    <h1 className="fw-bold display-4 text-warning">ABOUT US</h1>
    <p className="text-white">Home » About Us</p>
  </div>
</section>


      {/* 🔹 About Description Section */}
 <section className="container my-5">
  <div className="p-5 bg-light border-start border-4 border-warning rounded shadow-sm">
    <h2
      className="text-uppercase mb-4 text-center"
      style={{ color: "#FFC107" }}
    >
      About Us
    </h2>
    <p>
      At Vardaan Enterprise, we don’t just construct buildings – we craft
      sustainable, functional, and visually stunning spaces that leave a lasting
      impression. With a perfect blend of modern innovation and traditional
      craftsmanship, our team of skilled architects, engineers, and project
      managers bring every vision to life with precision and elegance.
    </p>
    <p>
      Over the years, we have successfully executed a wide range of projects
      spanning residential complexes, commercial buildings, hospitality spaces,
      infrastructure development, and interior design solutions. Each project is
      carefully planned and executed to meet the highest standards of quality,
      safety, and aesthetic appeal.
    </p>
    <p>
      Our approach is collaborative – we work closely with clients to understand
      their goals, lifestyle needs, and business objectives. By combining
      innovative design, advanced technology, and sustainable practices, we
      ensure that every space is not only beautiful but also functional, energy-efficient,
      and long-lasting.
    </p>
    <p>
      Sustainability and eco-conscious construction form the core of our
      philosophy. From using environmentally friendly materials to optimizing
      energy and water efficiency, we are committed to creating projects that
      reduce environmental impact while enhancing comfort and usability.
    </p>
    <p>
      At Vardaan Enterprise, we believe in building more than just structures;
      we create environments that inspire, connect communities, and elevate
      everyday living. Whether it’s a luxury residence, a corporate office,
      a wellness resort, or large-scale infrastructure, our goal is to deliver
      spaces that combine innovation, quality, and lasting value.
    </p>
    <p>
      Our relentless focus on excellence, integrity, and client satisfaction
      sets us apart. Every project we undertake reflects our commitment to
      perfection, attention to detail, and delivering on promises. With Vardaan
      Enterprise, you can trust that your vision will be transformed into reality,
      creating spaces that stand the test of time and exceed expectations.
    </p>
  </div>
</section>



      {/* 🔹 Founder Section */}
<section className="container my-5">
  <div
    className="row align-items-center p-4 rounded shadow"
    style={{ backgroundColor: "#000", color: "#fff" }}
  >
    {/* Founder Image */}
    <div className="col-lg-5 mb-4 mb-lg-0 text-center d-flex justify-content-center">
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "0.75rem",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
        }}
      >
        <img
          src="/assets/img/founder.jpg"
          alt="Founder - Mini Chauhan"
          className="img-fluid"
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
            borderRadius: "0.75rem",
            transition: "transform 0.5s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        />
      </div>
    </div>

    {/* Founder Content */}
    <div
      className="col-lg-7 ps-lg-4 d-flex flex-column justify-content-center"
      style={{
        animation: "fadeInUp 1s ease-in-out",
      }}
    >
      <h3 className="text-uppercase mb-3" style={{ color: "#FFC107" }}>
        Mini Chauhan, Founder
      </h3>
      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        Mini Chauhan is the visionary Founder of Vardaan Enterprise. Her
        leadership and innovative approach have transformed the company into
        one of the most trusted names in architecture and construction.
      </p>
      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        She strongly believes in creating sustainable and functional designs
        that balance creativity with long-term value, making every project
        unique and impactful.
      </p>
      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        Mini actively engages with clients, architects, and engineers to
        ensure every project is thoughtfully executed, leaving a lasting
        impression and delivering excellence at every step.
      </p>
    </div>
  </div>

  <style>
    {`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
  </style>
</section>



      {/* 🔹 Co-Founder Section */}
   {/* 🔹 Co-Founder Section */}
<section className="container my-5">
  <div
    className="row align-items-center rounded shadow flex-row-reverse"
    style={{
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "450px",
      padding: "20px 0",
    }}
  >
    {/* Image Section */}
    <div className="col-lg-5 col-12 d-flex justify-content-center p-0">
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "450px",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <img
          src="/assets/img/cofounder.jpg"
          alt="CoFounder - Aakash Rajawat"
          className="shadow img-fluid"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            borderRadius: "12px",
            transition: "transform 0.5s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        />
      </div>
    </div>

    {/* Text Section */}
    <div className="col-lg-7 col-12 p-3 d-flex flex-column justify-content-center">
      <h4 className="text-uppercase mb-3" style={{ color: "#FFC107" }}>
        Aakash Rajawat, Co-Founder
      </h4>
      <p className="mb-2" style={{ fontSize: "1rem" }}>
        Aakash Rajawat, the dynamic Co-Founder of Vardaan Enterprise, drives the
        company’s mission to create spaces that inspire and endure. His vision
        combines innovation with practicality, ensuring every project is both
        functional and aesthetically stunning.
      </p>
      <p className="mb-2" style={{ fontSize: "1rem" }}>
        Under his leadership, Vardaan Enterprise has successfully completed
        numerous residential and commercial projects, emphasizing sustainable
        building practices and client-centric solutions.
      </p>
      <p className="mb-0" style={{ fontSize: "1rem" }}>
        Ravi believes that architecture is not just about construction – it’s
        about creating lasting experiences. He actively engages with clients,
        architects, and engineers to bring unique ideas to life while
        maintaining the highest standards of quality and excellence.
      </p>
    </div>
  </div>
</section>


      {/* 🔹 Team Section (Cards) */}
     <section className="container my-5">
  {/* Section Heading */}
  <h3
    className="text-center text-uppercase fw-bold mb-5"
    style={{ color: "#FFC107", letterSpacing: "2px" }}
  >
    Our Fantastic Team
  </h3>

  {/* Team Members Grid */}
  <div className="row text-center justify-content-center">
    {[
      {
        name: "Isani Dixit",
        role: "Associate Consultant",
        img: "/assets/img/associate.jpg",
      },
      {
        name: "Ashish Dixit",
        role: "Lead Architect",
        img: "/assets/img/LeadArchitect1.jpg",
      },
    ].map((member, i) => (
      <div key={i} className="col-md-4 col-sm-6 mb-4">
        <div
          className="card shadow-lg border-0 team-card"
          style={{
            borderRadius: "15px",
            transition: "all 0.4s ease",
            cursor: "pointer",
          }}
        >
          {/* Image */}
          <div className="overflow-hidden rounded" style={{ borderRadius: "12px" }}>
            <img
              src={member.img}
              alt={member.name}
              className="img-fluid team-img"
              style={{
                objectFit:
                  member.name === "Isani Dixit" ? "contain" : "cover",
                height: "250px",
                width: "100%",
                backgroundColor: "#f8f9fa",
                transition: "transform 0.5s ease",
              }}
            />
          </div>

          {/* Member Info */}
          <div className="card-body">
            <h6 className="fw-bold mb-1">{member.name}</h6>
            <small className="text-muted">{member.role}</small>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Inline CSS for Hover Effect */}
  <style>{`
    .team-card:hover {
      transform: translateY(-10px) scale(1.03);
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
    .team-card:hover .team-img {
      transform: scale(1.08);
    }
  `}</style>
</section>

    </>
  );
}

export default About;
