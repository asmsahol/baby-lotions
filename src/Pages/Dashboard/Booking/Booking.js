/** @format */

import "./Booking.css";
import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Booking = props => {
  const { productId } = useParams();
  const products = props.products;
  const product = products.filter(product => product._id === productId);
  const { user } = useAuth();
  const email = user?.email;
  const location = useLocation();
  const redirect_uri = location.state?.from || "/dashboard";
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    data.status = "Pending";
    data.email = email;
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Confirm Order");
    history.push(redirect_uri);
  };
  return (
    <div className='booking-section order_service'>
      <div className=''>
        {product.map(pd => (
          <div>
            <h2 className='m-5'>Welcome to {pd.name} Tour</h2>

            <CardGroup className='my-5 mx-2'>
              <Card>
                <Card.Img variant='top' src={pd.img} />
                <Card.Body>
                  <Card.Title>{pd.name}</Card.Title>
                  <Card.Text>{pd.description}</Card.Text>
                  <Card.Text>{pd.price}</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        ))}
      </div>
      {product.map(pd => (
        <div className='order-section'>
          <h2 className='m-5 p-3'>Place Your Order</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* include validation with required or other standard HTML validation rules */}
            <input
              {...register("service")}
              value={pd.name}
              className='w-100 p-2 m-2'
            />
            <input
              {...register("email")}
              value={email}
              className='w-100 p-2 m-2'
            />
            <input
              {...register("img")}
              value={pd.img}
              className='w-100 p-2 m-2'
            />
            <input
              {...register("date")}
              type='date'
              className='w-100 p-2 m-2'
            />
            <input
              {...register("name", { required: true })}
              defaultValue={user?.displayName}
              type='name'
              className='w-100 p-2 m-2'
            />
            <input
              {...register("address", { required: true })}
              placeholder='Address'
              className='w-100 p-2 m-2'
            />
            <input
              {...register("phone", { required: true })}
              placeholder='Phone Number'
              className='w-100 p-2 m-2'
            />
            <input
              {...register("price", { required: true })}
              value={pd.price}
              className='w-100 p-2 m-2'
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input
              type='submit'
              className='btn btn-success bd-btn'
              value='Order'
            />
          </form>
        </div>
      ))}
    </div>
  );
};

export default Booking;
