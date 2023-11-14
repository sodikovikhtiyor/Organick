import React from "react";
import mashrooms from "../../assets/mashrooms.svg";
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import Whycard from "../whycards/Whycard";
function Whywe() {
  return (
    <div className="believe">
      <div className="believe-container">
        <div className="half">
          <p className="title">Why Choose us?</p>
          <h1>We do not buy from the open market & traders.</h1>
          <p>
          Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown
          </p>
          <div className="believeLists">
            <div className="believeList">
              <div className="whymeListText">
                <h4><TripOriginIcon className="icon"/> 100% Natural Product</h4>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="believeList">
              <div className="whymeListText">
                <h4><TripOriginIcon className="icon"/> Increases resistance</h4>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="half">
          <img src={mashrooms} alt="img" />
        </div>
        <Whycard/>
      </div>
    </div>
  );
}

export default Whywe;
