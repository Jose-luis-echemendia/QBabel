import PropTypes from "prop-types";
import LoadSuspense from "@/components/load-suspense";
import CustomFooter from "@/components/footer";
import NavBar from "@/views/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthenticatedLayout = ({ classNameNav, classNameFooter, children }) => {
  return (
    <LoadSuspense className="flex flex-col overflow-hidden">
      <NavBar />
      <ToastContainer autoClose={5000} />
      <main className="antialiased">{children}</main>
      <footer className="pb-6 z-10 w-full">
        <CustomFooter textColor="text-black" />
      </footer>
    </LoadSuspense>
  );
};

AuthenticatedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthenticatedLayout;
