import PropTypes from 'prop-types';
import LoadSuspense from '@components/load-suspense'
import { Navbar } from '../components/navbar/Navbar.jsx';
import { Footer } from '../components/footer/footer.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CustomLayout = ({children}) => {
  return (
    <LoadSuspense className="relative flex flex-col ">
        <Navbar/>
        <ToastContainer autoClose={5000}/>
        <div>{children}</div>
        <Footer/>
    </LoadSuspense>
  )
}

CustomLayout.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default CustomLayout