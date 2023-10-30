import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Information</h3>
            <p>Email: esharaheel11@gmail.com</p>
            {/* <p>Phone: (123) 456-7890</p> */}
          </div>
          <div className="col-md-6">
            <h3>Connect with Me</h3>
            <div className="social-icons">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-3"
              >
                <FontAwesomeIcon icon={fab.faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/esha-raheel-391694224/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-3"
              >
                <FontAwesomeIcon icon={fab.faLinkedin} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-3"
              >
                <FontAwesomeIcon icon={fab.faDiscord} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2023 Your Name. All rights reserved.</p>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
