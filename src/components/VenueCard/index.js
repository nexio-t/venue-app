import React from "react";
import "./style.css";
import "bulma/css/bulma.css";

const VenueCard = props => {

  return (
    <div>  
      {console.log("Props Line 19:", props)}   
      <section className="container">
        <div className="columns features">
          <div className="column is-4 modal-button" data-target="modal-card">
            <div className="card is-shady">
              <div className="card-image ">
                <figure className="image is-4by3">
                  <img
                    className="venueImage"
                    src={props.venueImg}
                    alt={props.name}
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src={props.icon}
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{props.name}</p>
                  </div>
                </div>
                <div className="content">
                  <p>Address: {props.address}</p>
                  <p>Average Rating: {props.rating}</p>
                  <span className="button is-link modal-button">
                    {" "}
                    More Information
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer></footer>{" "}
    </div>
  );
};

export default VenueCard;
