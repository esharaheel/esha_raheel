import Header from "../Header";
import Banking from "../assets/e_banking.jpg";
import Signup from "../assets/signup.jpg";
import Commerce from "../assets/E_Commerce.jpg";
import Surveillance from "../assets/smart_surveillance.png";
import Restaurant from "../assets/e_restaurant.png";
import TWOT from "../assets/TWOT.jpg";

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
                href="https://www.figma.com/file/IQLrA72h83pbarKElxVYQo/Untitled?type=design"
                target="_blank"
              >
                <div className="card-body text-center">
                  <div className="d-flex justify-content-center">
                    <img className="project-cover" src={Surveillance}></img>
                  </div>
                  <h3 className="my-3 blue-color">Smart Surveillance</h3>
                  <p>An AI Empowered Threat Detection & Prevention System</p>
                </div>
              </a>
            </div>
            <div className="col-3 card mx-3 hover">
              <a
                href="https://www.figma.com/file/l84Krd8H4PokMLqX4x68N2/E-Restaurant?type=design&mode=design&t=WUymgWgb7ya86aIN-1"
                target="_blank"
              >
                <div className="card-body text-center">
                  <div className="d-flex justify-content-center">
                    <img className="project-cover" src={Restaurant}></img>
                  </div>
                  <h3 className="my-3 blue-color">E- Restaurant</h3>
                  <p>
                    An online platform for food ordering, menu exploration, and
                    restaurant reservations
                  </p>
                </div>
              </a>
            </div>
            <div className="col-3 card mx-3 hover">
              <a
                href="https://www.figma.com/file/l84Krd8H4PokMLqX4x68N2/E-Restaurant?type=design&mode=design&t=WUymgWgb7ya86aIN-1"
                target="_blank"
              >
                <div className="card-body text-center">
                  <div className="d-flex justify-content-center">
                    <img className="project-cover" src={TWOT}></img>
                  </div>
                  <h3 className="my-3 blue-color">The World of Travel</h3>
                  <p>
                    A digital service for planning and booking travel
                    itineraries, food, and accommodations.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-3 card mx-3 my-4 hover">
              <a
                href="https://www.figma.com/file/YxniuHSoVXFp2TaIdPoohy/Human-Computer-Interaction-Project?type=design&node-id=0-1&mode=design"
                target="_blank"
              >
                <div className="card-body text-center">
                  <div className="d-flex justify-content-center">
                    <img className="project-cover" src={Banking}></img>
                  </div>
                  <h3 className="my-3 blue-color">E-Banking System</h3>
                  <p>
                    An online financial system providing secure account access,
                    transactions, and account information.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-3 card mx-3 my-4 hover">
              <a
                href="https://www.figma.com/file/D9L8jqg0T5D3wMdEmKruiV/1-SIgup-Pages?type=design&node-id=0-1&mode=design&t=hrohg9IXKRCNc4kM-0"
                target="_blank"
              >
                <div className="card-body text-center">
                  <div className="d-flex justify-content-center">
                    <img className="project-cover" src={Signup}></img>
                  </div>
                  <h3 className="my-3 blue-color">SignUp Page</h3>
                  <p>
                    A user registration interface for creating accounts and
                    accessing online services.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-3 card mx-3 my-4 hover">
              <a
                href="https://www.figma.com/file/CXUIMTncMQryRX5kGoUkXn/Scott-eCommerce-V1?type=design&node-id=0-1&mode=design&t=hrohg9IXKRCNc4kM-0"
                target="_blank"
              >
                <div className="card-body text-center">
                  <div className="d-flex justify-content-center">
                    <img className="project-cover" src={Commerce}></img>
                  </div>
                  <h3 className="my-3 blue-color">E-Shopping Store</h3>
                  <p>
                    An e-commerce platform for online shopping, product
                    browsing, and purchases.
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
