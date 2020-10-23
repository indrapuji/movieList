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
    <>
      {/* {JSON.stringify(props.files)} */}
      <div className="movieCard">
        <div className="row">
          {props.files.map((file) => {
            return (
              <div key={file.id} style={{ BackgroundColor: "grey" }} className="col-md-3">
                <Card className="mt-3" style={{ height: "41rem", borderRadius: 10 }}>
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${file.poster_path}`} style={{ height: "25rem", borderRadius: 10 }} />
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>
                      <strong>
                        <Link to={`/detail/${file.id}`}>{file.title}</Link>
                      </strong>
                    </Card.Title>
                    <Card.Text style={{ marginBottom: "0px", textAlign: "center" }}>release date</Card.Text>
                    <Card.Text style={{ textAlign: "center" }}>
                      <strong>{file.release_date}</strong>
                    </Card.Text>
                    <Card.Text style={{ marginBottom: "0px", textAlign: "center" }}>rating</Card.Text>
                    <Card.Text style={{ textAlign: "center" }}>
                      <strong>{file.vote_average}</strong>
                    </Card.Text>
                    <div className="col text-center">
                      <Button variant="primary" onClick={() => AddNewFav(file)}>
                        Add to Favorite
                      </Button>
                    </div>
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

export default Moviecard;
