import React from "react";

function CardServices(props) {
  return (
    <>
      <div className="col-lg-4 col-sm-6 mb-4">
        <div data-aos="flip-left" data-aos-duration="2000">
          <div className="populer-item">
            <img className="img-fluid" src={props.url} alt="" />
            <div className="Populer-caption">
              <h4 className="Populer-caption-heading">{props.nama}</h4>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardServices;
