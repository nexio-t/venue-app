import React, { Component } from "react";
import "./style.css";
import "bulma/css/bulma.css";

class Map extends Component {


  componentDidUpdate() {
    if (!this.props.userTyping) {
      this.renderMap();
    }

  }


  // Function to render map
  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAqMhysRXqdWYWpzfxHxkxe3_SqVP-UnIo&callback=initMap"
    );

    window.initMap = this.initMap;
    
  

  };

  // Function to center map on user search, create map marker, and create marker info window
  initMap = () => {

    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: this.props.latitude, lng: this.props.longitude },
      zoom: 16
    });

    var infoWindow = new window.google.maps.InfoWindow(),
      marker,
      i;

    // Creates new map marker
    var marker = new window.google.maps.Marker({
      position: {
        lat: this.props.latitude,
        lng: this.props.longitude
      },
      icon: "https://img.icons8.com/dusk/64/000000/marker.png",
      map: map
    });

    // Adds click event listener to marker 
    window.google.maps.event.addListener(
      marker,
      "click",
      ((marker, i) => {
        return () => {
          infoWindow.setContent(
            "<span style='font-weight:bold;font-size:14px!important;'>" +
              this.props.name +
              "<span/>" +
              "<br/>" +
              "<p style='font-weight:normal;font-size:12px!important;' >" +
              this.props.address +
              "<p/>"
          );
          infoWindow.open(map, marker);
        };
      })(marker, i)
    );
      this.loaded(); 
  };

  loaded = () => {
    console.log("loaded"); 
  }

  render() {
    return (
      <div>
  {(this.props) ? (<div id="map"></div>) : <div>"Sorry, no map"</div>}
      </div>
    );
  }
}

function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0];
  let script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default Map;
