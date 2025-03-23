import React, { useState } from "react";
import "./header.css";
import useTrack from "../../hooks/useTrack";
import { Link } from "react-router-dom";

const Header = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [boolData, setBoolData] = useState(false);

  const { track } = useTrack();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await track(trackingNumber);
    setBoolData(true);
    //console.log(data.data.trackings[0].events);
  }

  function handleChange(e) {
    setTrackingNumber(e.target.value);
  }
  return (
    <div className="header">
      <div className="left">
        <div className="search-div">
          <h3>
            <p>Track packages from Amazon , Ali Baba,Flipkart</p>
            and 300+ more Couriors
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={trackingNumber}
              className="input"
              onChange={handleChange}
            />
            {/* <input type="submit" value="Track" className="header-btn" /> */}
          </form>
          <div></div>
          <br />
          <button
            type="button"
            className="search-div-button"
            onClick={handleSubmit}
          >
            FIND
          </button>
        </div>
        <div>
          {boolData && (
            <button className="see-report">
              <Link
                to={"/dashboard"}
                style={{ textDecoration: "none", color: "white" }}
              >
                See Report
              </Link>
            </button>
          )}
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Header;
// take this tracking id to make it work
// "9405511206210614641491"
