/** @format */

import Button from "@restart/ui/esm/Button";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = props => {
  const { img, name, description, _id, price } = props.product;
  return (
    <div>
      <Card
        className='product shadow-sm p-3 mb-5 bg-body rounded'
        style={{ width: "18rem" }}
      >
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Button className='btn'>
            <Link className='my_button' to={`/product/${_id}`}>
              Buy Now
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;
