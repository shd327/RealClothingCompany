import React from "react";

function Card(props) {
  return (
    <>
      {/* <div className="card"> */}
      {/* Card componenet */}

      <div className="card">
        <img src={props.image} alt="t-shirt" className="filler-image" />
        <p>{props.title}</p>
        <p>{props.description}</p>
        <p>{props.price}</p>
      </div>

      {/* </div> */}
    </>
  );
}

export default Card;
