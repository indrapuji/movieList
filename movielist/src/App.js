import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Detail, Favorite } from "./pages";
import './App.css'

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/detail/:movieId">
						<Detail />
					</Route>
					<Route path="/favorite">
						<Favorite />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
