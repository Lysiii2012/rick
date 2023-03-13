import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./api.css";

class Api extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        filterValue: localStorage.getItem("filterValue") || "",
      };
    }
  
    handleFilterChange = (event) => {
      const filterValue = event.target.value;
      this.setState({
        filterValue,
      });
      localStorage.setItem("filterValue", filterValue);
    };
  
    componentDidMount() {
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.results,
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error,
            });
          }
        );
    }
  
    render() {
      const { error, isLoaded, items, filterValue } = this.state;
      let filteredItems = items
        .filter((item) =>
          item.name.toLowerCase().includes(filterValue.toLowerCase())
        )
        .sort((a, b) => (a.name > b.name ? 1 : -1));
  
      if (error) {
        return <p>Error {error.message} </p>;
      } else if (!isLoaded) {
        return <p>Loading...</p>;
      } else {
        return (
          <div>
            <div className="form">
              <form className="search_form">
                <input
                  type="text"
                  placeholder="Filter by name..."
                  className="search_input"
                  value={filterValue}
                  onChange={this.handleFilterChange}
                />
              </form>
            </div>
            <div className="iconsPerson">
              {filteredItems.map((item) => (
                <NavLink
                  className="iconPerson"
                  to={`/characters/${item.name.toLowerCase()}`}
                  key={item.name}
                >
                  <div className="img_conteiner">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <h2>{item.name}</h2>
                  <p>{item.species}</p>
                </NavLink>
              ))}
            </div>
          </div>
        );
      }
    }
  }
  
  export default Api;