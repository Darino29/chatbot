import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Ecommerce,Orders,Calendar,Employees,Stacked,Pyramid,Customers,Kanban,Area,Bar,Pie,Financial,ColorPicker,ColorMapping,Editor,Line} from './pages';
import Dashboard from "./dashbord";
import  Auth  from './components/Auth/Auth';

const App = () => {
  return (
    <>
      <GoogleOAuthProvider clientId="426309683556-t9lvbehn86rhhjs1ktqisv8o16r3ssiq.apps.googleusercontent.com">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} >
              <Route index element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Route>
            <Route path="/auth" element={<Auth/>} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
};
export default App;
