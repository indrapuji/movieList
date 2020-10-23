import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Detail() {
	const { movieId } = useParams();

	const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=464b6412840269fe91e87ba7d6958784&language=en-US`;
	const [data, loading] = useFetch(apiUrl);

	if (loading) {
		return <Loading></Loading>;
	} else {
		return (
			<>
				<Navbar></Navbar>
				<Container className="mt-3" style={{ backgroundColor: "grey" }}>
					<h1 style={{ textAlign: "center", color: "white" }}>
						<strong>{data.original_title}</strong>
					</h1>
					<Row>
						<Col>
							<div className="container mt-3">
								<Card.Img
									variant="top"
									src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
									style={{ height: "40rem" }}
								/>
							</div>
						</Col>
						<Col className="mt-3">
							<p className="mb-1">
								<strong>Overview</strong>
							</p>
							<p>{data.overview}</p>
							<p className="mb-1">
								<strong>Homepage</strong>
							</p>
							<p>{data.homepage ? data.homepage : "No homepage"}</p>
							<p className="mb-1">
								<strong>Tagline</strong>
							</p>
							<p>{data.tagline}</p>
							<p className="mb-1">
								<strong>Release date</strong>
							</p>
							<p>{data.release_date}</p>
							<p className="mb-1">
								<strong>Budget</strong>
							</p>
							<p>{data.budget ? `$ ${data.budget}` : "Unknown"}</p>
							<p className="mb-1">
								<strong>Revenue</strong>
							</p>
							<p>{data.revenue ? `$ ${data.revenue}` : "Unknown"}</p>
							<p className="mb-1">
								<strong>Rating</strong>
							</p>
							<p>{data.vote_average}</p>
							<Button variant="primary">
								<Link style={{ color: "white" }} to="/">
									Back
								</Link>
							</Button>
						</Col>
					</Row>

					<br />
				</Container>
			</>
		);
	}
}

export default Detail;
