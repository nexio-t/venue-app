import axios from "axios";

export default {
  
    getVenue: function(query) {
      return axios.get("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Philadelphia%20Museum&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,geometry&key=AIzaSyCPlDKSVJg9tHRPI5NLhyUO-MttxqsiTgo"); 
    },

  };
  