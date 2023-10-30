import Header from "../Header";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-12 my-3">
          <h1 className="text-center py-3 blue-color">
            Feel free to contact me
          </h1>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div className="">
                <h2>
                  <a href="mailto:esharaheel11@gmail.com" className="mx-3">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                  Gmail
                </h2>
                <h2>
                  <a
                    href="https://www.linkedin.com/in/esha-raheel-391694224/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <FontAwesomeIcon icon={fab.faLinkedin} />
                  </a>
                  LinkedIn
                </h2>
                <h2>
                  <a
                    href="https://discord.com/channels/@me/1167842398429253795"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-3"
                  >
                    <FontAwesomeIcon icon={fab.faDiscord} />
                  </a>
                  Discord
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
