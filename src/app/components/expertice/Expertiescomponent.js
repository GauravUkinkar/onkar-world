"use client"
import "./expertiescomponent.scss";

function Expertiescomponent(props) {
  return (
    <>
      <div className="e-card cursor-dark">
        <div className="card-overlay cursor-dark"></div>
        <div className="e-icon-box cursor-dark">
          <div className="icon">
            <image src={props.img}  alt="none" className="e-icon-img" />
            <image src={props.img_hover} alt="none" className="e-icon-img-hover" />

          </div>
        </div>
        <div className="e-card-content cursor-dark">
          <h3 className="title3 cursor-dark">{props.cardHeading}</h3>
          <p className="e-card-p cursor-dark">{props.cardText}</p>
        </div>
      </div>
    </>
  );
}

export default Expertiescomponent;
