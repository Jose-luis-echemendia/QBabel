import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/components/protected-route";
import { useAppSelector } from "@/hooks/redux/useStore";
import { useEffect } from "react";
import { useAuth } from "@/hooks/redux/useAuth";

//PAGES
import HomePage from "@/pages/home/page";
import WelcomePage from "@/pages/welcome-page/page";
import AdminPage from "@/pages/admin/page";
import LibraryPage from "@/pages/library/page";
import DetailsBookPage from "@/pages/details-book/page";
import BookReaderPage from "@/pages/book-reader/page";
import Error404 from "@/pages/error/Error404";

const Routers = () => {
  const auth = useAppSelector((state) => state.auth);
  const {
    handleGetAuthenticatedUser,
    handleGetAuthenticatedUserProfile,
    handleVerifyToken,
    handlRefreshToken,
  } = useAuth();
  console.log(auth);

  const getStateAuth = async () => {
    try {
      await handlRefreshToken();
      await handleVerifyToken();
      await handleGetAuthenticatedUser();
      await handleGetAuthenticatedUserProfile();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStateAuth();
  }, [auth.isAuthenticated]);

  return (
    <>
      <Router>
        <Routes>
          {/* ERROR DISPLAY */}
          <Route path="*" element={<Error404 />}></Route>

          {/* WELCOME DISPLAY */}
          <Route
            element={
              <ProtectedRoute
                redirectTo="/home"
                isAllowed={!auth.isAuthenticated}
              />
            }
          >
            <Route path="/" element={<WelcomePage />}></Route>
          </Route>

          {/* HOME DISPLAY */}
          <Route
            element={
              <ProtectedRoute redirectTo="/" isAllowed={auth.isAuthenticated} />
            }
          >
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/library" element={<LibraryPage />}></Route>
          </Route>

          {/* ADMIN DISPLAY */}
          <Route
            element={
              <ProtectedRoute
                redirectTo="/home"
                isAllowed={auth.isAuthenticated && auth.user.role === "Admin"}
              />
            }
          >
            <Route path="/admin" element={<AdminPage />}></Route>
          </Route>

          {/* PAGES DISPLAY */}

          <Route path="/books/:bookId" element={<DetailsBookPage />}></Route>
          <Route path="/books/reader/:bookId" element={<BookReaderPage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
