import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Moviecard from "../components/Moviecard";
// import Loading from "../components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../store/actions/getAction";

// import useFetch from "../hooks/useFetch";

function Home() {
	const dispatch = useDispatch();
	const [input, setInput] = useState("");

	function onSearchSubmit(payload) {
		setInput(payload.results);
	}

	const files = useSelector(state => {
		return state.files;
	});

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]);

	return (
		<>
			<Navbar onSubmit={onSearchSubmit}></Navbar>
			<Moviecard files={input ? input : files}></Moviecard>
		</>
	);
}

export default Home;
