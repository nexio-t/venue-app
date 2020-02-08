import axios from "axios";

export default {

    // API Call to 
  
    getVenue: function(query) {
        
      const url = "https://cors-anywhere.herokuapp.com/"; 
      const googleUrl = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + query + "&inputtype=textquery&fields=photos,formatted_address,place_id,name,opening_hours,geometry&key=AIzaSyCPlDKSVJg9tHRPI5NLhyUO-MttxqsiTgo";

      // Proxy adds Access-Control-Allow-Origin header to the response 
      return axios.get(url + googleUrl); 
    },

    // API Call to Place Details
    getVenueDetails: function(query) {

        const url = "https://cors-anywhere.herokuapp.com/"; 
        const googleUrl = "https://maps.googleapis.com/maps/api/place/details/json?place_id=" + query + "&fields=name,opening_hours,website,price_level,review,user_ratings_total,icon,types,url,vicinity,rating,formatted_phone_number&key=AIzaSyCPlDKSVJg9tHRPI5NLhyUO-MttxqsiTgo"

        return axios.get(url + googleUrl); 
    }

  };
  