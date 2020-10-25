import React, { useEffect, useState } from "react";
import { Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFav } from "../store/actions/favAction";
import Rating from "@material-ui/lab/Rating";

function Moviecard(props) {
  const [limit, setLimit] = useState(props.files);
  const dispatch = useDispatch();
  function AddNewFav(newFav) {
    dispatch(addFav(newFav));
  }
  useEffect(() => {
    if (props.isLimit) {
      setLimit(props.files.slice(0, 8));
    } else {
      setLimit(props.files);
    }
  }, [props.isLimit, props.files]);
  return (
    <>
      {props.isLimit ? (
        <div className="section">
          <h1 className="sectionTitle">{props.title}</h1>
          <h3 className="sectionSub">more</h3>
        </div>
      ) : (
        <h1 className="title">{props.title}</h1>
      )}
      <div className="movieCard">
        {/* {JSON.stringify(props.files)} */}
        {limit.map((file) => {
          return (
            <Card key={file.id} className="card">
              {file.poster_path !== null ? (
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${file.poster_path}`} className="cardImage" />
              ) : (
                <Card.Img variant="top" src={require("../assets/default_poster.jpg")} className="cardImage" />
              )}
              <Card.Body>
                <Card.Text className={file.title.length > 30 ? "cardTextLong" : "cardTextShort"}>
                  <Link to={`/detail/${file.id}`}>{file.title}</Link>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Text className="cardSub">
                  release date <br />
                  <span style={{ fontWeight: "bold" }}>{file.release_date}</span>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <OverlayTrigger placement="top" overlay={<Tooltip>{file.vote_average}</Tooltip>}>
                  <div className="cardTextShort">
                    <Rating value={Math.round(file.vote_average / 2)} readOnly />
                  </div>
                </OverlayTrigger>
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
    </>
  );
}

export default Moviecard;
