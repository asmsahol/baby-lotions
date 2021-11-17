/** @format */

import React from "react";
import "./BabyCare.css";
import { Card, CardGroup } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const BabyCare = props => {
  const { name, img, description } = props.b_care;
  return (
    <div>
      <CardGroup>
        <Card className='b_care'>
          <Card.Img variant='top' src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Footer className='card_footer'>
            <Button className='my_button'>VIEW MORE</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default BabyCare;
