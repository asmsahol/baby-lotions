/** @format */

import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const AddReview = () => {
  const { user } = useAuth();

  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(result => {
        history.push(redirect_uri);
        alert("Added Review Successfully.");
      });
  };
  return (
    <div className='add-service  xs={12} md={8}'>
      <h2>Add Your Comment</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          defaultValue={user.displayName}
          className='w-100 p-2 m-2'
        />
        <textarea
          {...register("comment", { required: true })}
          placeholder='Your Comment'
          className='w-100 p-2 m-2'
          cols='30'
          rows='10'
        ></textarea>
        <input
          {...register("star", { required: true })}
          placeholder='Please Rating Number 0-5'
          type='number'
          className='w-100 p-2 m-2'
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type='submit' className='m-2 mb-5' />
      </form>
    </div>
  );
};

export default AddReview;
