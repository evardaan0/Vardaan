
// export default About;
import React from "react";
import { motion } from "framer-motion";

// 🔹 Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

function About() {
  return (
    <>
      {/* 🔹 Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="d-flex align-items-center justify-content-center position-relative text-white"
        style={{
          backgroundImage: "url('/assets/img/aboutt.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* 🔹 Transparent Dark Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
        ></motion.div>

        {/* 🔹 Text Content */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="position-relative text-center"
          style={{ zIndex: 2 }}
        >
          <motion.h1
            whileHover={{ scale: 1.1, color: "#FFD700" }}
            className="fw-bold display-2 text-warning"
            style={{
              textShadow: "0 4px 10px rgba(0,0,0,0.6)",
              letterSpacing: "3px",
            }}
          >
            ABOUT US
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="fs-4 text-light mt-3"
          >
            Home » About Us
          </motion.p>
        </motion.div>
      </motion.section>

      {/* 🔹 About Description */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="container my-5"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="p-5 bg-light border-start border-5 border-warning rounded-4 shadow-lg"
          style={{
            background:
              "linear-gradient(135deg, #fff 0%, #f9f9f9 50%, #fff 100%)",
          }}
        >
          <h2
            className="text-uppercase mb-4 text-center display-5 fw-bold"
            style={{ color: "#FFC107", letterSpacing: "2px" }}
          >
            Who We Are
          </h2>
          <p className="fs-5 lh-lg text-secondary">
            At <b>Vardaan Enterprise</b>, we don’t just construct structures — we
            create <span className="text-warning fw-bold">lasting landmarks</span>.
            We are a trusted name in <b>civil, structural, and MEP engineering</b>,
            committed to transforming visions into sustainable, functional, and
            innovative spaces.
          </p>
          <p className="fs-5 lh-lg text-secondary">
            With expertise in <b>residential, commercial, and industrial</b> projects,
            we integrate <b>modern design, technology, and eco-friendly practices</b> to
            deliver excellence in every square foot we build.
          </p>
          <p className="fs-5 lh-lg text-secondary">
            Our mission is driven by quality, integrity, and innovation — ensuring
            each project reflects our dedication to <b>engineering precision and
            architectural excellence</b>.
          </p>
        </motion.div>
      </motion.section>

      {/* 🔹 Vision & Mission */}
      <section className="container my-5">
        {/* Vision Section */}
        <div className="row align-items-center g-5">
          <motion.div
            className="col-md-7"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/assets/img/vision.jpg"
              alt="Vision"
              className="img-fluid rounded-4 shadow-lg w-100"
              style={{ border: "6px solid #FFC107" }}
            />
          </motion.div>

          <motion.div
            className="col-md-5"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
          >
            <motion.h3
              whileHover={{ scale: 1.05, color: "#FFD700" }}
              className="mb-3 text-uppercase fw-bold display-6"
              style={{ color: "#FFC107" }}
            >
              Our Vision
            </motion.h3>
            <p className="fs-5 lh-lg text-secondary">
              To emerge as a <b>leading force in smart, sustainable infrastructure</b>
              and engineering excellence — delivering projects that embody innovation,
              safety, and long-term value.
            </p>
            <p className="fs-5 lh-lg text-secondary">
              We envision a future where <b>green construction, MEP integration, and
              modern architecture</b> come together to build not just structures but
              <span className="text-warning fw-semibold"> inspiring environments</span>.
            </p>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="row align-items-center g-5 mt-5 flex-md-row-reverse">
          <motion.div
            className="col-md-7"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/assets/img/mision.jpg"
              alt="Mission"
              className="img-fluid rounded-4 shadow-lg w-100"
              style={{ border: "6px solid #FFC107" }}
            />
          </motion.div>

          <motion.div
            className="col-md-5"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
          >
            <motion.h3
              whileHover={{ scale: 1.05, color: "#FFD700" }}
              className="mb-3 text-uppercase fw-bold display-6"
              style={{ color: "#FFC107" }}
            >
              Our Mission
            </motion.h3>
            <p className="fs-5 lh-lg text-secondary">
              To lead with <b>innovation, precision, and integrity</b> — providing
              end-to-end <b>construction and MEP solutions</b> that align with modern
              sustainability goals.
            </p>
            <p className="fs-5 lh-lg text-secondary">
              Our mission is to transform every blueprint into reality by combining
              <b> engineering excellence</b>, <b>quality materials</b>, and{" "}
              <b>client-focused delivery</b>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Leaders Section */}
<section className="container my-5">
  <motion.h2
    className="text-center mb-5 fw-bold text-uppercase display-5"
    style={{ color: "#FFC107", letterSpacing: "2px" }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Meet Our Leaders
  </motion.h2>

  <div className="row g-4 justify-content-center">
    {[
      {
        name: "Mini Chauhan",
        title: "Founder ",
        desc: `Mini drives every project with a blend of creativity and precision. 
        She ensures our buildings are sustainable, functional, and visually striking. 
        Her leadership inspires the team to turn ambitious visions into reality.`,
        img: "/assets/img/icon-1.jpg",
      },
      {
        name: "Aakash Rajawat",
        title: "Co-Founder ",
        desc: `Aakash leads complex projects from concept to completion. 
        He focuses on quality, safety, and efficiency in every build. 
        His strategic approach keeps the company at the forefront of construction innovation.`,
        img: "/assets/img/icon-1.jpg",
      },
    ].map((leader, i) => (
      <motion.div
        key={i}
        className="col-12 col-sm-10 col-md-6"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.3, duration: 0.8 }}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            y: -10,
            boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
          }}
          transition={{ type: "spring", stiffness: 120 }}
          className="p-4 rounded-4 shadow-lg text-center h-100 position-relative"
          style={{
            background: "linear-gradient(135deg, #007BFF, #00C6FF)",
            color: "#fff",
          }}
        >
          <div className="leader-img-wrapper mx-auto mb-3">
            <img
              src={leader.img}
              alt={leader.name}
              className="rounded-circle border border-warning"
            />
          </div>
          <h4 className="fw-bold mb-2">{leader.name}</h4>
          <h6 className="text-warning mb-3">{leader.title}</h6>
          <p className="fs-6">{leader.desc}</p>
        </motion.div>
      </motion.div>
    ))}
  </div>
</section>

{/* Team Section */}
<section className="container my-5">
  <motion.h3
    className="text-center text-uppercase fw-bold mb-5 display-5"
    style={{ color: "#FFC107", letterSpacing: "2px" }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    Our Team
  </motion.h3>

  <div className="row g-4 justify-content-center">
    {[
      {
        name: "Isani Dixit",
        role: "Associate Consultant",
        desc: `Isani ensures all projects run smoothly with detailed planning and resource coordination. 
        She keeps our timelines on track while maintaining quality standards. 
        Her support helps the company deliver exceptional construction projects every time.`,
        img: "/assets/img/icon-1.jpg",
      },
      {
        name: "Ashish Dixit",
        role: "Lead Architect",
        desc: `Ashish transforms ideas into functional architectural designs. 
        He focuses on aesthetics, sustainability, and innovative construction techniques. 
        His designs bring each project to life while exceeding client expectations.`,
        img: "/assets/img/icon-1.jpg",
      },
    ].map((member, i) => (
      <motion.div
        key={i}
        className="col-12 col-sm-6 col-md-4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.8 }}
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            y: -10,
            boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
          }}
          transition={{ type: "spring", stiffness: 150 }}
          className="p-4 rounded-4 shadow-lg text-center h-100 position-relative"
          style={{
            background: "linear-gradient(135deg, #17a2b8, #6dd5fa)",
            color: "#fff",
          }}
        >
          <div className="team-img-wrapper mx-auto mb-3">
            <img
              src={member.img}
              alt={member.name}
              className="rounded-circle border border-warning"
            />
          </div>
          <h5 className="fw-bold mb-2">{member.name}</h5>
          <h6 className="text-warning mb-2">{member.role}</h6>
          <p className="small lh-lg">{member.desc}</p>
        </motion.div>
      </motion.div>
    ))}
  </div>

  {/* Custom CSS */}
  <style>{`
    .leader-img-wrapper img,
    .team-img-wrapper img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-width: 3px;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }
    .leader-img-wrapper img:hover,
    .team-img-wrapper img:hover {
      transform: scale(1.15);
      box-shadow: 0 10px 25px rgba(255, 193, 7, 0.7);
    }
  `}</style>
</section>



    </>
  );
}

export default About;

// export default About;
import React from "react";
import { motion } from "framer-motion";

// 🔹 Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

function About() {
  return (
    <>
      {/* 🔹 Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="d-flex align-items-center justify-content-center position-relative text-white"
        style={{
          backgroundImage: "url('/assets/img/aboutt.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* 🔹 Transparent Dark Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
        ></motion.div>

        {/* 🔹 Text Content */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="position-relative text-center"
          style={{ zIndex: 2 }}
        >
          <motion.h1
            whileHover={{ scale: 1.1, color: "#FFD700" }}
            className="fw-bold display-2 text-warning"
            style={{
              textShadow: "0 4px 10px rgba(0,0,0,0.6)",
              letterSpacing: "3px",
            }}
          >
            ABOUT US
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="fs-4 text-light mt-3"
          >
            Home » About Us
          </motion.p>
        </motion.div>
      </motion.section>

      {/* 🔹 About Description */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="container my-5"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="p-5 bg-light border-start border-5 border-warning rounded-4 shadow-lg"
          style={{
            background:
              "linear-gradient(135deg, #fff 0%, #f9f9f9 50%, #fff 100%)",
          }}
        >
          <h2
            className="text-uppercase mb-4 text-center display-5 fw-bold"
            style={{ color: "#FFC107", letterSpacing: "2px" }}
          >
            Who We Are
          </h2>
          <p className="fs-5 lh-lg text-secondary">
            At <b>Vardaan Enterprise</b>, we don’t just construct structures — we
            create <span className="text-warning fw-bold">lasting landmarks</span>.
            We are a trusted name in <b>civil, structural, and MEP engineering</b>,
            committed to transforming visions into sustainable, functional, and
            innovative spaces.
          </p>
          <p className="fs-5 lh-lg text-secondary">
            With expertise in <b>residential, commercial, and industrial</b> projects,
            we integrate <b>modern design, technology, and eco-friendly practices</b> to
            deliver excellence in every square foot we build.
          </p>
          <p className="fs-5 lh-lg text-secondary">
            Our mission is driven by quality, integrity, and innovation — ensuring
            each project reflects our dedication to <b>engineering precision and
            architectural excellence</b>.
          </p>
        </motion.div>
      </motion.section>

      {/* 🔹 Vision & Mission */}
      <section className="container my-5">
        {/* Vision Section */}
        <div className="row align-items-center g-5">
          <motion.div
            className="col-md-7"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/assets/img/vision.jpg"
              alt="Vision"
              className="img-fluid rounded-4 shadow-lg w-100"
              style={{ border: "6px solid #FFC107" }}
            />
          </motion.div>

          <motion.div
            className="col-md-5"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
          >
            <motion.h3
              whileHover={{ scale: 1.05, color: "#FFD700" }}
              className="mb-3 text-uppercase fw-bold display-6"
              style={{ color: "#FFC107" }}
            >
              Our Vision
            </motion.h3>
            <p className="fs-5 lh-lg text-secondary">
              To emerge as a <b>leading force in smart, sustainable infrastructure</b>
              and engineering excellence — delivering projects that embody innovation,
              safety, and long-term value.
            </p>
            <p className="fs-5 lh-lg text-secondary">
              We envision a future where <b>green construction, MEP integration, and
              modern architecture</b> come together to build not just structures but
              <span className="text-warning fw-semibold"> inspiring environments</span>.
            </p>
          </motion.div>
        </div>

        {/* Mission Section */}
        <div className="row align-items-center g-5 mt-5 flex-md-row-reverse">
          <motion.div
            className="col-md-7"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/assets/img/mision.jpg"
              alt="Mission"
              className="img-fluid rounded-4 shadow-lg w-100"
              style={{ border: "6px solid #FFC107" }}
            />
          </motion.div>

          <motion.div
            className="col-md-5"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
          >
            <motion.h3
              whileHover={{ scale: 1.05, color: "#FFD700" }}
              className="mb-3 text-uppercase fw-bold display-6"
              style={{ color: "#FFC107" }}
            >
              Our Mission
            </motion.h3>
            <p className="fs-5 lh-lg text-secondary">
              To lead with <b>innovation, precision, and integrity</b> — providing
              end-to-end <b>construction and MEP solutions</b> that align with modern
              sustainability goals.
            </p>
            <p className="fs-5 lh-lg text-secondary">
              Our mission is to transform every blueprint into reality by combining
              <b> engineering excellence</b>, <b>quality materials</b>, and{" "}
              <b>client-focused delivery</b>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Leaders Section */}
<section className="container my-5">
  <motion.h2
    className="text-center mb-5 fw-bold text-uppercase display-5"
    style={{ color: "#FFC107", letterSpacing: "2px" }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Meet Our Leaders
  </motion.h2>

  <div className="row g-4 justify-content-center">
    {[
      {
        name: "Mini Chauhan",
        title: "Founder ",
        desc: `Mini drives every project with a blend of creativity and precision. 
        She ensures our buildings are sustainable, functional, and visually striking. 
        Her leadership inspires the team to turn ambitious visions into reality.`,
        img: "/assets/img/icon-1.jpg",
      },
      {
        name: "Aakash Rajawat",
        title: "Co-Founder ",
        desc: `Aakash leads complex projects from concept to completion. 
        He focuses on quality, safety, and efficiency in every build. 
        His strategic approach keeps the company at the forefront of construction innovation.`,
        img: "/assets/img/icon-1.jpg",
      },
    ].map((leader, i) => (
      <motion.div
        key={i}
        className="col-12 col-sm-10 col-md-6"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.3, duration: 0.8 }}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            y: -10,
            boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
          }}
          transition={{ type: "spring", stiffness: 120 }}
          className="p-4 rounded-4 shadow-lg text-center h-100 position-relative"
          style={{
            background: "linear-gradient(135deg, #007BFF, #00C6FF)",
            color: "#fff",
          }}
        >
          <div className="leader-img-wrapper mx-auto mb-3">
            <img
              src={leader.img}
              alt={leader.name}
              className="rounded-circle border border-warning"
            />
          </div>
          <h4 className="fw-bold mb-2">{leader.name}</h4>
          <h6 className="text-warning mb-3">{leader.title}</h6>
          <p className="fs-6">{leader.desc}</p>
        </motion.div>
      </motion.div>
    ))}
  </div>
</section>

{/* Team Section */}
<section className="container my-5">
  <motion.h3
    className="text-center text-uppercase fw-bold mb-5 display-5"
    style={{ color: "#FFC107", letterSpacing: "2px" }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    Our Team
  </motion.h3>

  <div className="row g-4 justify-content-center">
    {[
      {
        name: "Isani Dixit",
        role: "Associate Consultant",
        desc: `Isani ensures all projects run smoothly with detailed planning and resource coordination. 
        She keeps our timelines on track while maintaining quality standards. 
        Her support helps the company deliver exceptional construction projects every time.`,
        img: "/assets/img/icon-1.jpg",
      },
      {
        name: "Ashish Dixit",
        role: "Lead Architect",
        desc: `Ashish transforms ideas into functional architectural designs. 
        He focuses on aesthetics, sustainability, and innovative construction techniques. 
        His designs bring each project to life while exceeding client expectations.`,
        img: "/assets/img/icon-1.jpg",
      },
    ].map((member, i) => (
      <motion.div
        key={i}
        className="col-12 col-sm-6 col-md-4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.8 }}
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            y: -10,
            boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
          }}
          transition={{ type: "spring", stiffness: 150 }}
          className="p-4 rounded-4 shadow-lg text-center h-100 position-relative"
          style={{
            background: "linear-gradient(135deg, #17a2b8, #6dd5fa)",
            color: "#fff",
          }}
        >
          <div className="team-img-wrapper mx-auto mb-3">
            <img
              src={member.img}
              alt={member.name}
              className="rounded-circle border border-warning"
            />
          </div>
          <h5 className="fw-bold mb-2">{member.name}</h5>
          <h6 className="text-warning mb-2">{member.role}</h6>
          <p className="small lh-lg">{member.desc}</p>
        </motion.div>
      </motion.div>
    ))}
  </div>

  {/* Custom CSS */}
  <style>{`
    .leader-img-wrapper img,
    .team-img-wrapper img {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-width: 3px;
      transition: transform 0.4s ease, box-shadow 0.4s ease;
    }
    .leader-img-wrapper img:hover,
    .team-img-wrapper img:hover {
      transform: scale(1.15);
      box-shadow: 0 10px 25px rgba(255, 193, 7, 0.7);
    }
  `}</style>
</section>



    </>
  );
}

export default About;
