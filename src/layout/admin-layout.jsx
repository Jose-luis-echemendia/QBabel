import PropTypes from "prop-types";
import LoadSuspense from "@/components/load-suspense";
import CustomFooter from "@/components/footer";
import NavBar from "@/views/navbar";
import CustomSideBar from "@/views/navbar/sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLayout = ({ children }) => {
  return (
    <LoadSuspense className="flex flex-col overflow-hidden">
      <NavBar />
      <ToastContainer autoClose={5000} />
      <div className="grid grid-cols-12 ml-10 mt-5 rounded-xl">
        <div className="col-span-2 -ml-8">
          <CustomSideBar />
        </div>
        <main className="col-span-10 max-h-[220vh] shadow-sm antialiased">{children}</main>
      </div>
      <footer className="ml-48 -mt-4 pb-2.5">
        <CustomFooter textColor="text-black" />
      </footer>
    </LoadSuspense>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;
