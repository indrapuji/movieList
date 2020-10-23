import React, { useState } from "react";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar(props) {
	const [search, setSearch] = useState("");

	function onSearchChange(event) {
		setSearch(event.target.value);
	}
	function onSearchSubmit(event) {
		event.preventDefault();
		if (search) {
			const searchApiUrl = `https://api.themoviedb.org/3/search/movie?api_key=464b6412840269fe91e87ba7d6958784&language=en-US&query=${search}&page=1&include_adult=false`;
			fetch(searchApiUrl)
				.then(res => res.json())
				.then(data => props.onSubmit(data))
				.catch(err => {
					console.log(err);
				});
		} else {
			props.onSubmit("");
		}
	}
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand
					style={{ height: "50px", fontSize: "40px", fontWeight: "bold" }}
				>
					MovieList
				</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav.Link>
						<Link style={{ color: "white" }} to="/">
							Home
						</Link>
					</Nav.Link>
					<Nav.Link>
						<Link style={{ color: "white" }} to="/favorite">
							Favorite
						</Link>
					</Nav.Link>
				</Nav>
				<Form onSubmit={onSearchSubmit} inline>
					<FormControl
						onChange={onSearchChange}
						type="text"
						placeholder="Search"
						className="mr-sm-2"
					/>
					<Button variant="outline-light" type="submit">
						Search
					</Button>
				</Form>
			</Navbar>
		</>
	);
}

export default NavigationBar;
