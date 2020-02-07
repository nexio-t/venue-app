import React, { Component } from "react";
import Container from "../../components/Container";
import Searchbox from "../../components/Searchbox"; 
import API from "../../utils/API"; 

class HomePage extends Component {


// Test API Call
testAPICall = () => {

    API.getVenue()
        .then(res => {
            console.log(res); 
        })
        .catch( err => console.err(err)); 

}


// To-Dos
    // build searchbox
    // capture searchbox input 
    // send it through to API and process call 
    // build navbar (mainly just to display information)

  render() {
    return (
    <Container>
        <Searchbox/>
        <div>
            <h1>Home Page</h1>
        </div>
    </Container>
    );
  }
}

export default HomePage;
