import './App.css';
import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import ProductView from "./pages/ProductView";

// Import Parse minified versio
import Parse from 'parse/dist/parse.min.js';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'oQT9NFoGJ9HQWefMSlnkns8V9cudTjsXsyhXOTwr';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = '7pCPR3fcdQpvYeOdNYi1QktQEyr51eiXel59TOwY';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export default function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/shop/:id" element={<ProductView/>} />
        </Routes>
      </div>
  );
}
