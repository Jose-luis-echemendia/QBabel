import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@/components/protected-route";
import { useAppSelector } from "@/hooks/redux/useStore";
import { useEffect } from "react";
import { useAuth } from "@/hooks/redux/useAuth";

//PAGES
import HomePage from "@/pages/home/page";
import WelcomePage from "@/pages/welcome-page/page";
import LibraryPage from "@/pages/library/page";
import DetailsBookPage from "@/pages/details-book/page";
import SearchPage from "@/pages/search/page";
import CategoryBookPage from "@/pages/category-book/page";
import BookReaderPage from "@/pages/book-reader/page";
import ProfilePage from "@/pages/profile/page";
import Error404 from "@/pages/error/Error404";

// ADMIN PAGES
import AdminOverViewPage from "@/pages/admin/admin-overview/page";
import AdminUsersPage from "@/pages/admin/admin-users/page";
import AdminBooksPage from "@/pages/admin/admin-books/page";
import AdminCategoriesPage from "@/pages/admin/admin-categories/page";
import AdminSalesPage from "@/pages/admin/admin-sales/page";

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
            <Route path="/books/reader/:bookId" element={<BookReaderPage />}></Route>
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
            <Route path="/admin" element={<AdminOverViewPage />}></Route>
            <Route path="/admin/users" element={<AdminUsersPage />}></Route>
          </Route>

          {/* PAGES DISPLAY */} 
          <Route path="/books/:bookId" element={<DetailsBookPage />}></Route>
          <Route path="/search/:criterion" element={<SearchPage />}></Route>
          <Route path="/books/category/:category" element={<CategoryBookPage />}></Route>
          <Route path="/library" element={<LibraryPage />}></Route>
          <Route path="/profile/:userName" element={<ProfilePage />}></Route>
          <Route path="/admin/books" element={<AdminBooksPage />}></Route>
          <Route path="/admin/categories" element={<AdminCategoriesPage />}></Route>
          <Route path="/admin/sales" element={<AdminSalesPage />}></Route>

        </Routes>
      </Router>
    </>
  );
};

export default Routers;
