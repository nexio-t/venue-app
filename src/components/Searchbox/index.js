import React from "react";
import "./style.css";
import "bulma/css/bulma.css";

const Searchbox = props => {
    return (
        <div>
            {console.log(props)};  
            <div className="parentDiv">Find a place</div>
            <form>
                <div className="field">
                    <br></br>
                    <input
                        className="input"
                        value={props.value}
                        type="text"
                        name="userSearch"
                        placeholder="Urban Outfitters University City"
                        onChange={props.handleInputChange}
                    />
                </div>
                <button
                    type="submit"
                    className="button is-dark"
                    onClick={props.handleFormSubmit}
                >
                    Search
        </button>
            </form>
        </div>
    );
};

export default Searchbox;
