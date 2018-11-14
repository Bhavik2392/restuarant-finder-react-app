import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Titles from "./component/Titles";
import Form from "./component/Form";
import Weather from "./component/Restaurant";

//const API_KEY = "dddddddddd"
class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      error: undefined
    };
  }

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
          <Weather
            key={pic.id}
            name={pic.name}
            address={pic.address}
            price={pic.price}
            city={pic.city}
            error={pic.error}
          />
        );
      });
      this.setState({ list: list });
    } else {
      this.setState({
        list: [],
        error: "Please Enter the Value"
      });
    }
  };

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
                  <table className="table">
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Price</th>
                        <th scope="col">City</th>
                      </tr>
                    </thead>
                    <tbody className="scrolling-box">{this.state.list}</tbody>
                  </table>
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
