import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/components/protected-route";
import { useAppSelector } from "@/hooks/redux/useStore";

//PAGES
import HomePage from "@/pages/home/page";
import WelcomePage from "@/pages/welcome-page/page";
import { Error404 } from "@/pages/error/Error404";

const Routers = () => {
  const auth = useAppSelector((state) => state.auth);
  return (
    <>
      <Router>
        <Routes>
          {/* ERROR DISPLAY */}
          <Route path="*" element={<Error404 />}></Route>

          {/* HOME DISPLAY */}
          <Route
            element={
              <ProtectedRoute
                redirectTo="/"
                isAllowed={!!auth.userId && auth.isAuthenticated}
              />
            }
          >
            <Route path="/home" element={<HomePage />}></Route>
          </Route>

          <Route
            element={
              <ProtectedRoute
                redirectTo="/home"
                isAllowed={(auth.userId === undefined || auth.userId === null) && !auth.isAuthenticated}
              />
            }
          >
            <Route path="/" element={<WelcomePage />}></Route>
          </Route>

          {/* PAGES DISPLAY */}
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
