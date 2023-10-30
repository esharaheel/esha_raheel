import Header from "../Header";
import HeroImage from "../assets/hero_image.png";
import UX_UI from "../assets/ux_ui.png";
import GraphicDesign from "../assets/graphic.png";
import WebDeisgn from "../assets/web.png";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <Header/>
      <div className="row ">
        <div className="col-12 d-flex justify-content-center">
          <div className="col-6">
            <div className="hero-caption default-margin">
              <h1 className="name blue-color">I'm Designer</h1>
              <h1 className="name blue-color">Esha Raheel</h1>
              <p>
                I'm a Graphic & UI/UX Designer with expertise in Adobe
                Illustrator, Photoshop, Canva, Figma, and Balsamiq. My creative
                approach and attention to detail allow me to design visually
                captivating graphics and craft intuitive user experiences. Let's
                collaborate on bringing your ideas to life!
              </p>
              <button className="btn btn-primary">Hire Me</button>
            </div>
          </div>
          <div className="col-6">
            <img src={HeroImage} className="hero-image" />
          </div>
        </div>
      </div>
      <div className="row bg-white">
        <div className="col-12 d-flex justify-content-center">
          <div className="col-6">
            <div className=" default-margin">
              <h2>Designing With Passion While Exploring The World.</h2>
              <p className="my-3">
                As a UI/UX, graphics, and website designer, I blend creativity
                and functionality to create visually stunning and user-friendly
                digital experiences. With a passion for design that knows no
                bounds, I embark on a journey to explore the ever-evolving world
                of aesthetics and technology.
              </p>
              <p>
                {" "}
                Every project I undertake is a unique adventure, where
                innovation and user satisfaction converge to make every pixel
                count.
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className=" default-margin">
              <h1>Any Type Of Query & Discussion.</h1>
              <h3 className="text-secondary">Let's talk</h3>
              <h5 className="fw-bold">
                <a href="mailto:esharaheel11@gmail.com">
                  esharaheel11@gmail.com
                </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
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

export default Home;
