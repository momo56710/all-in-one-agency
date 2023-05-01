import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './comp/Home/Home';
import WebDev from './comp/webDev/webDev';
import Design from './comp/Design/Design';
import ContentMarketing from './comp/ContentMarketing/ContentMarketing';
import PlansAndPricing from './comp/PlansAndPricing/PlansAndPricing';
export default function RouteRoot() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/web-development" top element={<WebDev />} />
      <Route path="/services/design" top element={<Design />} />
      <Route path="/services/Social-media-management" top element={<ContentMarketing />} />
      <Route path="/plans-and-pricing" top element={<PlansAndPricing />} />
    </Routes>
  );
}
