import { Link } from 'react-router-dom';
import './style.css';
//==========================================
const Header = () => {
  return (
    <>
      {/* ----------- header ----------- */}
      <div className='d-flex align-items-center  justify-content-center mt-4 '>
        <div>
          <Link to='https://angizehco.com/' className='image-container'>
            <img
              data-test='logo'
              className='imgs'
              src='/logo-2.png'
              alt='logo'
              sizes=''
            />
          </Link>
        </div>
        <div className='text-center text-warning header '>
          <p className='fw-bold fs-4 mx-3 mb-0 '>ReactJs Challenge</p>
          <p className='text-center'>Easy and Disappointing </p>
        </div>
      </div>

      {/* ----------- banner ----------- */}
      <img className='banner' src='/cover.jpg' alt='banner' />
    </>
  );
};

export default Header;
