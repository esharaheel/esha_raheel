import Header from "../Header";
import Demo from "../assets/demo.png";
import GraphicDesign from "../assets/graphic.png";
import WebDeisgn from "../assets/web.png";
import Footer from "../Footer";
function Projects() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-12 my-3">
          <h1 className="text-center py-3 blue-color">
            Explore My Portfolio: A Showcase of Past Triumphs
          </h1>
          <div className="row d-flex justify-content-center">
            <div className="col-3 card mx-3 hover">
              <a
                href="https://www.figma.com/file/YxniuHSoVXFp2TaIdPoohy/Human-Computer-Interaction-Project?type=design&node-id=0-1&mode=design"
                target="_blank"
              >
                <div className="card-body text-center">
                  <div className="d-flex justify-content-center">
                    <img className="project-cover" src={Demo}></img>
                  </div>
                  <h3 className="my-3 blue-color">E-Banking System</h3>
                  <p>
                    E-Bank Application is a comprehensive financial platform for
                    both users and administrators. Users enjoy easy account
                    management, transfers, bill payments, and more.
                    Administrators benefit from efficient oversight.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-3 card mx-3 hover">
              <a
                href="https://www.figma.com/file/YxniuHSoVXFp2TaIdPoohy/Human-Computer-Interaction-Project?type=design&node-id=0-1&mode=design"
                target="_blank"
              >
                <div className="card-body text-center">
                  <div className="d-flex justify-content-center">
                    <img className="project-cover" src={Demo}></img>
                  </div>
                  <h3 className="my-3 blue-color">E-Banking System</h3>
                  <p>
                    E-Bank Application is a comprehensive financial platform for
                    both users and administrators. Users enjoy easy account
                    management, transfers, bill payments, and more.
                    Administrators benefit from efficient oversight.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-3 card mx-3 hover">
              <a
                href="https://www.figma.com/file/YxniuHSoVXFp2TaIdPoohy/Human-Computer-Interaction-Project?type=design&node-id=0-1&mode=design"
                target="_blank"
              >
                <div className="card-body text-center">
                  <div className="d-flex justify-content-center">
                    <img className="project-cover" src={Demo}></img>
                  </div>
                  <h3 className="my-3 blue-color">E-Banking System</h3>
                  <p>
                    E-Bank Application is a comprehensive financial platform for
                    both users and administrators. Users enjoy easy account
                    management, transfers, bill payments, and more.
                    Administrators benefit from efficient oversight.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
