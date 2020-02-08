import axios from "axios";

export default {
  
    getVenue: function(query) {
        
      const url = "https://cors-anywhere.herokuapp.com/"; 
      const googleUrl = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + query + "&inputtype=textquery&fields=photos,formatted_address,place_id,name,opening_hours,geometry&key=AIzaSyCPlDKSVJg9tHRPI5NLhyUO-MttxqsiTgo";

      // Proxy adds Access-Control-Allow-Origin header to the response 
      return axios.get(url + googleUrl); 
    }

  };
  