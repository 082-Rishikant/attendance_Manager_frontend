import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./user_components/Homepage";
import About from "./user_components/About";
// import Search from "./user_components/Search";
import Login from "./user_components/Login";
import Signup from "./user_components/Signup";
import User from './User';

// import AdminSearch from "./admin_components/Admin_Search";
// import AllItems from "./admin_components/All_Items";
// import AllUsers from "./admin_components/All_Users";
// import Admin from './Admin';

// import Itemstates from "./context APIs/items/Itemstates";

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (explanation, message) => {
    setAlert({
      explanation: explanation,
      message: message
    })
    setTimeout(() => {
      setAlert(null);
    }, '5000');
  }

  return (
    <>
      {/* <Itemstates> */}
        <Router>
          <Routes>
            <Route path="/" element={<User showAlert={showAlert} alert={alert} />} >
              <Route exact path="/" element={<Homepage showAlert={showAlert} />} />
              <Route exact path="about" element={<About />} />
              {/* <Route exact path="search" element={<Search showAlert={showAlert} />} /> */}
              <Route exact path="login" element={<Login showAlert={showAlert} />} />
              <Route exact path="signup" element={<Signup showAlert={showAlert} />} />
            </Route>

            {/* <Route path="/admin" element={<Admin showAlert={showAlert} alert={alert} />}>
              <Route exact path="allItems" element={<AllItems showAlert={showAlert} />} />
              <Route exact path="allUsers" element={<AllUsers showAlert={showAlert} />} />
              <Route exact path="adminSearch" element={<AdminSearch showAlert={showAlert} />}/>
            </Route> */}

          </Routes>
        </Router>

      {/* </Itemstates> */}
    </>
  );
}

export default App;
