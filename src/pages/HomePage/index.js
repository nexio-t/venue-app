import React, { Component } from "react";
import Container from "../../components/Container";
import Searchbox from "../../components/Searchbox";
import API from "../../utils/API";
import VenueCard from "../../components/VenueCard";

class HomePage extends Component {

  state = {
      userSearch: ""
  }

  handleInputChange = event => {

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

      let address, name, openNow, locationLat, locationLong, photoReference, place_id; 

      address = res.data.candidates[0].formatted_address; 
      name = res.data.candidates[0].name; 
      openNow = res.data.candidates[0].opening_hours.open_now; 
      locationLat = res.data.candidates[0].geometry.location.lat; 
      locationLong = res.data.candidates[0].geometry.location.lng; 
      photoReference = res.data.candidates[0].photos[0].photo_reference; 
      place_id = res.data.candidates[0].place_id; 

      console.log("Address: ", address); 
      console.log("Name: ", name); 
      console.log("Open now:", openNow); 
      console.log("latitude: ", locationLat); 
      console.log("longitude: ", locationLong); 
      console.log("photo Reference: ", photoReference); 
      console.log("place_id: ", place_id); 
     
      this.getVenueDetails(place_id); 
    
    })
    .catch(err => console.log(err));

  };

  getVenueDetails = placeId => {

    API.getVenueDetails(placeId)
    .then(res => {
        console.log("Venue Details: ", res); 
    })
    .catch(err => console.log(err)); 

  }
  
  render() {
    console.log(this.state); 
    return (
      <Container>
        <Searchbox
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          value={this.state.userSearch}
        />
        <VenueCard/>
      </Container>
    );
  }
}

export default HomePage;
