import React, { Component } from "react";
import Container from "../../components/Container";
import Searchbox from "../../components/Searchbox";
import API from "../../utils/API";

class HomePage extends Component {

  state = {
      userSearch: ""
  }

  // Test API Call
  testAPICall = () => {
   
  };

  handleInputChange = event => {

    // console.log("HomePage handleInputChange event.target: ", event.target);
    // console.log("HomePage handleInputChange event.target.value: ", event.target.value);

    let value = event.target.value; 
    let name = event.target.name; 

    // updating the input field's state 
    this.setState({
        [name]: value
      });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("HomePage handleFormSubmit");
    // API Place Search 

    API.getVenue(this.state.userSearch)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));

    // API Place Details 

        // populate card with that information 
  };

  render() {
    console.log(this.state); 
    return (
      <Container>
        <Searchbox
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          value={this.state.userSearch}
        />
      </Container>
    );
  }
}

export default HomePage;
