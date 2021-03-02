import axios from "axios";

export default {
  
    getVenue: function(query) {
        
      const url = "https://aqueous-atoll-87775.herokuapp.com/"; 
      const googleUrl = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" + query.trim() + "&inputtype=textquery&fields=photos,formatted_address,place_id,name,opening_hours,geometry&key=AIzaSyCPlDKSVJg9tHRPI5NLhyUO-MttxqsiTgo";

      return axios.get(url + googleUrl); 
    },

    // API Call to Place Details
    getVenueDetails: function(query) {

        const url = "https://aqueous-atoll-87775.herokuapp.com/"; 
        const googleUrl = "https://maps.googleapis.com/maps/api/place/details/json?place_id=" + query + "&fields=name,opening_hours,website,price_level,review,user_ratings_total,icon,types,photo,url,vicinity,rating,formatted_phone_number&key=AIzaSyCPlDKSVJg9tHRPI5NLhyUO-MttxqsiTgo"

        return axios.get(url + googleUrl); 
    }

  };
  