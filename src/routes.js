import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './comp/Home/Home';
import WebDev from './comp/webDev/webDev';
export default function RouteRoot() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/web-development" top element={<WebDev />} />
    </Routes>
  );
}
