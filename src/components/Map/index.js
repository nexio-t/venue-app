import React, { Component } from "react";
import "./style.css";
import "bulma/css/bulma.css";

class Map extends Component {

    //   componentDidMount() {
    //     this.renderMap();
    //   }

    componentDidUpdate() {

        if (!this.props.userTyping) {
            this.renderMap(); 
        }
       
    }
    
      renderMap = () => {
        loadScript(
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyAqMhysRXqdWYWpzfxHxkxe3_SqVP-UnIo&callback=initMap"
        );
        window.initMap = this.initMap;
      };
    
      initMap = () => {
        var map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: this.props.latitude, lng: this.props.longitude },
          zoom: 16
        });

        var marker = new window.google.maps.Marker({
            position: {
              lat: this.props.latitude,
              lng: this.props.longitude
            },
            map: map
          });

      };
    
      render() {
        console.log(this.state);
        console.log("Map Props: ", this.props); 
        return (
          <div>
              
              <div id="map"></div>
        
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
