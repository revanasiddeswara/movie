import React, { Component } from "react";
import ReactDOM from "react-dom";
import Movies from "./components/movies";
import Search from "./components/search";
import axios from "axios";
import "./components/style.css";
import Footer from "./components/footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      query: "",
    };
  }

  onInput = (query) => {
    this.setState({ query });
    this.searchMovie(query);
  };

  searchMovie(query) {
    const apiKey = "45f0782a";
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;

    axios
      .get(url)
      .then((response) => {
        this.setState({
          movies: response.data.Search || [], // Check if there are results in the response
        });
      })
      .catch((error) => {
        console.error("Error fetching data from OMDB API:", error);
      });
  }

  componentDidMount() {
    this.searchMovie("war"); // Fetch initial data
  }

  render() {
    const { movies, query } = this.state;

    return (
      <div className="app">
        <Search query={query} onInput={this.onInput} placeholder="Search for Movie Title …" />
        <Movies movies={movies} />
        <Footer/>
      </div>
    );
  }
}

export default App;
