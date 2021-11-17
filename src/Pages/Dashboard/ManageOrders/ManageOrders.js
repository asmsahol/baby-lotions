/** @format */

import Button from "@restart/ui/esm/Button";
import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
// import { useParams } from "react-router";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState("");

  // All Order
  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then(res => res.json())
      .then(result => {
        setOrders(result);
      });
  }, [orders]);

  // Handle Delete
  const handleDelete = id => {
    fetch(`http://localhost:5000/booking/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        alert("Delete Confirm ");
        alert("Delete Successful");
      });
  };

  //  Handle Update Booking Status
  const handleStatus = e => {
    setStatus(e.target.value);
  };

  const handleUpdateStatus = id => {
    const url = `http://localhost:5000/updateStatus/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          alert("Update Successfully");
          // setStatus({});
        }
      });
    // e.preventDefault();
  };

  return (
    <div className='px-2'>
      <h2>Manage All Orders</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Date</th>
            <th>Email</th>
            <th>Service Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Update</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders.map(order => (
          <tbody className='product_input'>
            <tr>
              <td className='product_input'>
                {orders.findIndex(or => or._id === order._id) + 1}
              </td>
              <td className='product_input'>{order.date}</td>
              <td className='product_input'>{order.email}</td>
              <td className='product_input'>{order.service}</td>
              <td className='product_input'>{order.price}</td>
              <td className='product_input'>
                <input
                  type='text'
                  onBlur={handleStatus}
                  defaultValue={order.status}
                  className='product_input'
                />
              </td>
              <td className='product_input'>
                <Button
                  className='my_button rounded'
                  onClick={() => handleUpdateStatus(order._id)}
                >
                  Update
                </Button>
              </td>
              <td className='product_input'>
                <Button
                  onClick={() => handleDelete(order._id)}
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

export default ManageOrders;
