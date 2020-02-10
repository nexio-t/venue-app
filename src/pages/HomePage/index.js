import React, { Component } from "react";
import Container from "../../components/Container";
import Searchbox from "../../components/Searchbox";
import Map from "../../components/Map";
import API from "../../utils/API";
import VenueCard from "../../components/VenueCard";
// import { tsImportEqualsDeclaration } from "@babel/types";

class HomePage extends Component {
  state = {
    userSearch: "",
    address: "",
    name: "",
    locationLat: "",
    locationLong: "",
    photoReference: "",
    place_id: "",
    website: "",
    googleMapsUrl: "",
    types: "",
    reviews: "",
    rating: "",
    icon: "",
    phone: "",
    venueImg: "",
    userTyping: false
  };

  handleInputChange = event => {
    let value = event.target.value;
    let name = event.target.name;

    // updating the input field's state
    this.setState({
      [name]: value,
      userTyping: true
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ userTyping: false });

    // Call to Google Maps Places to fetch general venue information and place id to make another call for more detailed information
    API.getVenue(this.state.userSearch)
      .then(res => {
        console.log(res.data.candidates[0]);

        let address,
          name,
          locationLat,
          locationLong,
          photoReference,
          place_id,
          venueImg;

        address = res.data.candidates[0].formatted_address;
        name = res.data.candidates[0].name;
        locationLat = res.data.candidates[0].geometry.location.lat;
        locationLong = res.data.candidates[0].geometry.location.lng;
        photoReference = res.data.candidates[0].photos[0].photo_reference;
        place_id = res.data.candidates[0].place_id;
        venueImg =
          "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" +
          photoReference +
          "&key=AIzaSyCPlDKSVJg9tHRPI5NLhyUO-MttxqsiTgo";

        //   console.log("Address: ", address);
        //   console.log("Name: ", name);
        //   console.log("latitude: ", locationLat);
        //   console.log("longitude: ", locationLong);
        //   console.log("photo Reference: ", photoReference);
        //   console.log("place_id: ", place_id);

        this.setState({
          address,
          name,
          locationLat,
          locationLong,
          photoReference,
          venueImg,
          place_id
        });

        this.getVenueDetails(place_id);
      })
      .catch(err => console.log(err));
  };

  // Separate call using the Google Maps Places Details API for additional venue details
  getVenueDetails = placeId => {
    API.getVenueDetails(placeId)
      .then(res => {
        console.log("Venue Details: ", res);

        let website, googleMapsUrl, types, reviews, rating, icon, phone;

        website = res.data.result.website;
        googleMapsUrl = res.data.result.url;
        types = res.data.result.types;
        reviews = res.data.result.reviews;
        rating = res.data.result.rating;
        icon = res.data.result.icon;
        phone = res.data.result.formatted_phone_number;

        // console.log("website: ", website);
        // console.log("Google Maps: ", googleMapsUrl);
        // console.log("types: ", types);
        // console.log("reviews: ", reviews);
        // console.log("rating: ", rating);
        // console.log("icon: ", icon);
        // console.log("phone: ", phone);

        this.setState({
          website,
          googleMapsUrl,
          types,
          reviews,
          rating,
          icon,
          phone
        });
      })
      .catch(err => console.log(err));
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
        <div className="columns">
          <div className="column is-one-third">
            <VenueCard
            address={this.state.address}
            name={this.state.name}
            photoReference={this.state.photoReference}
            website={this.state.website}
            googleMapsUrl={this.state.googleMapsUrl}
            types={this.state.types}
            reviews={this.state.reviews}
            rating={this.state.rating}
            icon={this.state.icon}
            phone={this.state.phone}
            userTyping={this.state.userTyping}
            venueImg={this.state.venueImg}
          />

          </div>
          <div className="column is-two-thirds">
          <Map
          latitude={this.state.locationLat}
          longitude={this.state.locationLong}
          userTyping={this.state.userTyping}
        />
          </div>

        </div>

      
       
      </Container>
    );
  }
}

export default HomePage;
