import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Titles from "./component/Titles";
import Form from "./component/Form";
import Restaurant from  "./component/Restaurant";

//Main APP Component
class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      error: undefined
    };
  }

  //Fetching restaurant data from the API Link
  getRestaurant = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    const api_call = await fetch(
      `http://opentable.herokuapp.com/api/restaurants?city=${city}`
    );
    const data = await api_call.json();

    if (city) {
      let list = data.restaurants.map(pic => {
        return ( 
          /* Calling Restaurant Component till last data        */
          <Restaurant
            key={pic.id}
            image_url={pic.image_url}
            name={pic.name}
            address={pic.address}
            price={pic.price}
            city={pic.city}
            error={pic.error}
          />
        );
      });
      /* setting new data to state */
      this.setState({ list: list });
    } else {
      this.setState({
        list: [],
        error: "Please Enter the Value"
      });
    }
  };

  //Rendering All component Data(FORm, Restaurant, Titles)
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-5 title-container">
                  <Titles />
                </div>

                <div className="col-7 form-container">
              
                  <Form getRestaurant={this.getRestaurant} />

                  <div className="scrolling-box">{this.state.list}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
