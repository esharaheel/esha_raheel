import Header from "../Header";
import UX_UI from "../assets/ux_ui.png";
import GraphicDesign from "../assets/graphic.png";
import WebDeisgn from "../assets/web.png";
import Footer from "../Footer";

function Services() {
  return (
    <div>
      <Header/>
      <div className="row">
        <div className="col-12 my-5">
          <h1 className="text-center py-3 blue-color">
            What Services you will Get from me!
          </h1>
          <div className="row d-flex justify-content-center">
            <div className="col-3 card mx-3 py-5">
              <div className="card-body text-center">
                <div className="d-flex justify-content-center">
                  <div className="design-icon d-flex justify-content-center align-items-center">
                    <img className="image" src={UX_UI}></img>
                  </div>
                </div>
                <h3 className="my-3 blue-color">UI/UX Design</h3>
                <p>
                  Are you looking to enhance your digital presence, captivate
                  your audience, and elevate user experiences? I'm here to help
                  you achieve just that. As a UX/UI designer, I bring a range of
                  services and expertise to the table to create visually
                  stunning and user-friendly digital solutions.
                </p>
              </div>
            </div>
            <div className="col-3 card mx-3 py-5">
              <div className="card-body text-center">
                <div className="d-flex justify-content-center">
                  <div className="design-icon d-flex justify-content-center align-items-center">
                    <img className="image" src={GraphicDesign}></img>
                  </div>
                </div>
                <h3 className="my-3 blue-color">Graphics Design</h3>
                <p>
                  I offer a range of services that are tailored to meet your
                  visual communication needs. When you choose me as your graphic
                  designer, you're not just getting a service; you're gaining a
                  creative partner dedicated to bringing your ideas to life
                  through stunning visual solutions. Let's work together to
                  create designs that leave a lasting impression.
                </p>
              </div>
            </div>
            <div className="col-3 card mx-3 py-5">
              <div className="card-body text-center">
                <div className="d-flex justify-content-center">
                  <div className="design-icon d-flex justify-content-center align-items-center">
                    <img className="image" src={WebDeisgn}></img>
                  </div>
                </div>
                <h3 className="my-3 blue-color">Website Design</h3>
                <p>
                  As a passionate and experienced website designer, I am
                  committed to helping you achieve your online goals. With a
                  keen eye for aesthetics, a deep understanding of user
                  experience, and a focus on functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
