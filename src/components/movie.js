import React, { Component } from "react";
import PropTypes from "prop-types";
import "./movie.css";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { Title, Poster } = this.props;
    const { isHovered } = this.state;

    return (
      <div
        className={`movie-card ${isHovered ? "hovered" : ""}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <img src={Poster} alt={Title} />
        <div className={`movie-title ${isHovered ? "visible" : ""}`}>
          <h2>{Title}</h2>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  Title: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
};

export default Movie;
