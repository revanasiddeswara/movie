import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  render() {
    const { query, onInput, placeholder } = this.props;
    return (
      <form className="search" onInput={(event) => onInput(event.target.value)}>
        <input type="search" value={query} placeholder={placeholder} />
      </form>
    );
  }
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onInput: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Search;
