import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import {} from "./store/actions/getAction";

jest.mock("./store/actions/getActions");

getMovies.mockReturnValue({
	type: "GET_MOVIES",
	payload: {
		movies: [
			{
				poster_path: "/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
				id: 419704,
				backdrop_path: "/5BwqwxMEjeFtdknRV792Svo0K1v.jpg",
				original_title: "Ad Astra",
				title: "Ad Astra",
				vote_average: 6,
				overview:
					"The near future, a time when both hope and hardships drive humanity to look to the stars and beyond. While a mysterious phenomenon menaces to destroy life on planet Earth, astronaut Roy McBride undertakes a mission across the immensity of space and its many perils to uncover the truth about a lost expedition that decades before boldly faced emptiness and silence in search of the unknown.",
				release_date: "2019-09-17"
			},
			{
				poster_path: "/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
				id: 545609,
				backdrop_path: "/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg",
				original_title: "Extraction",
				title: "Extraction",
				vote_average: 7.4,
				overview:
					"Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord…",
				release_date: "2020-04-24"
			}
		]
	}
});

test("renders learn react link", () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
