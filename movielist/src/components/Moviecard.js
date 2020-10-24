import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFav } from "../store/actions/favAction";

function Moviecard(props) {
  const dispatch = useDispatch();
  function AddNewFav(newFav) {
    dispatch(addFav(newFav));
  }
  return (
    <div className="movieCard">
      {/* {JSON.stringify(props.files)} */}
      {props.files.map((file) => {
        return (
          <Card key={file.id} className="card">
            {file.poster_path !== null ? (
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${file.poster_path}`} className="cardImage" />
            ) : (
              <Card.Img variant="top" src={require("../assets/default_poster.jpg")} className="cardImage" />
            )}
            <Card.Body>
              <Card.Text className={file.title.length > 40 ? "cardTextLong" : "cardTextShort"}>
                <Link to={`/detail/${file.id}`}>{file.title}</Link>
              </Card.Text>
              <Card.Text className="cardSub">release date</Card.Text>
              <Card.Text className="cardTextShort">{file.release_date}</Card.Text>
              <Card.Text className="cardSub">rating</Card.Text>
              <Card.Text className="cardTextShort">{file.vote_average}</Card.Text>
            </Card.Body>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
              <Button variant="primary" onClick={() => AddNewFav(file)}>
                Add to Favorite
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default Moviecard;
