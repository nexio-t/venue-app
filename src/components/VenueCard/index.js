import React from "react";
import "./style.css";
import "bulma/css/bulma.css";

const VenueCard = props => {

  return (
    <div>
                  {console.log(props)};  
      <section className="container">
        <div className="columns features">
          <div className="column is-4 modal-button" data-target="modal-card">
            <div className="card is-shady">
              <div className="card-image ">
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Venue Title</p>
                  </div>
                </div>
                <div className="content">
                  <p>Address</p>
                  <p>Open Now</p>
                  <p>Average Rating</p>
                  <span className="button is-link modal-button">
                    {" "}
                    more info....
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
