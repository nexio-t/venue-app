import React from "react";
import "./style.css";
import "bulma/css/bulma.css";

const Searchbox = props => {
  return (
    <div>
      <div className="parentDiv">Venuely: Find your place</div>
      <form>
        <div className="box">
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input has-text-centered"
                value={props.value}
                type="text"
                name="userSearch"
                placeholder="Philadelphia Museum of Art"
                onChange={props.handleInputChange}
              />
            </div>
            <div className="control">
              <button
                type="submit"
                className="userSearchBtn button is-dark"
                onClick={props.handleFormSubmit}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Searchbox;
