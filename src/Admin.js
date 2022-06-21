import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./user_components/Footer";
import AdminNavbar from "./admin_components/Admin_Navbar";

function Admin(props) {
  return (
    <div className="min-vh-100 m-0 d-flex flex-column">
      <div className="sticky-top w-100">
        <AdminNavbar alert={props.alert} showAlert={props.showAlert} />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="mt-auto w-100">
        <Footer />
      </div>
    </div>
  );
}

export default Admin