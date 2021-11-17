/** @format */

import React from "react";
import "./Reviews.css";
import { Card, Container } from "react-bootstrap";
import Rating from "react-rating";
import useAuth from "../../../hooks/useAuth";

const Reviews = props => {
  const { name, comment, star } = props.review;
  const { user } = useAuth();
  return (
    <div>
      <Container
        className='shadow-sm p-3 mb-5 bg-body rounded reviews'
        style={{ width: "18rem" }}
      >
        <Card className='reviews_border'>
          <Card.Header className='reviews_name'>{name}</Card.Header>
          <Card.Body>
            <blockquote className='blockquote mb-0'>
              <p>{comment}</p>
              <Rating
                emptySymbol='far fa-star icon-color'
                fullSymbol='fas fa-star icon-color'
                initialRating={star}
                readonly
              ></Rating>
              <footer className='blockquote-footer my-5'>
                Comment from{" "}
                <cite title='Source Title'>{user.displayName}</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Reviews;
