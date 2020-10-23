import React from "react";
import Navbar from "../components/Navbar";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

function Favorites() {
  const listFavorite = useSelector((state) => state.favorites);

  if (listFavorite.length === 0) {
    return (
      <>
        <Navbar />
        <h1 className="mt-3" style={{ textAlign: "center" }}>
          You dont have any favorites Movie
        </h1>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="movieCard">
          <div className="row">
            {listFavorite.map((file) => {
              return (
                <div key={file.id} className="col-md-3">
                  <Card className="mt-3" style={{ height: "41rem" }}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${file.poster_path}`} style={{ height: "25rem" }} />
                    <Card.Body>
                      <Card.Title style={{ textAlign: "center" }}>
                        <strong>{file.title}</strong>
                      </Card.Title>
                      <Card.Text style={{ marginBottom: "0px", textAlign: "center" }}>release date</Card.Text>
                      <Card.Text style={{ textAlign: "center" }}>
                        <strong>{file.release_date}</strong>
                      </Card.Text>
                      <Card.Text style={{ marginBottom: "0px", textAlign: "center" }}>rating</Card.Text>
                      <Card.Text style={{ textAlign: "center" }}>
                        <strong>{file.vote_average}</strong>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Favorites;
