import React, { Component } from "react";
import "./style.css";
import "bulma/css/bulma.css";
import { thisExpression } from "@babel/types";

class VenueCard extends Component {
  state = {
    active: false
  };

  constructor(props) {
    super(props);
    this.setModalActive = this.setModalActive.bind(this);
    this.setModalInactive = this.setModalInactive.bind(this);
  }

  setModalActive() {
    this.setState({ active: true });
  }

  setModalInactive() {
    this.setState({ active: false });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {/* {console.log("Props Line 19:", props)}    */}
        <section className="container">
          <div className="columns features">
            <div className="column is-4 modal-button" data-target="modal-card">
              <div className="card is-shady">
                <div className="card-image ">
                  <figure className="image">
                    <img
                      className="venueImage"
                      src={this.props.venueImg}
                      alt={this.props.name}
                      onError={(e)=>{e.target.onerror = null; e.target.src="https://via.placeholder.com/300"}}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-24x24">
                        <img src={this.props.icon} alt="Placeholder image" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{this.props.name}</p>
                    </div>
                  </div>
                  <div className="content">
                    <p>Address: {this.props.address}</p>
                    <p>Average Rating: {this.props.rating}</p>

                    {this.props.website ? <a type="button" className="button is-primary" href={this.props.website} > Website </a> : null}

                    <span
                      onClick={this.setModalActive}
                      className="button is-link modal-button"
                    >
                  
                      Reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer></footer>

        {/* Modal Start  */}
        <div className={this.state.active ? "modal is-active" : "modal"}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title is-3">{this.props.name} Reviews</p>
              <button
                onClick={this.setModalInactive}
                className="delete"
                aria-label="close"
              ></button>
            </header>
            <section className="modal-card-body">
          
              {console.log(typeof this.props.reviews)}
              {Array.from(this.props.reviews).map(item => {
                return (
                  <div className="card review-card">
                    <div className="card-content">
                      <div class="media">
                        <div class="media-left">
                          <figure class="image is-64x64">
                            <img
                              className="profileImg"
                              src={item.profile_photo_url}
                              alt={item.author_name}
                              onError={(e)=>{e.target.onerror = null; e.target.src="https://via.placeholder.com/300"}}
                            />
                          </figure>
                        </div>
                        <div class="media-content">
                          <p class="title is-4">{item.author_name}</p>
                          <p class="subtitle is-6">Rating: {item.rating}</p>
                        </div>
                      </div>

                      <div class="content has-text-left">
                      {item.text}
                        <br />
                      </div>

                      <div class="has-text-center has-text-weight-light">
                      <p class="subtitle is-6 has-text-center">{item.relative_time_description}</p>
                      </div>
                        
                    </div>
                  </div>
                );
              })}

              <p>Contact Information</p>
              <p>{this.props.address}</p>
              <p>{this.props.phone}</p>
            </section>
            <footer className="modal-card-foot">
              {/* <button onClick={this.setModalInactive} className="button">
                Close
              </button> */}
            </footer>
          </div>
        </div>
        {/* Modal End */}
      </div>
    );
  }
}

export default VenueCard;
