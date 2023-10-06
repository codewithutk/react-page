import React, { useState } from 'react';
import './Home.css'; 

function Home() {
  const [buttonColors, setButtonColors] = useState({
    outstation: { backgroundColor: '', color: 'black' },
    locals: { backgroundColor: '', color: 'black' },
    airports: { backgroundColor: '', color: 'black' },
    oneway: { backgroundColor: '', color: 'black' },
    roundtrip: { backgroundColor: '', color: 'black' },
  });

  const [selectedForm, setSelectedForm] = useState(null);

  // Function to handle button click and toggle background color and text color
  function handleButtonClick(buttonId) {
    setButtonColors((prevColors) => ({
      ...prevColors,
      [buttonId]: {
        backgroundColor:
          prevColors[buttonId].backgroundColor === 'green' ? '' : 'green',
        color: prevColors[buttonId].backgroundColor === 'green' ? 'black' : 'white',
      },
    }));

    // Check if there are already two green buttons and reset the oldest one
    const greenButtonCount = Object.values(buttonColors).filter(
      (color) => color.backgroundColor === 'green'
    ).length;

    if (greenButtonCount >= 2) {
      for (const button in buttonColors) {
        if (buttonColors[button].backgroundColor === 'green') {
          setButtonColors((prevColors) => ({
            ...prevColors,
            [button]: { ...prevColors[button], backgroundColor: '', color: 'black' },
          }));
          break;
        }
      }
    }

    // Handle form selection
    if (buttonId === 'oneway') {
      setSelectedForm('oneway-form');
    } else if (buttonId === 'roundtrip') {
      setSelectedForm('roundtrip-form');
    } else {
      setSelectedForm(null);
    }
  }

  return (
    <div>
      <header className="header">
        <div className="overlay"></div>
        <a href="index.html" className="logo">
            <img src="images\RIDE EVEE Logo 1.png" alt="RideEVEE logo"/>
        </a>
        <nav className="navibar">

            <img src="images\Group 1000001816.png" alt="phone"/>

        </nav>
        <div className="header-act">
            <p className="cust-sign">Customer Sign In</p>
            <a href="#" className="btn" id="login-button">
                <span>
                    Vendor Sign In
                </span>
            </a>

            <span>
                <img className="cross" src="images\Group 1000001772.png" alt="cross"/>
            </span>


        </div>
    </header>
      <main>
        {/* Your main content */}
        <section>
          <div>
            <div className="roadimg">
              <div className="form1">
                <div>
                  <div className="form2">
                    <button
                      className="btn1"
                      onClick={() => handleButtonClick('outstation')}
                      style={buttonColors.outstation}
                    >
                      Outstation
                    </button>
                    <button
                      className="btn1"
                      onClick={() => handleButtonClick('locals')}
                      style={buttonColors.locals}
                    >
                      Local
                    </button>
                    <button
                      className="btn1"
                      onClick={() => handleButtonClick('airports')}
                      style={buttonColors.airports}
                    >
                      Airport
                    </button>
                  </div>
                  <div className="form3">
                    <button
                      className="btn2"
                      onClick={() => handleButtonClick('oneway')}
                      style={buttonColors.oneway}
                    >
                      One Way
                    </button>
                    <button
                      className="btn2"
                      onClick={() => handleButtonClick('roundtrip')}
                      style={buttonColors.roundtrip}
                    >
                      Round Trip
                    </button>
                  </div>
                </div>
                <div>
                  {selectedForm === 'oneway-form' && (
                    <div className="oneway-form">
                    <div className="block">
                        <div>
                            <div className="form4">
                                <div className="form5">
                                    <div className="forms">
                                        <p className="para1">From</p>
                                        <input className="inpus1" type="text" id=""
                                            placeholder="start typing city" />
                                    </div>
                                    <div className="form6">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                            version="1.1" viewBox="0 0 17 17" height="20" width="20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g></g>
                                            <path
                                                d="M8.5 0.5c-3.032 0-5.5 2.467-5.5 5.5 0 4.373 4.913 10.086 5.122 10.328l0.378 0.435 0.378-0.436c0.209-0.241 5.122-5.954 5.122-10.327 0-3.033-2.468-5.5-5.5-5.5zM8.5 15.215c-1.146-1.424-4.5-5.879-4.5-9.215 0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 3.333-3.354 7.791-4.5 9.215zM8.5 3.139c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM8.5 8.139c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="form5">
                                    <div className="forms">
                                        <p className="para1">To</p>
                                        <input className="inpus1" type="text" id=""
                                            placeholder="start typing city" />
                                    </div>
                                    <div className="form6">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                            version="1.1" viewBox="0 0 17 17" height="20" width="20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g></g>
                                            <path
                                                d="M8.5 0.5c-3.032 0-5.5 2.467-5.5 5.5 0 4.373 4.913 10.086 5.122 10.328l0.378 0.435 0.378-0.436c0.209-0.241 5.122-5.954 5.122-10.327 0-3.033-2.468-5.5-5.5-5.5zM8.5 15.215c-1.146-1.424-4.5-5.879-4.5-9.215 0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 3.333-3.354 7.791-4.5 9.215zM8.5 3.139c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM8.5 8.139c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="form5">
                                    <div className="forms">
                                        <p className="para1">Pick Up Date</p>
                                        <input className="inpus1" type="date" id="dateInput"
                                            placeholder="start typing date" />
                                    </div>
                                </div>
                                <div className="form7">
                                    <div className="forms">
                                        <p className="para1">Pick Up At</p>
                                        <input className="inpus1" type="text" id=""
                                            placeholder="start typing time" />
                                    </div>
                                    <div className="form6">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 512 512" height="20" width="20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="form8">
                                <button className="explorebtn">
                                    Explore Cabs
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="local">
                        <div>
                            <h1>Local Form</h1>
                        </div>
                    </div>
                    <div className="airport">
                        <div>
                            <h1>Airport Form</h1>
                        </div>
                    </div>
                </div>
                  )}
                  {selectedForm === 'roundtrip-form' && (
                    <div className='roundtrip-form'>
                    <div className="block">
                        <div>
                            <div className="form4">
                                <div className="form5">
                                    <div className="forms">
                                        <p className="para1">From</p>
                                        <input className="inpus1" type="text" id=""
                                            placeholder="start typing city" />
                                    </div>
                                    <div className="form6">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                            version="1.1" viewBox="0 0 17 17" height="20" width="20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g></g>
                                            <path
                                                d="M8.5 0.5c-3.032 0-5.5 2.467-5.5 5.5 0 4.373 4.913 10.086 5.122 10.328l0.378 0.435 0.378-0.436c0.209-0.241 5.122-5.954 5.122-10.327 0-3.033-2.468-5.5-5.5-5.5zM8.5 15.215c-1.146-1.424-4.5-5.879-4.5-9.215 0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 3.333-3.354 7.791-4.5 9.215zM8.5 3.139c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM8.5 8.139c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="form5">
                                    <div className="forms">
                                        <p className="para1">To</p>
                                        <input className="inpus1" type="text" id=""
                                            placeholder="start typing city" />
                                    </div>
                                    <div className="form6">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                            version="1.1" viewBox="0 0 17 17" height="20" width="20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g></g>
                                            <path
                                                d="M8.5 0.5c-3.032 0-5.5 2.467-5.5 5.5 0 4.373 4.913 10.086 5.122 10.328l0.378 0.435 0.378-0.436c0.209-0.241 5.122-5.954 5.122-10.327 0-3.033-2.468-5.5-5.5-5.5zM8.5 15.215c-1.146-1.424-4.5-5.879-4.5-9.215 0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5c0 3.333-3.354 7.791-4.5 9.215zM8.5 3.139c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zM8.5 8.139c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="form5">
                                    <div className="forms">
                                        <p className="para1">Pick Up Date</p>
                                        <input className="inpus1" type="date" id="dateInput"
                                            placeholder="start typing date" />
                                    </div>
                                </div>
                                <div className="form7">
                                    <div className="forms">
                                        <p className="para1">Pick Up At</p>
                                        <input className="inpus1" type="text" id=""
                                            placeholder="start typing time" />
                                    </div>
                                    <div className="form6">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 512 512" height="20" width="20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="form8">
                                <button className="explorebtn">
                                    Explore Cabs
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="local">
                        <div>
                            <h1>Local Form</h1>
                        </div>
                    </div>
                    <div className="airport">
                        <div>
                            <h1>Airport Form</h1>
                        </div>
                    </div>
                </div>
                  )}
                </div>
              </div>
            </div>
            <img className="road" src="images\Road Trip by car image 1.png" alt="road" />
          </div>
        </section>

        <section className="section-featured" id="featured">
            <h1 className="carhead">
                India's Leading One-Way Inter-City Cab Service Provider
            </h1>
            <div className="container">



                <ul className="featured-list">

                    <li>
                        <div className="featured-card">
                            <figure className="card-banner">
                                <img src="images\seodata-image 1.png" alt="Honda BRV" loading="lazy" width="440"
                                    height="300" className="w-100"/>
                            </figure>
                        </div>


                    </li>

                    <li>
                        <div className="featured-card">


                            <div className="card-content">
                                <div className="card-title-wrapper">
                                    Return fare , not fair!
                                    Why pay for the return journey when you are only going for one side route only?
                                    Just give one side pay and get fair bill.Why pay for the return journey when you are
                                    only going for one side route only?
                                    Just give one side pay and get fair bill.


                                </div>




                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="featured-card">


                            <div className="card-content">

                                <div className="card-title-wrapper">
                                    Return fare , not fair!
                                    Why pay for the return journey when you are only going for one side route only?
                                    Just give one side pay and get fair bill.Why pay for the return journey when you are
                                    only going for one side route only?
                                    Just give one side pay and get fair bill.


                                </div>

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <section>
            <h1 className="maintext">Why choose AC Bus or AC Train
                for your One-way Journey?
                <p className="ptxt">Our oneway cab service is cheaper than AC bus and 2 tier AC train ticket fares, it reduces your travel time and you travel at your own private space also to enjoy your journey. Our one way taxi will come at your doorstep and take you to your desired destination. So book you oneway cab from Lucknow to Gorakhpur or Varanasi to Bareilly
                    read More....</p>
            </h1>

                
            <img className="imi" src="images\uriel-soberanes-jg4E9uUXxqU-unsplash 2.png" alt="background"/>

        </section>


        <section className="empty">
            <div className="texu">
                <div>
                    <img className="imu" src="images\image 5.png" alt=""/>
                </div>

                <div className="details">

                    <div className="memumi">
                        <h1 className="Ghead">WHY CHOOSE YATRI CAR RENTAL?

                        </h1>
                    </div>

                    <div className="mamu">
                        <div className="mimi">
                            <div className="carid">
                                <div className="cardicon">
                                    <img className="icon2" src="icons\Iconsax\Linear\flag.png" alt=""/>
                                    <div className="fleri">
                                       
                                    <h1 className="headrit">
                                        FIRST RESPONSE TIME
                                    </h1>
                                    <p>Avail Best Car Rental Service in Lucknow with driver for Local or Outstation within the moment of your call for best car hire experience.

                                    </p>
                                    </div>
                                </div>
                            </div>

                            <div className="carid">
                                <div className="cardicon">
                                    <img className="icon2" src="icons\Untitled (2)\Iconsax\Linear\Vector.png" alt=""/>
                                    <div className="fleri">
                                        
                                    <h1 className="headrit">EASY TO ORDER</h1>
                                    <p>Easily Book Cab Online with our website or call our customer support team</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mimi">
                            <div className="carid">
                                <div className="cardicon">
                                    <img className="icon2" src="icons\Untitled (1)\vuesax\linear\vuesax\linear\people.png" alt="" />

                                   <div className="fleri">
                                    <h1 className="headrit">
                                        VAST FLEET
                                    </h1>
                                    <p>We have all kinds of Car on Rent available like Sedan, Suv, Muv, Premium Sedan, Tampo Traveller etc as per ur requirement</p>
                                   </div>
                                </div>
                            </div>

                            <div className="carid">
                                <div className="cardicon">
                                    <img className="icon2"src="icons\Untitled (3)\vuesax\linear\money-recive.png" alt=""/>

                                   <div className="fleri">
                                    <h1 className="headrit">
                                        GREAT TARIFFS
                                        </h1>
                                        <p>Rent A Car !Our car hire tariff are very low when compare to other operators in Lucknow. Book online cabs with best prices in Lucknow at Yatri Car Rental</p>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>




            </div>

        </section>


        <section className="empley">

            <h1 className="ghadi">
                WHY CHOOSE ONEWAY CAB?
            </h1>

            <div className="coly">

                <div className="listinfo">
                    <ul className="listi">
                        <li>INSTANT BOOKING & CONFIRMATION</li>
                        <li>CONFIRMED BOOKING IMMEDIATELY</li>
                        <li>NO RETURN FARE FOR ONE-WAY TRIP</li>
                        <li>CLEAN & PROFESSIONAL CAB SERVICES</li>
                        <li>NO NIGHT OR LUGGAGE CHARGES</li>


                    </ul>

                </div>
    
                <div className="listiclass">
                    <ul className="listitems">
                        <li>PICK-UP FROM YOUR HOUSE</li>
                        <li>DEDICATED CAB JUST FOR YOU
                        </li>
                        <li>DROP TO YOUR DESIRED DESTINATION</li>
                        <li>COMPLETED MORE THAN 20,000+ ONE-WAY TRIPS</li>
                        <li>MULTIPLE PAYMENT OPTION INCLUDING CREDIT CARD.</li>


                    </ul>
    
                </div>


            </div>
        </section>
        <div className="footer">

            <div className="foot">
                <h1 className="Ghead">DISCOVERING INDIA'S DIVERSE LANDSCAPES, ONE SCENIC ROAD TRIP AT A TIME</h1>
                <ul>
                    <li className="lilu">Experience the thrill of road travel with our reliable car rental and taxi service as we explore the diverse landscapes of India together.We're passionate about making car hire accessible and enjoyable for everyone.</li>

                    <li className="lilu">
                        Instead of worrying about the road, relax in our chauffeur - driven cabs on your next vacation.With a presence in over 2000 cities across India, we're here to take you wherever your heart desires with our car rental services.
                    </li>

                    <li className="lilu">
                        We cherish the freedom to stop, breathe in the fresh air, immerse in local cultures, and Savor regional cuisines along the way.These moments of discovery enrich your travels and create lasting memories through our rent a car service
                    </li>

                    <li className="lilu">
                        No destination is too far or too close; we encourage you to explore the beauty around you with our car hire options.Pack your bags, set out on weekend adventures, and uncover the gems in your vicinity with our taxi service.
                    </li>

                    <li className="lilu">
                        Planning your trip is a breeze with our user - friendly website, or you can chat with our travel experts at 8960170877 for personalized guidance on car rental.Our cab booking app simplifies the process, ensuring a hassle - free experience when you rent a car.
                    </li>

                    <li className="lilu">
                        Our experienced drivers are your companions on the road, guiding you through India's best experiences with our car rental and taxi service. From booking to your safe return home, we're dedicated to ensuring you have an exceptional road trip.
                    </li>
                </ul>


            </div>


        </div>


        <div className="lamba">
            <div className="cardni">
        <div className="icon3"><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.83338 9.66665H3.62505M25.375 9.66665H24.1667M14.5 3.62498V6.04165M12.6875 6.04165H16.3125M7.25005 18.125H10.875M18.125 18.125H21.75M18.7413 3.41957H10.2588C7.25005 3.41957 6.58546 4.9179 6.1988 6.75457L4.83338 13.2916H24.1667L22.8013 6.75457C22.4146 4.9179 21.75 3.41957 18.7413 3.41957ZM26.5713 23.9491C26.7042 25.3629 25.5684 26.5833 24.1184 26.5833H21.8467C20.5417 26.5833 20.3605 26.0275 20.1309 25.3387L19.8892 24.6137C19.5509 23.6229 19.3334 22.9583 17.5934 22.9583H11.4067C9.66671 22.9583 9.41296 23.7075 9.11088 24.6137L8.86921 25.3387C8.63963 26.0275 8.45838 26.5833 7.15338 26.5833H4.88171C3.43171 26.5833 2.29588 25.3629 2.4288 23.9491L3.10546 16.5904C3.27463 14.7779 3.62505 13.2916 6.79088 13.2916H22.2092C25.375 13.2916 25.7255 14.7779 25.8946 16.5904L26.5713 23.9491Z" stroke="black" stroke-width="1.8125" stroke-linecap="round" stroke-linejoin="round"/>
</svg><h4>Cab Type</h4></div>

                <hr/>
                <h4>AC Sedans</h4>
                    <h4>AC Hatchbacks</h4>
                   <h4>AC SUV</h4>
            </div>

            <div className="cardni">
                <div className="icon4"></div>
                <h1 className="sirr">Models Include</h1>
                <hr/>
                

                    <ul>
                        <h4>Etios, Amaze, Dzire etc.</h4>
                        <h4>Wagon R, Celerio, Micra etc.</h4>
                        <h4>Ertiga, Xylo etc.</h4>
                        
                    </ul>
            </div>

            <div className="cardni">
                <h1 className="sirr">Passengers</h1>
                <hr/>
               

                    <ul>
                        <li>4 Pax</li>
                        <li>4 Pax</li>
                        <li>6-7 Pax</li>
                        
                    </ul>

                    
            </div>

            

            <div className="cardni">
                <h1 className="sirr">Ideal For</h1>
                <hr/>
               

                    <ul>
                        <li>Comfortable trips with small families</li>
                    <li>Budget trips over short distances</li>
                    <li>Premium trips with large families</li>
                    </ul>
            </div>

            <div className="cardni">
                <h1 className="sirr">Fare</h1>
                <hr/>
                <ul>
                    <li>Rs.11/KM</li>
                    <li>Rs.11/KM</li>
                    <li>Rs.13/KM</li>
                    
                </ul>
            </div>
        </div>


        <div className="lasty">

            <h1 className="Ghead">
                WHY CHOOSE YATRI CAR RENTAL?

            </h1>

            <ul>
                <li className="lilu">

                    Yatri Car Rental has been a trusted digital platform for booking local and outstation car rental and taxi services since 2014. Our primary goal is to offer our clients an exceptional car rental and cab booking experience, and we take great pride in our commitment to safety, reliability, and experienced drivers. These qualities are evident across all our car rental services, making us the preferred choice for those seeking rental cars and taxi services in INDIA.

                </li>

                <li className="lilu">

                    Service You Can Trust - At Yatri Car Rental, we are dedicated to providing dependable services in INDIA. We guarantee that we won't cancel any bookings without advance notification, and our rental cars are meticulously maintained to ensure a seamless and stress-free journey for our clients.

                </li>

                <li className="lilu">

                    Safety is Our Priority - Safety and comfort are paramount at Yatri Car Rental in INDIA. We exclusively hire experienced and skilled drivers who possess in-depth knowledge of the city's roads and traffic regulations. Our drivers are committed to delivering excellent customer service and ensuring a comfortable and stress-free travel experience for passengers.

                </li>

                <li className="lilu">

                    Expert Chauffeurs at Your Service - Yatri Car Rental takes pride in selecting only the most skilled, knowledgeable, and courteous drivers to enhance the convenience and satisfaction of our clients.

                </li>

                <li className="lilu">

                    Extensive Industry Experience - With over 10 years of industry expertise, Yatri Car Rental is your go-to choice for premium car hire services in Lucknow, Uttar Pradesh.

                </li>

                <li className="lilu">

                    Proven Track Record - We place a strong emphasis on transparency in our billing system and consistently strive to provide a seamless and satisfactory experience for our customers. Our commitment to customer comfort and satisfaction is evident in our outstanding Google ratings, where we consistently receive ratings of 4.8 stars or higher.

                </li>




            </ul>

        </div>
        {/* Rest of your main content */}
      </main>
      <footer className="footer">
            <div className="foolast">
                <div className="fooim">
                    <img src="images\RIDE EVEE Logo 1.png" alt="logo"/>
                </div>

                <div className="foolin">
                    <div className="linki">
                        <a href="#">Home</a>
                    </div>
                    <div className="linki">
                        <a href="#">About</a>
                    </div>
                   <div className="linki">
                    <a href="#">services</a>
                   </div>
                    <div className="linki">
                        <a href="#">News</a>
                    </div>
                    <div className="linki">
                        <a href="#">Contact</a>
                    </div>
                </div>

                <div className="news">
                    <h1 className="newsHead">Newsletter</h1>
               <div className="btnlast">
                <input className="fooinp" type="text" placeholder="Type here"/>
                <button className="buttonlast"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path></svg></button>

               </div>
                </div>
                




            </div>
            <p className="lastp">All copyrights are reserved by RIDE EVEE</p>


        </footer>

    </div>
  );
}

export default Home;