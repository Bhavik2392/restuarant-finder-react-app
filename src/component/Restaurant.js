import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Restaurant = props => (
  //Displaying Restuarant detail 
  <section id={props.is}>
    <div className="media">
      <img className="mr-3" src={props.image_url} alt={props.name} />
      <div className="media-body">
        <h5 className="mt-0">{props.name}</h5>

        <span>Address: {props.address}</span>
        <br />
        <span>Price: {props.price}</span>
        <br />
        <span>City: {props.city}</span>
      </div>
    </div>{" "}
  </section>
);

export default Restaurant;
