import React from "react";
import "./headerSlide.css";
function HeaderSlide() {
  return (
    <div className="container">
      <div className="row">
        <div className="frame">
          <div className="boxes">
            <div
              className="box box-1"
              style={{
                backgroundImage: "url(https://picsum.photos/1200/300?image=3)",
              }}
            >
              <span className="text">Read more...</span>
            </div>
            <div
              className="box box-2"
              style={{
                backgroundImage: "url(https://picsum.photos/1200/300?image=1)",
              }}
            >
              <span className="text">Read more...</span>
            </div>
            <div
              className="box box-3"
              style={{
                backgroundImage: "url(https://picsum.photos/1200/300?image=2)",
              }}
            >
              <span className="text">Read more...</span>
            </div>
            <div
              className="box box-4"
              style={{
                backgroundImage: "url(https://picsum.photos/1200/300?image=6)",
              }}
            >
              <span className="text">Read more...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSlide;
