import React, { useState } from "react";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar(props) {
  const [search, setSearch] = useState("");
  const [navbars, setNavbars] = useState(false);

  function changeBackground() {
    if (window.scrollY >= 50) {
      setNavbars(true);
    } else {
      setNavbars(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  function onSearchChange(event) {
    setSearch(event.target.value);
  }
  function onSearchSubmit(event) {
    event.preventDefault();
    if (search) {
      const searchApiUrl = `https://api.themoviedb.org/3/search/movie?api_key=464b6412840269fe91e87ba7d6958784&language=en-US&query=${search}&page=1&include_adult=false`;
      fetch(searchApiUrl)
        .then((res) => res.json())
        .then((data) => props.onSubmit(data))
        .catch((err) => {
          console.log(err);
        });
    } else {
      props.onSubmit("");
    }
  }
  return (
    <>
      {navbars ? (
        <Navbar fixed="top" bg="light" variant="light">
          <Navbar.Brand className="navbarBrand" href="/">MovieList</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link style={{ color: "black" }} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ color: "black" }} to="/favorite">
                Favorite
              </Link>
            </Nav.Link>
          </Nav>
          <Form onSubmit={onSearchSubmit} inline>
            <FormControl onChange={onSearchChange} type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-dark" type="submit">
              Search
            </Button>
          </Form>
        </Navbar>
      ) : (
        <Navbar fixed="top" bg="transparent" variant="dark">
          <Navbar.Brand className="navbarBrand" href="/" style={{ fontSize: 45 }}>
            MovieList 
            <p style={{ fontSize: 15, marginTop: -10 }}>Millions of movies to discover...</p>
          </Navbar.Brand>
        </Navbar>
      )}
    </>
  );
}

export default NavigationBar;
