/** @format */

import React from "react";
import "./Footer.css";
import { useForm } from "react-hook-form";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <footer className='footer text-dark px-2'>
      <div>
        <Container>
          <Row>
            <Col xs={12} md={12} className='pt-3 mb-5'>
              <div className='mt-5'>
                <h2 className='my-5'>Send Yous Message</h2>
                <div className='message'>
                  <div>
                    <i className='far fa-comment-dots icon'></i>
                  </div>
                  <div>
                    <form
                      className='form py-5 px-2'
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <input
                        className='my-2 form-input'
                        {...register("name")}
                        type='name'
                        placeholder='Type Your Name'
                      />
                      <br />
                      <input
                        className='my-2 form-input'
                        type='email'
                        {...register("email", { required: true })}
                        placeholder='Type Your Email'
                      />
                      <br />
                      <textarea
                        type='text'
                        placeholder='Your Message'
                        className='my-2 form-input'
                        name='message'
                        id=''
                        cols='30'
                        rows='10'
                      ></textarea>
                      <br />
                      {errors.exampleRequired && (
                        <span>This field is required</span>
                      )}
                      <input className='btn my_button' type='submit' />
                    </form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='mb-5 copy-right'>
        <p className='mt-5'>&copy; 2021 Baby Lotion All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
