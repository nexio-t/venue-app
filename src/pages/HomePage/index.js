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

    API.getVenue(this.state.userSearch)
    .then(res => {
      console.log(res.data.candidates[0]);

      let address = res.data.candidates[0].formatted_address; 
      let name = res.data.candidates[0].name; 
      let openNow = res.data.candidates[0].opening_hours.open_now; 
      let locationLat = res.data.candidates[0].geometry.location.lat; 
      let locationLong = res.data.candidates[0].geometry.location.lng; 
      let photoReference = res.data.candidates[0].photos[0].photo_reference; 
      let place_id = res.data.candidates[0].place_id; 

      console.log(address); 
      console.log(name); 
      console.log(openNow); 
      console.log(locationLat); 
      console.log(locationLong); 
      console.log(photoReference); 
      console.log(place_id); 

      // make a seperate API call to the photos API

      // (1) capture relevant information 
      // (2) display relevant information 
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
