import React from "react";
import { Card, Container } from "react-bootstrap";

function Cast(props) {
	return (
		<>
			{/* {JSON.stringify(props.files)} */}
			<Container>
				<div className="Container-fluid d-flex justify-content">
					<div className="row">
						{props.actor.map(file => {
							return (
								<div
									key={file.id}
									style={{ BackgroundColor: "grey" }}
									className="col-md-1"
								>
									<Card className="mt-3" style={{ height: "5rem" }}>
										<Card.Img
											variant="top"
											src={`https://image.tmdb.org/t/p/original${file.profile_path}`}
											style={{ height: "5rem" }}
										/>
									</Card>
								</div>
							);
						})}
					</div>
				</div>
			</Container>
		</>
	);
}

export default Cast;
