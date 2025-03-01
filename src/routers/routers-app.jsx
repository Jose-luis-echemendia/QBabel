import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//PAGES
import HomePage from "@/pages/home/page";
import WelcomePage from "@/pages/welcome-page/page"
import { Error404 } from "@/pages/error/Error404";

const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* ERROR DISPLAY */}
          <Route path="*" element={<Error404 />}></Route> 
          

          {/* HOME DISPLAY */}
          <Route path="/" element={<WelcomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>

          {/* PAGES DISPLAY */}

        </Routes>
      </Router>
    </>
  );
};

export default Routers
