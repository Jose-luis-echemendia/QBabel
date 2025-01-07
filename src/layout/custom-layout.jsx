import PropTypes from 'prop-types';
import LoadSuspense from '@/components/load-suspense';
import Footer from '@/views/footer';
import NavBar from '@/views/navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomLayout = ({ children }) => {
  return (
    <LoadSuspense className="relative flex flex-col ">
      <NavBar />
      <ToastContainer autoClose={5000} />
      <main className='antialiased'>{children}</main>
      <Footer />
    </LoadSuspense>
  );
};

CustomLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomLayout;
