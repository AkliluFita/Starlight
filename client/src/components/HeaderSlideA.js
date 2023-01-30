import React from "react";
import "./headerSlideA.css";

import img1 from "../images/hpScannerOne.jpg";
import img2 from "../images/computerScreen.png";
// import img3 from "../images/serverScreen.jpg";
import img4 from "../images/scurityScreen.jpg";

function HeaderSlideA() {
  return (
    <div className="HeaderSlideA">
      <div className="banner1 slide1">
        <img className="slideImg" src={img1} alt="" />
        <div className="text-box zoom1">
          <div className="descPro">
            <h2> Computer accessories and other related products</h2>
            <hr />
            <p className="headerText">
              {" "}
              Accessories can add additional functions to your computers. Others
              make your daily work more comfortable or easier. Some will come
              with your computer as standard, while others can be added as
              required Accessories such as a keyboard and mouse may be essential
              in order to operate your computer. Others - such as headphones,
              cameras, graphics tablets and barcode readers - may be useful for
              specialist tasks or the facilitate certain ways of working.
            </p>
          </div>
        </div>
      </div>
      <div className="banner2 slide2">
        <img className="slideImg" src={img2} alt="" />

        <div className="text-box zoom2">
          <div className="descPro">
            <h2>Different types of Computer and Servers</h2>
            <hr />
            <p className="headerText">
              {" "}
              We have super qualified Computer and server computers that are
              high-performance computer designed to handle, store, and manage
              network data, devices, and systems. Servers are the engines that
              drive businesses by supplying network devices and systems with
              adequate resources. Servers are essential for organizations since
              they provide scalability, efficiency, and business continuity
              capabilities. Servers can perform the same tasks that a standard
              desktop PC is capable of with some extras. On the other hand,
              desktop computers can execute server processes but at a far lower
              performance level.
            </p>
          </div>
        </div>
      </div>

      <div className="banner4 slide4">
        <img className="slideImg" src={img4} alt="" />

        <div className="text-box zoom4">
          <span className="descPro">
            <h2> Security , Surveillance Camera and its accessories</h2>
            <hr />

            <p className="headerText">
              When it comes to securing your business, there are many different
              types of CCTV to choose from. Surveillance plays a huge part in
              today’s society, and with cameras all around us, our day-to-day
              lives are experiencing higher levels of security each day. What
              many people don’t know, however, in our compony variety of
              different types of security camera which suit different situations
              or premises, and that selecting the proper camera for the right
              application really is vital.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeaderSlideA;
