import React from "react";
import "./PortfolioSingle.scss";
import Showcase from "../about-showcase/Showcase";
import yejevika from "../../assets/yejevika.png";
import carrot from "../../assets/carrot.png";
import Subscribe from "../subscribe/Subscribe";
function PortfolioSIngle() {
  return (
    <div className="portfolio-single">
      <Showcase backgroundImage={yejevika} height="100vh" />
      <div className="portfolio-container">
        <div className="single-desc">
          <div className="half">
            <h1>Black Raspberry</h1>
            <p>
              Established fact that a reader will be distracted by the readable
              content of a page when looking a layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed
            </p>
          </div>
          {/* <div></div> */}
          <div className="half">
            <ul>
              <li>
                <b>
                  <span>Date</span> <span>:</span>
                </b>

                <p>December 4, 2022</p>
              </li>
              <li>
                <b>
                  <span>Client</span> <span>:</span>
                </b>

                <p>Kevin Martin</p>
              </li>
              <li>
                <b>
                  <span>Category</span> <span>:</span>
                </b>

                <p>Agriculture , Eco</p>
              </li>
              <li>
                <b>
                  <span>Service</span> <span>:</span>
                </b>

                <p>Organic Products</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="farm">
          <h1>About The Farm:</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. <br />
            <br /> Many desktop publishing packages and web page editors now use
            Lorem Ipsum as their default model text, and auncover many web sites
            still in their infancy. Various versions have evolved over the years
          </p>
          <img src={carrot} alt="" />
          <span>The Organic Products</span>
          <h1>How To Farm:</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. <br />
            <br />
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and auncover many web sites still
            in their infancy. Various versions have evolved over the years
          </p>
          <h1>Conclusion:</h1>
          <p>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking a layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it
            look like readable English. <br />
            <br /> Many desktop publishing packages and web page editors now use
            Lorem Ipsum as their default model text, and auncover many web sites
            still in their infancy. Various versions have evolved over the years
          </p>
        </div>
        <Subscribe />
      </div>
    </div>
  );
}

export default PortfolioSIngle;
