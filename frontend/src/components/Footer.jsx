// import React from "react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-dark text-light pt-5 pb-3">
//       <div className="container">
//         <div className="row g-4">
          
//           {/* 🔹 Company Info + Address */}
//           <div className="col-lg-4 col-md-6">
//             <h2
//               className="text-uppercase fw-bold mb-3"
//               style={{
//                 color: "#ffc107",
//                 fontSize: "1.8rem",
//                 letterSpacing: "1px",
//               }}
//             >
//               Vardaan Enterprises
//             </h2>
//             {/* <p className="small text-muted mb-3">
//               Creativity • Functionality • Sustainability
//             </p>
//             <p className="small text-muted mb-3">
//               We provide world-class architectural & construction services
//               with innovation, practicality & sustainability.
//             </p> */}

//             {/* ✅ Address Section */}
//             <ul className="footer-address">
//               <li>Floor: PLOT NO 25</li>
//               <li>Building: Scheme No 54, PU-4</li>
//               <li>Street: AB Road</li>
//               <li>Landmark: C-21 Mall Ke Piche</li>
//               <li>City: Indore, District: Indore</li>
//               <li>State: Madhya Pradesh</li>
//               <li>PIN: 452001</li>
//             </ul>
//           </div>

//           {/* 🔹 Quick Links */}
//           <div className="col-lg-2 col-md-6">
//             <h5 className="text-warning text-uppercase mb-3">Quick Links</h5>
//             <ul className="list-unstyled footer-list">
//               <li><Link to="/" className="footer-link">Home</Link></li>
//               <li><Link to="/about" className="footer-link">About Us</Link></li>
//               <li><Link to="/services" className="footer-link">Services</Link></li>
//               <li><Link to="/projects" className="footer-link">Projects</Link></li>
//               <li><Link to="/career" className="footer-link">Career</Link></li>
//               <li><Link to="/reviews" className="footer-link">Reviews</Link></li>
//               <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
//             </ul>
//           </div>

//           {/* 🔹 Services */}
//           <div className="col-lg-3 col-md-6">
//             <h5 className="text-warning text-uppercase mb-3">Our Services</h5>
//             <ul className="list-unstyled footer-list">
//               <li><Link to="/services/road" className="footer-link">Road Construction</Link></li>
//               <li><Link to="/services/architecture" className="footer-link">Architecture Construction</Link></li>
//               <li><Link to="/services/land" className="footer-link">Land Development</Link></li>
//               <li><Link to="/services/commercial" className="footer-link">Commercial Building</Link></li>
//               <li><Link to="/services/interior" className="footer-link">Interior Designing</Link></li>
//               <li><Link to="/services/mep" className="footer-link">MEP Construction</Link></li>
//             </ul>
//           </div>

//           {/* 🔹 Contact Info */}
//           <div className="col-lg-3 col-md-6">
//             <h5 className="text-warning text-uppercase mb-3">Contact Us</h5>
//             <p className="mb-1">📞 <a href="tel:+918269175785" className="footer-link">+91 82691 75785</a></p>
//             <p className="mb-1">📧 <a href="mailto:example@gmail.com" className="footer-link">example@gmail.com</a></p>
//           </div>
//         </div>

//         {/* Bottom Line */}
//         <div className="text-center border-top border-secondary mt-4 pt-3 small">
//           © {new Date().getFullYear()}{" "}
//           <span className="text-warning fw-bold">Vardaan Enterprises</span>. All Rights Reserved.
//         </div>
//       </div>

//       {/* ✅ Footer CSS */}
//       <style>{`
//         .footer-link {
//           color: #bbb;
//           text-decoration: none;
//           transition: 0.3s;
//           display: block;
//           margin-bottom: 6px;
//         }
//         .footer-link:hover {
//           color: #ffc107;
//           transform: translateX(5px);
//         }
//         .footer-list {
//           padding-left: 0;
//           list-style: none;
//         }
//         .text-muted {
//           line-height: 1.5;
//         }

//         /* ✅ Address Section Styling */
//         .footer-address {
//           padding-left: 0;
//           list-style: none;
//           margin: 0;
//           margin-top: 10px;
//         }
//         .footer-address li {
//           margin-bottom: 5px;
//           color: #ccc;
//           font-size: 0.9rem;
//           line-height: 1.4;
//         }
//         .footer-address li::before {
//           content: " ";
//           color: #ffc107;
//         }
//       `}</style>
//     </footer>
//   );
// }
// import React from "react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-dark text-light pt-5 pb-3">
//       <div className="container">
//         <div className="row g-4">

//           {/* 🔹 Company Info + Address */}
//           <div className="col-lg-4 col-md-6">
//             <h2
//               className="text-uppercase fw-bold mb-3"
//               style={{
//                 color: "#ffc107",
//                 fontSize: "1.8rem",
//                 letterSpacing: "1px",
//               }}
//             >
//               Vardaan Enterprises
//             </h2>
         
//           </div>

//           {/* 🔹 Quick Links */}
//           <div className="col-lg-2 col-md-6">
//             <h5 className="text-warning text-uppercase mb-3">Quick Links</h5>
//             <ul className="list-unstyled footer-list">
//               <li><Link to="/" className="footer-link">Home</Link></li>
//               <li><Link to="/about" className="footer-link">About Us</Link></li>
//               <li><Link to="/projects" className="footer-link">Projects</Link></li>
//               <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
//               <li><Link to="/career" className="footer-link">Career</Link></li>
//               <li><Link to="/reviews" className="footer-link">Reviews</Link></li>
//             </ul>
//           </div>

//           {/* 🔹 Services */}
//           <div className="col-lg-3 col-md-6">
//             <h5 className="text-warning text-uppercase mb-3">Our Services</h5>
//             <ul className="list-unstyled footer-list">
//               <li><Link to="/services/road" className="footer-link">Road Construction</Link></li>
//               <li><Link to="/services/architecture" className="footer-link">Architecture Construction</Link></li>
//               <li><Link to="/services/land" className="footer-link">Land Development</Link></li>
            
//               <li><Link to="/services/interior" className="footer-link">Interior Designing</Link></li>
//               <li><Link to="/services/mep" className="footer-link">MEP Construction</Link></li>
//             </ul>
//           </div>

//           {/* 🔹 Contact Info */}
//           <div className="col-lg-3 col-md-6">
//             <h5 className="text-warning text-uppercase mb-3">Contact Us</h5>
//             <p className="mb-1">📞 <a href="tel:+918269175785" className="footer-link">+91 82691 75785</a></p>
//             {/* <p className="mb-1">📧 <a href="mailto:samasthiticonstructions@gmail.com" className="footer-link">samasthiticonstructions@gmail.com</a></p>
//             <p className="mb-1">🏢 A-5 near new hotel Uday Palace, Vijay Nagar, Indore, Madhya Pradesh 452010</p> */}
//               <ul className="footer-address">
//               <li>Floor: PLOT NO 25</li>
//               <li>Building: Scheme No 54, PU-4</li>
//               <li>Street: AB Road</li>
//               <li>Landmark: Behind C-21 Mall </li>
//               <li>City: Indore, District: Indore</li>
//               <li>State: Madhya Pradesh</li>
//               <li>PIN: 452001</li>
//             </ul>
//           </div>

//         </div>

//         {/* Bottom Line */}
//         <div className="text-center border-top border-secondary mt-4 pt-3 small">
//           © {new Date().getFullYear()} <span className="text-warning fw-bold">Vardaan Enterprises</span>. All Rights Reserved. | Powered by Techsaar
//         </div>
//       </div>

//       {/* ✅ Footer CSS */}
//       <style>{`
//         .footer-link {
//           color: #bbb;
//           text-decoration: none;
//           transition: 0.3s;
//           display: block;
//           margin-bottom: 6px;
//         }
//         .footer-link:hover {
//           color: #ffc107;
//           transform: translateX(5px);
//         }
//         .footer-list {
//           padding-left: 0;
//           list-style: none;
//         }
//         .text-muted {
//           line-height: 1.5;
//         }
//         /* Address Section Styling */
//         .footer-address {
//           padding-left: 0;
//           list-style: none;
//           margin: 0;
//           margin-top: 10px;
//         }
//         .footer-address li {
//           margin-bottom: 5px;
//           color: #ccc;
//           font-size: 0.9rem;
//           line-height: 1.4;
//         }
//         .footer-address li::before {
//           content: " ";
//           color: #ffc107;
//         }
//         @media (max-width: 991px) {
//           .footer-address, .footer-list {
//             text-align: left;
//           }
//         }
//       `}</style>
//     </footer>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row g-4">

          {/* 🔹 Company Logo + Address */}
          <div className="col-lg-4 col-md-6 text-center text-lg-start footer-logo-column">
            <img
              src="/assets/img/logo.png"
              alt="Vardaan Enterprises"
              className="footer-logo mb-3"
            />
            
            
          </div>
          
          

          {/* 🔹 Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="text-warning text-uppercase mb-3">Quick Links</h5>
            <ul className="list-unstyled footer-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/projects" className="footer-link">Projects</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/career" className="footer-link">Career</Link></li>
              <li><Link to="/reviews" className="footer-link">Reviews</Link></li>
            </ul>
          </div>

          {/* 🔹 Services */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-warning text-uppercase mb-3">Our Services</h5>
            <ul className="list-unstyled footer-list">
              <li><Link to="/services/road" className="footer-link">Road Construction</Link></li>
              <li><Link to="/services/architecture" className="footer-link">Architecture Construction</Link></li>
              <li><Link to="/services/land" className="footer-link">Land Development</Link></li>
               <li><Link to="/services/hospitality"className="footer-link">Commercial Building Construction</Link></li>
              <li><Link to="/services/interior" className="footer-link">Interior Designing</Link></li>
              <li><Link to="/services/mep" className="footer-link">MEP Construction</Link></li>
            </ul>
          </div>

          {/* 🔹 Contact Info */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-warning text-uppercase mb-3">Contact Us</h5>
            <a href="tel:+918269175785" className="footer-link">📞 +91 8889710105

</a>
             <a href="mailto:samasthiticonstructions@gmail.com" className="footer-link"> 📧 info@vardaanenterprise.in</a>
            <ul className="footer-address">
              <li>Floor: PLOT NO 25</li>
              <li>Building: Scheme No 54, PU-4</li>
              <li>Street: AB Road</li>
              <li>Landmark: Behind C-21 Mall</li>
              <li>City: Indore, District: Indore</li>
              <li>State: Madhya Pradesh</li>
              <li>PIN: 452001</li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="text-center border-top border-secondary mt-4 pt-3 small">
          © {new Date().getFullYear()} <span className="text-warning fw-bold">Vardaan Enterprises</span>. All Rights Reserved. | Powered by Techsaar
        </div>
      </div>

      {/* ✅ Footer CSS */}
      <style>{`
        .footer-logo {
          height: 350px; /* logo size */
          width: auto;
          transition: transform 0.3s ease;
        }
        .footer-logo:hover {
          transform: scale(1.1); /* slight zoom on hover */
        }

        .footer-link {
          color: #bbb;
          text-decoration: none;
          transition: all 0.3s ease;
          display: block;
          margin-bottom: 6px;
        }
        .footer-link:hover {
          color: #ffc107;
          transform: translateX(5px);
        }

        .footer-list {
          padding-left: 0;
          list-style: none;
        }

        .footer-address {
          padding-left: 0;
          list-style: none;
          margin: 0;
          margin-top: 10px;
          transition: all 0.3s ease;
        }
        .footer-address li {
          margin-bottom: 5px;
          color: #ccc;
          font-size: 0.9rem;
          line-height: 1.4;
          cursor: default;
        }
        .footer-address li:hover {
          color: #ffc107;
        }
        .footer-address li::before {
          content: " ";
          color: #ffc107;
        }

        .footer-logo-column {
          transition: all 0.3s ease;
        }

        @media (max-width: 991px) {
          .footer-address, .footer-list {
            text-align: left;
          }
          .text-lg-start {
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
