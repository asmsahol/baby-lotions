/** @format */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthProvider from "./Context/AuthProvider";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Home/Header/Header";
import About from "./Pages/About/About";
import SignUp from "./Pages/Home/SignUp/SignUp";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Login from "./Pages/Home/Login/Login";
import NoFound from "./Pages/Home/NotFount/NotFound";
import Footer from "./Pages/Home/Footer/Footer";
import Booking from "./Pages/Dashboard/Booking/Booking";
import MyOrder from "./Pages/Dashboard/Booking/MyOrder";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Products from "./Pages/Products/Products";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);

  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/products'>
              <h2 className='mt-5'>Most Popular Lotions</h2>
              <div className='products'>
                {products.map(product => (
                  <Products product={product} key={product._id}></Products>
                ))}
              </div>
            </Route>
            <PrivateRoute path='/product/:productId'>
              <Booking products={products}></Booking>
            </PrivateRoute>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path='/order'>
              <h2 className='mt-5'>My Order</h2>
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <div>
                <Dashboard></Dashboard>
              </div>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route>
              <NoFound></NoFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
