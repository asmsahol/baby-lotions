/** @format */

import React from "react";
import "./Dashboard.css";
import { useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import ManageOrders from "./ManageOrders/ManageOrders";
import ManageProducts from "./ManageProducts/ManageProducts";
import AddProduct from "./AddProduct/AddProduct";
import MyOrder from "./Booking/MyOrder";
import Pay from "./Pay/Pay";
import useAuth from "../../hooks/useAuth";
import Admin from "./Admin/Admin";
import AddReview from "./AddReviews/AddReview";

const Dashboard = () => {
  const [control, setControl] = useState("add_service");
  const { admin, logOut } = useAuth();
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={3} className='text-white pt-3 mb-5 admin_list'>
            {admin && (
              <li onClick={() => setControl("make_admin")}>
                <ListGroup.Item className='menu dashboard'>
                  Add An Admin
                </ListGroup.Item>
              </li>
            )}
            {admin && (
              <li onClick={() => setControl("add_product")}>
                <ListGroup.Item className='menu dashboard'>
                  Add Product
                </ListGroup.Item>
              </li>
            )}
            {admin && (
              <li onClick={() => setControl("manage_products")}>
                <ListGroup.Item className='menu dashboard'>
                  Manage Products
                </ListGroup.Item>
              </li>
            )}
            {admin && (
              <li onClick={() => setControl("manage_orders")}>
                <ListGroup.Item className='menu dashboard'>
                  Manage Orders
                </ListGroup.Item>
              </li>
            )}
            {!admin && (
              <li onClick={() => setControl("pay")}>
                <ListGroup.Item className='menu dashboard'>
                  Payment
                </ListGroup.Item>
              </li>
            )}
            {!admin && (
              <li onClick={() => setControl("my_orders")}>
                <ListGroup.Item className='menu dashboard'>
                  My Orders
                </ListGroup.Item>
              </li>
            )}
            {!admin && (
              <li onClick={() => setControl("add_review")}>
                <ListGroup.Item className='menu dashboard'>
                  Add Your Review
                </ListGroup.Item>
              </li>
            )}
            <li onClick={() => setControl("logout")}>
              <ListGroup.Item className='menu dashboard' onClick={logOut}>
                Logout
              </ListGroup.Item>
            </li>
          </Col>
          <Col xs={12} md={9}>
            {/* Normal User */}
            {control === "pay" && <Pay></Pay>}
            {control === "my_orders" && <MyOrder></MyOrder>}
            {control === "add_review" && <AddReview></AddReview>}

            {/* Admin User */}
            {control === "manage_orders" && <ManageOrders></ManageOrders>}
            {control === "add_product" && <AddProduct></AddProduct>}
            {control === "make_admin" && <Admin></Admin>}
            {control === "manage_products" && <ManageProducts></ManageProducts>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
