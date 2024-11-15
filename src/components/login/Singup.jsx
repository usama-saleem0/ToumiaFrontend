import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login23 from "../../assets/Images/login1.png";
import { useDispatch, useSelector } from 'react-redux';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { signupUser } from '../../Redux/Features/ToursSlice';

const Singup = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { loading, user, error } = useSelector((state) => state.tours);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    type: '',

  });

  const { username, email, password, confirmPassword, type } = formData;


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();


    // Email validation
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format!");
      return;
    }



    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      // Dispatch signup action
      const resultAction = await dispatch(signupUser({ username, email, password, type }));

      if (signupUser.fulfilled.match(resultAction)) {
        toast.success("Signup successful!");
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          type: '',
        });
        navigate('/dashboard');
      } else {
        throw new Error(resultAction.payload || "Signup failed");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };




  return (
    <>

      <ToastContainer />
      <section className="Login">
        <Link className="none-list" to='/' style={{ textDecoration: 'none' }}>
          <button className="crous">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
              <g clip-path="url(#clip0_140_1971)">
                <path d="M1.77516e-06 30.0047C-0.00563503 13.4304 13.4137 0.00751983 29.9953 3.15672e-06C46.5713 -0.00751352 59.9944 13.4098 60 29.9953C60.0075 46.5696 46.5882 59.9925 30.0066 60C13.4363 60.0075 0.00563858 46.5809 1.77516e-06 30.0047ZM5.98065 29.9765C5.94683 43.1814 16.7639 54.0111 29.9953 54.0224C43.1986 54.0318 53.9348 43.3224 54.0212 30.0592C54.1077 16.8749 43.3207 6.04341 30.0404 5.9814C16.8446 5.91751 6.01447 16.719 5.98065 29.9765Z" fill="#FF7F47" />
                <path d="M34.2547 30.0235C37.0544 32.8178 39.7882 35.552 42.5314 38.2787C43.3469 39.0905 43.7847 40.0207 43.5423 41.1895C43.082 43.4257 40.4872 44.3578 38.7116 42.9221C38.4936 42.7455 38.2982 42.5406 38.099 42.3415C35.5944 39.8403 33.0936 37.3353 30.5889 34.8342C30.4104 34.6556 30.2225 34.4846 30.0046 34.2779C29.7923 34.4771 29.6025 34.6444 29.4259 34.821C26.8386 37.4049 24.2588 39.9962 21.664 42.5745C20.3394 43.8899 18.5694 43.9613 17.3274 42.7812C16.061 41.5766 16.0591 39.7087 17.3594 38.3971C19.9523 35.785 22.5621 33.1899 25.1626 30.5872C25.3411 30.4087 25.5121 30.2208 25.7206 30.0028C25.5215 29.7905 25.3561 29.6007 25.1776 29.424C22.5603 26.8045 19.9354 24.1906 17.3255 21.5635C16.4406 20.6727 16.1418 19.6016 16.5646 18.4027C16.9742 17.2376 17.8404 16.5649 19.0598 16.4108C20.112 16.2774 20.9669 16.7096 21.7035 17.45C24.2663 20.0263 26.8386 22.5914 29.409 25.1583C29.5893 25.3368 29.7754 25.5097 29.9952 25.7202C30.2056 25.5248 30.3954 25.3594 30.5739 25.1828C33.1612 22.5989 35.7466 20.0132 38.3301 17.4237C39.1268 16.625 40.0494 16.2229 41.188 16.4559C43.4296 16.9163 44.3615 19.502 42.9279 21.2816C42.7381 21.5184 42.5164 21.7307 42.3022 21.9468C39.8183 24.4348 37.3306 26.921 34.8447 29.4071C34.6643 29.5875 34.4934 29.7736 34.2547 30.0235Z" fill="#FF7F47" />
              </g>
              <defs>
                <clipPath id="clip0_140_1971">
                  <rect width="60" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </Link>
        <div className="main-Login">
          <div className="Login-form">
            <h2>SIGN</h2>
            <form action="">
              <div className="LOGIN-input-box">
                <label htmlFor="">Name*</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div className="LOGIN-input-box">
                <label htmlFor="">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}

                // onChange={(e) => handleChange(e.target.name, e.target.value.toLowerCase())}
                />
              </div>

              <div className="LOGIN-input-box">
                <label htmlFor="">Type*</label>
                <select
                  className="form-select form-select-lg mb-3"
                  name="type"  // Make sure to set the 'name' attribute
                  value={formData.type}  // Bind to formData.type
                  onChange={handleChange}  // Ensure onChange is bound to the handleChange function
                  required
                >
                  <option value="" disabled>Select Type</option>  {/* Use value="" for default option */}
                  <option value="Customer">Customer</option>
                  <option value="Vendor">Vendor</option>
                  {/* <option value="Admin">Admin</option> */}
                </select>
              </div>



              <div className="LOGIN-input-box">
                <label htmlFor="">Password*</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange} />
              </div>

              <div className="LOGIN-input-box">
                <label htmlFor="">Confirm  Password*</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange} />
              </div>


              {/* <Link className="none-list" to='/dashboard' style={{ textDecoration: 'none' }}>
                <button>Sign Up</button>
              </Link> */}
              <button className="none-list" type="submit"
                onClick={handleSubmit}
              >
                 {loading ? 'Logging in...' : 'Sign Up'}
                 
              </button>
              <p>Have an account?      
                 <span><Link className="none-list" to='/Login' style={{ textDecoration: 'none' }}>Login</Link></span></p>
            </form>
          </div>

          <div className="Login-bg">
            <img src={login23} alt="" />
          </div>
        </div>
      </section>
    </>
  )



}


export default Singup