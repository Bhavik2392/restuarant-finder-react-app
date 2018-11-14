import React from "react";

const Form = props => (
  // Display form data ( Right side)
  <div>
    <form onSubmit={props.getRestaurant}>
      <input type="text" name="city" placeholder="Enter City..." />
      <button>Get Restarant</button>
    </form>
  </div>
);

export default Form;
