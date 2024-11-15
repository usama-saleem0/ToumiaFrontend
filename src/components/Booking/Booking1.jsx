import React, { useState, useRef } from "react";
import booking from "../../assets/Images/booking.png";
import circle from "../../assets/Images/circle.png";
import pay1 from "../../assets/Images/pay1.png";
import pay2 from "../../assets/Images/pay2.png";
import pay3 from "../../assets/Images/pay3.png";
import pay4 from "../../assets/Images/pay4.png";
import pay5 from "../../assets/Images/pay1.png";
import pay6 from "../../assets/Images/pay2.png";
import pay7 from "../../assets/Images/pay3.png";
import pay8 from "../../assets/Images/pay4.png";
import { useParams } from "react-router-dom";
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { Col, Modal, Row } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { baseurl } from "../../BaseUrl";



const Booking1 = () => {


  // WORKING FOR FLIGHTS BOOKINGS
  // WORKING FOR FLIGHTS BOOKINGS
  // WORKING FOR FLIGHTS BOOKINGS
  // WORKING FOR FLIGHTS BOOKINGS
  // WORKING FOR FLIGHTS BOOKINGS
  // WORKING FOR FLIGHTS BOOKINGS
  // WORKING FOR FLIGHTS BOOKINGS
  // WORKING FOR FLIGHTS BOOKINGS
  // WORKING FOR FLIGHTS BOOKINGS



  const [selectedPayment, setSelectedPayment] = useState('');

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.id);
  };



  const { id } = useParams();

  console.log("Flight ID:", id);

  const getStoredFlightData = () => {
    const storedFlightData = localStorage.getItem('flightData');
    if (!storedFlightData) return [];

    const parsedData = JSON.parse(storedFlightData);

    // Check if the data is in the `duffelResponse.data.offers` structure
    if (parsedData.duffelResponse?.data?.offers) {
      return parsedData.duffelResponse.data.offers;
    }

    // Otherwise, assume it's a flat `offers` array
    return parsedData;
  };

  const offers = getStoredFlightData();

  // Find the specific flight offer by matching the id
  const flightDetails = offers.find((offer) => offer.id === id);

  if (!flightDetails) return <p>Flight details not found.</p>;






  const stripe = useStripe();
  const elements = useElements();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    
    // const amount = flightDetails.total_amount;

      // const amount = parseInt(`${flightDetails.total_amount}`, 10);
const amount = Math.round(parseFloat(flightDetails.total_amount).toFixed(2) );

    const cardElement = elements.getElement(CardElement);

    // Step 1: Validate the card details
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      // Show error if card details are invalid
      setError(error.message);
      toast.error(error.message);
      return;
    }

    try {
      // Step 2: Card details are valid, proceed to create payment intent
      const { clientSecret } = await fetch(`${baseurl}/createpaymentt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
        }),
      }).then(res => res.json());

      // Step 3: Confirm the card payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (result.error) {
        setError(result.error.message);
        toast.error(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          toast.success("Payment is Successful");
          setPaymentSuccess(true);

          setTimeout(() => {
            toast.success('Payment Successfully');
          }, 1000);
        }
      }
    } catch (error) {
      console.error("Error in payment process:", error);
      toast.error("There was an error processing your payment.");
    }
  };




// INCORRECT BUT FOR TESTING WORKS FINE



    //   const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     if (!stripe || !elements) {
    //         return;
    //     }

    //     // const amount = Math.round(flightDetails.total_amount * 100);
    //     const amount = Math.round(parseFloat(flightDetails.total_amount).toFixed(2) );




    //     // Call the backend to create a payment intent
    //     const { clientSecret } = await fetch(`${baseurl}/createpaymentt`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             amount,
              
    //         }) // Amount in cents ($10)
    //     }).then(res => res.json());


    //     const cardElement = elements.getElement(CardElement);

    //     // Confirm the card payment with Stripe
    //     const result = await stripe.confirmCardPayment(clientSecret, {
    //         payment_method: {
    //             card: cardElement,
    //         },
    //     });

    //     if (result.error) {
    //         setError(result.error.message);
    //         toast.error(result.error.message)

    //     } else {
    //         if (result.paymentIntent.status === 'succeeded') {
    //             toast.success("Payment is Successful")
        
    //             setPaymentSuccess(true);

    //             setTimeout(() => {
    //                 toast.success('Payment Successfully')
    //             }, 1000);


    //         }
    //     }
    // };





  return (



    <div className="booking-section">

      <div className="container">
        <div className="main-booking">
          <div className="booking-details-div">
            <div className="booking-img">
              <img src={booking} alt="" />
            </div>
            <div className="booking-details">
              <div>
                <h4>{flightDetails.slices[0].origin.city_name} to {flightDetails.slices[0].destination.city.name}</h4>
                <h6>Return Flight</h6>

              </div>
              <div>
                {/* <p>01 Night</p> */}
                <h5>${flightDetails.total_amount}</h5>
              </div>
            </div>
          </div>
          <div className="pay">
            <h5>Pay Now</h5>
            <div className="pay-divs">
              <div className="pay1">
                <div className="pay-details">
                  <div className="circle-checkbox">
                    <input type="radio" name="payment" id="payWithCard"
                      onChange={handlePaymentChange}
                    />
                  </div>
                  <div>
                    <h5>Pay With Card</h5>
                    <div className="pay-cards-img-div">
                      <div className="pay-cards-img">
                        <img src={pay1} alt="Pay Option 1" />
                      </div>
                      <div className="pay-cards-img">
                        <img src={pay2} alt="Pay Option 2" />
                      </div>
                      <div className="pay-cards-img">
                        <img src={pay3} alt="Pay Option 3" />
                      </div>
                      <div className="pay-cards-img">
                        <img src={pay4} alt="Pay Option 4" />
                      </div>
                    </div>
                  </div>
                </div>
                <h5>${flightDetails.total_amount}</h5>
              </div>
              <div className="pay1">
                <div className="pay-details">
                  <div className="circle-checkbox">
                    <input type="radio" name="payment" id="payWithCrypto"
                      onChange={handlePaymentChange}
                    />
                  </div>
                  <div>
                    <h5>Pay With Crypto</h5>
                    <div className="pay-cards-img-div">
                      <div className="pay-cards2-img">
                        <img src={pay5} alt="Pay Option 5" />
                      </div>
                      <div className="pay-cards2-img">
                        <img src={pay6} alt="Pay Option 6" />
                      </div>
                      <div className="pay-cards2-img">
                        <img src={pay7} alt="Pay Option 7" />
                      </div>
                      <div className="pay-cards2-img">
                        <img src={pay8} alt="Pay Option 8" />
                      </div>
                    </div>
                  </div>
                </div>
                <h5>${flightDetails.total_amount}</h5>
              </div>
            </div>
          </div>
          <form>
            {" "}
            <div className="personal">
              <h3>Your Personal Information</h3>
              <div className="inputs">
                <div className="input1-div">
                  <p>First Name</p>
                  <input
                    className="input"
                    type="text"
                    placeholder="City,Distirct or Specific Airpot"
                  />
                </div>
                <div className="input1-div">
                  <p>Last Name</p>
                  <input
                    className="input"
                    type="text"
                    placeholder="City,Distirct or Specific Airpot"
                  />
                </div>
              </div>
              <div className="inputs">
                <div className="input1-div">
                  <p>Email I'd</p>
                  <input
                    className="input"
                    type="text"
                    placeholder="City,Distirct or Specific Airpot"
                  />
                </div>
                <div className="input1-div">
                  <p>Verify Email I'd</p>
                  <input
                    className="input"
                    type="text"
                    placeholder="City,Distirct or Specific Airpot"
                  />
                </div>
              </div>
              <div className="inputs">
                <div className="input1-div">
                  <p>Country Code</p>
                  <select className="input dropdown">
                    <option value="">Select Country Code</option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+91">+91 (India)</option>
                  </select>
                </div>
                <div className="input1-div">
                  <p>Phone No#</p>
                  <input
                    className="input"
                    type="text"
                    placeholder="City,Distirct or Specific Airpot"
                  />
                </div>
              </div>
            </div>

            {selectedPayment === "payWithCard" && (

              <div className="personal">
                <h3>Your Card Information</h3>
                <div className="inputs">


                  <div className="input1-div" style={{ padding: '45px', border: '1px solid #ff7f47' , borderRadius: '10px'}}>
                    <CardElement
                      options={{
                        style: {
                          base: {
                            fontSize: '18px',
                            color: '#aab7c4',
                            '::placeholder': { color: '#000' },
                          },
                          invalid: { color: '#9e2146' },
                        },
                        hidePostalCode: true,
                      }}
                    />
                  </div>


                  <div className="input1-div">
                    <p>Card Holder Name</p>
                    <input
                      className="input"
                      type="text"
                      placeholder="Card Holder"
                    />
                  </div>



                </div>

              </div>
            )}
            {selectedPayment === "payWithCrypto" && (
              <div className="personal">
                <h3>Pay with Crypto</h3>
                <div className="inputs">
                  <div className="input1-div">
                    <p>First Name</p>
                    <input
                      className="input"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="input1-div">
                    <p>Last Name</p>
                    <input
                      className="input"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="inputs">
                  <div className="input1-div">
                    <p>Country Code</p>
                    <input className="input" type="text" placeholder="Code" />
                  </div>
                  <div className="input1-div">
                    <p>Phone Number</p>
                    <input className="input" type="text" placeholder="number" />
                  </div>
                </div>
                <div className="inputs">
                  <div className="input1-div">
                    <p>Address</p>
                    <input
                      className="input"
                      type="text"
                      placeholder="address enter"
                    />
                  </div>
                  <div className="input1-div">
                    <p>City</p>
                    <input className="input" type="text" placeholder="enter" />
                  </div>
                </div>
                <div className="inputs">
                  <div className="input1-div">
                    <p>Country</p>
                    <select className="input">
                      <option value="">Select Country</option>
                      <option value="us">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="india">India</option>
                    </select>
                  </div>
                  <div className="input1-div">
                    <p>Zip Code</p>
                    <input className="input" type="text" placeholder="zip code" />
                  </div>
                </div>
              </div>
            )}

            <div className="submit-btns">
              <button className="cancel-btn">Cancel</button>
              <button className="proceed-btn" onClick={handleSubmit}>Proceed</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking1;
