import React, { Component } from "react";
import "./style.css";
import "bulma/css/bulma.css";
import { thisExpression } from "@babel/types";

class VenueCard extends Component {
  state = {
    active: false,
    hoursModalActive: false
  };

  constructor(props) {
    super(props);
    this.setModalActive = this.setModalActive.bind(this);
    this.setModalInactive = this.setModalInactive.bind(this);
    this.setHoursModalActive = this.setHoursModalActive.bind(this);
    this.setHoursModalInactive = this.setHoursModalInactive.bind(this);
  }

  setModalActive() {
    this.setState({ active: true });
  }

  setModalInactive() {
    this.setState({ active: false });
  }

  setHoursModalActive() {
    console.log("set hours works");
    this.setState({ hoursModalActive: true });
  }

  setHoursModalInactive() {
    this.setState({ hoursModalActive: false });
  }

  render() {
    console.log(this.state);
    console.log("Line 36: ", this.props);
    return (
      <div>
        {this.props.address ? (
          <div>
            {/* {console.log("Props Line 19:", props)}    */}

            <div className="columns features">
              <div className="column modal-button" data-target="modal-card">
                <div className="card is-shady">
                  <div className="card-image ">
                    <figure className="image">
                      <img
                        className="venueImage"
                        src={this.props.venueImg}
                        alt={this.props.name}
                        onError={e => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/300";
                        }}
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4 has-text-centered">
                          {this.props.name}
                        </p>
                      </div>
                    </div>
                    <div className="content">
                      {/* <p>Address: {this.props.address}</p> */}
                      <p>Average user rating: {this.props.rating}</p>
                    </div>
                  </div>
                  <footer className="card-footer">
                    {this.props.website ? (
                      <p className="card-footer-item">
                        <a href={this.props.website}>Website</a>
                      </p>
                    ) : null}

                    {this.props.reviews ? (
                      <p className="card-footer-item">
                        <span onClick={this.setModalActive}>Reviews</span>
                      </p>
                    ) : null}

                    {this.props.hours ? (
                      <p className="card-footer-item">
                        <span onClick={this.setHoursModalActive}>Hours</span>
                      </p>
                    ) : null}
                  </footer>
                </div>
              </div>
            </div>

            <footer></footer>

            {/* Hours Modal Start  */}
            <div
              className={
                this.state.hoursModalActive ? "modal is-active" : "modal"
              }
            >
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title is-3">
                    {this.props.name} Hours
                  </p>
                  <button
                    onClick={this.setHoursModalInactive}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <section className="modal-card-body">
                  {console.log("Line 130 Hours: ", typeof this.props.hours)}

                  {this.props.hours
                    ? Array.from(this.props.hours).map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="content has-text-left">
                              {item}
                              <br />
                            </div>
                          </div>
                        );
                      })
                    : null}
                </section>
                <footer className="modal-card-foot"></footer>
              </div>
            </div>
            {/* Hours Modal End */}

            {/* Reviews Modal Start  */}
            <div className={this.state.active ? "modal is-active" : "modal"}>
              <div className="modal-background"></div>
              <div className="modal-card">
                <header className="modal-card-head">
                  <p className="modal-card-title is-3">
                    {this.props.name} Reviews
                  </p>
                  <button
                    onClick={this.setModalInactive}
                    className="delete"
                    aria-label="close"
                  ></button>
                </header>
                <section className="modal-card-body">
                  {console.log(typeof this.props.reviews)}

                  {this.props.reviews
                    ? Array.from(this.props.reviews).map((item, index) => {
                        return (
                          <div key={index} className="card review-card">
                            <div className="card-content">
                              <div className="media">
                                <div className="media-left">
                                  <figure className="image is-48x48">
                                    <img
                                      className="profileImg"
                                      src={item.profile_photo_url}
                                      alt={item.author_name}
                                      onError={e => {
                                        e.target.onerror = null;
                                        e.target.src =
                                          "https://via.placeholder.com/300";
                                      }}
                                    />
                                  </figure>
                                </div>
                                <div className="media-content">
                                  <p className="title is-4">
                                    {item.author_name}
                                  </p>
                                  <p className="subtitle has-text-grey is-6">
                                    User rating: {item.rating}
                                  </p>
                                </div>
                              </div>

                              <div className="content has-text-left">
                                {item.text}
                                <br />
                              </div>

                              <div className="has-text-center has-text-weight-light">
                                <p className="subtitle is-6 has-text-center has-text-grey-light">
                                  {item.relative_time_description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : null}

                  <p className="contact-info title is-5">Contact Information</p>
                  <p>{this.props.address}</p>
                  <p>{this.props.phone}</p>
                  {this.props.website ? (
                    <a
                      type="button"
                      className="button is-link is-light websiteBtnModal"
                      href={this.props.website}
                    >
                      Website
                    </a>
                  ) : null}
                </section>
                <footer className="modal-card-foot">
                  {/* <button onClick={this.setModalInactive} className="button">
                Close
              </button> */}
                </footer>
              </div>
            </div>
            {/* Reviews Modal End */}
          </div>
        ) : (
          <div>Nothing to Display</div>
        )}
      </div>
    );
  }
}

export default VenueCard;
