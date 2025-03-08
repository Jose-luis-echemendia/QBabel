import PropTypes from "prop-types";
import LoadSuspense from "@/components/load-suspense";
import CustomFooter from "@/components/footer";
import NavBar from "@/views/navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthenticatedLayout = ({ children }) => {
  return (
    <LoadSuspense className="relative flex flex-col">
      <NavBar />
      <ToastContainer autoClose={5000} />
      <main className="antialiased">{children}</main>
      <footer className="pb-6 z-10 absolute bottom-0 w-full">
        <CustomFooter textColor="text-black"/>
      </footer>
    </LoadSuspense>
  );
};

AuthenticatedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthenticatedLayout;
