import React, { Component } from "react";
import Container from "../../components/Container";
import Searchbox from "../../components/Searchbox";
import Map from "../../components/Map";
import API from "../../utils/API";
import VenueCard from "../../components/VenueCard";

class HomePage extends Component {
  state = {
    userSearch: "",
    address: "",
    name: "",
    locationLat: "",
    locationLong: "",
    photoReference: "",
    place_id: "",
    hours: "",
    website: "",
    googleMapsUrl: "",
    types: "",
    reviews: "",
    rating: "",
    icon: "",
    phone: "",
    venueImg: "",
    status: "",
    userTyping: false
  };

  handleInputChange = event => {
    let value = event.target.value;
    let name = event.target.name;

    this.setState({
      [name]: value,
      userTyping: true
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ userTyping: false });

    API.getVenue(this.state.userSearch)
      .then(res => {

        this.setState({
          address: "",
          name: "",
          locationLat: "",
          locationLong: "",
          photoReference: "",
          venueImg: "",
          place_id: "",
          status: ""
        });

        let address,
          name,
          locationLat,
          locationLong,
          photoReference,
          place_id,
          venueImg,
          status;

        address = res.data.candidates[0].formatted_address;
        name = res.data.candidates[0].name;
        locationLat = res.data.candidates[0].geometry.location.lat;
        locationLong = res.data.candidates[0].geometry.location.lng;
        photoReference = res.data.candidates[0].photos[0].photo_reference;
        place_id = res.data.candidates[0].place_id;
        venueImg =
          "https://maps.googleapis.com/maps/api/place/photo?maxheight=300&photoreference=" +
          photoReference +
          "&key=AIzaSyCPlDKSVJg9tHRPI5NLhyUO-MttxqsiTgo";
        status = res.data.status;

        this.setState({
          address,
          name,
          locationLat,
          locationLong,
          photoReference,
          venueImg,
          place_id,
          status
        });

        this.getVenueDetails(place_id)
      })
      .catch(err => console.log(err));
  };

  // Separate call using the Google Maps Places Details API for additional venue details
  getVenueDetails = placeId => {
    API.getVenueDetails(placeId)
      .then(res => {
        let website, googleMapsUrl, types, reviews, rating, icon, phone, hours;

        website = res.data.result.website;
        googleMapsUrl = res.data.result.url;
        types = res.data.result.types;
        reviews = res.data.result.reviews;
        rating = res.data.result.rating;
        icon = res.data.result.icon;
        phone = res.data.result.formatted_phone_number;
        // hours = res.data.result.opening_hours.weekday_text;

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
    return (
      <Container>
        <Searchbox
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          value={this.state.userSearch}
        />
        {this.state.name ? (
          <div className="columns">
            <div className="column">
              <VenueCard
                address={this.state.address}
                name={this.state.name}
                photoReference={this.state.photoReference}
                website={this.state.website}
                googleMapsUrl={this.state.googleMapsUrl}
                hours={this.state.hours}
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
                address={this.state.address}
                name={this.state.name}
                venueImg={this.state.venueImg}
              />
            </div>
          </div>
        ) : (
          <div>No search results to display</div>
        )}
      </Container>
    );
  }
}

export default HomePage;
