/** @format */

import Button from "@restart/ui/esm/Button";
import "./ManageProducts.css";
import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch("https://vast-ravine-14464.herokuapp.com/products")
      .then(res => res.json())
      .then(result => {
        setProducts(result);
      });
  }, [products]);

  // Handle Delete
  const handleDelete = id => {
    fetch(`https://vast-ravine-14464.herokuapp.com/products/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        alert("Confirm to Delete Product");
      });
  };

  // Handle Update
  const handleUpdate = id => {
    const url = `https://vast-ravine-14464.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Update Successfully");
          setProduct({});
        }
      });
  };

  const handleImgChange = e => {
    const updateImg = e.target.value;
    const updateProduct = {
      img: updateImg,
      name: product.name,
      description: product.description,
      price: product.price,
    };
    setProduct(updateProduct);
  };
  const handleNameChange = e => {
    const updateName = e.target.value;
    const updateProduct = {
      img: product.img,
      name: updateName,
      description: product.description,
      price: product.price,
    };
    setProduct(updateProduct);
  };
  const handleDescriptionChange = e => {
    const updateDescription = e.target.value;
    const updateProduct = {
      img: product.img,
      name: product.name,
      description: updateDescription,
      price: product.price,
    };
    setProduct(updateProduct);
  };
  const handlePriceChange = e => {
    const updatePrice = e.target.value;
    const updateProduct = {
      img: product.img,
      name: product.name,
      description: product.description,
      price: updatePrice,
    };
    setProduct(updateProduct);
  };

  return (
    <div className='mx-2 manage-services'>
      <h2>Manage All Products</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image Link</th>
            <th>Product Name</th>
            <th>Product Description</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {products.map(product => (
          <tbody>
            <tr>
              <td>
                <input
                  onChange={handleImgChange}
                  type='text'
                  name='img'
                  defaultValue={product.img}
                  className='product_input'
                />
              </td>
              <td>
                <input
                  onChange={handleNameChange}
                  type='text'
                  name='name'
                  defaultValue={product.name}
                  className='product_input'
                />
              </td>
              <td>
                <input
                  onChange={handleDescriptionChange}
                  type='text'
                  name='description'
                  defaultValue={product.description}
                  className='product_input'
                />
              </td>
              <td>
                <input
                  onChange={handlePriceChange}
                  type='text'
                  name='price'
                  defaultValue={product.price}
                  className='product_input'
                />
              </td>
              <td>
                <Button
                  onClick={() => handleUpdate(product._id)}
                  className='my_button rounded'
                >
                  Update
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => handleDelete(product._id)}
                  className='delete_button rounded'
                >
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageProducts;
