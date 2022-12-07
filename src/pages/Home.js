import './stylesheet.css';
import './normalizer.css';
import React from "react";

export default function Home(){
    return(
        <body class="bg-body">
            <div class="m-0 p-0 d-flex justify-content-center align align-items-center col-12 mt-5 pt-5">
                    <h1>FINETUNING - BREATHING</h1>
            </div>
            <div class="searchbox p-0 col 6 mt-5 pt-5">
                <h5>Hi. What are you looking for today?</h5>
                <div class="search-section my-5 justify-content-center">
                    <form action="IDetails.html">
                        <div class="container form">
                            <div class="d-flex justify-content-center">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>All Categories</option>
                                    <option value="1">Brasswinds</option>
                                    <option value="2">Woodwinds</option>
                                    <option value="3">Drums</option>
                                </select>
                                <label>
                                    <input type="email" class="form-control" placeholder="ex: Yamaha"/>
                                </label>
                                <label>
                                    <input type="email" class="form-control" placeholder="ex: Nairobi"/>
                                </label>
                                <button type="submit" class="form-control">SEARCH</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <section className="sale-info">
                <h2 className="h4 text-center text-white font-weight-bold col-12 m-auto">THREE GREAT WAYS TO SHOP WITH
                    US</h2>
                <div className="checks row col-12 text-center text-white mt-3 px-0 mx-0">
                    <p className="col-12 col-md-4 px-0"><i className="text-danger fas fa-check px-2"></i>We are open for
                        sales, repairs
                        and rentals.
                    </p>
                    <p className="col-12 col-md-4 px-0"><i className="text-danger fas fa-check px-2"></i>Online Shopping
                        with Free
                        Shipping (Over $99)
                    </p>
                    <p className="col-12 col-md-4 px-0"><i className="text-danger fas fa-check px-2"></i>Curb Side
                        Shopping</p>
                </div>
                <div className="col-12 d-flex justify-content-center rounded mx-0 mb-3 px-0">
                    <button type="button" className="form-control">Learn More
                    </button>
                </div>
            </section>

        <div class="">
            <ul class="row w-100 m-0 mt-3">
                <li class="col-12 col-md-6 col-lg-2 px-0 d-flex flex-column align-items-center"><a class="img-shipping py-2"
                                                                                                   href="#">
                    <img
                        src="https://cdn.shortpixel.ai/spai/w_89+q_glossy+ret_img+to_webp/https://www.theartsmusicstore.com/wp-content/uploads/2020/02/dedicated-sales-person.png"
                        alt="salesperson-logo"/>
                </a>
                    <p class="text">Dedicated Salesperson</p>
                    <p class="text"><small>Questions? Buy with confidence with our expert team</small></p>
                </li>
                <li class="col-12 col-md-6 col-lg-2 px-0 d-flex flex-column align-items-center"><a class="img-shipping py-2"
                                                                                                   href="#">
                    <img
                        src="https://cdn.shortpixel.ai/spai/w_89+q_glossy+ret_img+to_webp/https://www.theartsmusicstore.com/wp-content/uploads/2020/02/fast-free-shipping.png"
                        alt="shipping-logo"/>
                </a>
                    <p class="text">Fast & Free Shipping</p>
                    <p class="text"><small>on all orders over $99</small></p>
                </li>
                <li class="col-12 col-md-6 col-lg-2 px-0 d-flex flex-column align-items-center"><a class="img-shipping py-2"
                                                                                                   href="#">
                    <img
                        src="https://cdn.shortpixel.ai/spai/w_89+q_glossy+ret_img+to_webp/https://www.theartsmusicstore.com/wp-content/uploads/2020/02/easy-return.png"
                        alt="return-logo"/>
                </a>
                    <p class="text">Easy Returns</p>
                    <p class="text"><small>100% Money back guarantee</small></p>
                </li>
                <li class="col-12 col-md-6 col-lg-2 px-0 d-flex flex-column align-items-center"><a class="img-shipping py-2"
                                                                                                   href="#">
                    <img
                        src="https://cdn.shortpixel.ai/spai/w_89+q_glossy+ret_img+to_webp/https://www.theartsmusicstore.com/wp-content/uploads/2020/02/price-match-guarantee.png"
                        alt="price-logo"/>
                </a>
                    <p class="text">Price Match Guarantee</p>
                    <p class="text"><small>Found a better price in Canada? We’ll match it!</small></p>
                </li>
                <li class="col-12 col-md-6 col-lg-2 px-0 d-flex flex-column align-items-center"><a class="img-shipping py-2"
                                                                                                   href="#">
                    <img
                        src="https://cdn.shortpixel.ai/spai/w_89+q_glossy+ret_img+to_webp/https://www.theartsmusicstore.com/wp-content/uploads/2020/02/instant-financing.png"
                        alt="financing-logo"/>
                </a>
                    <p class="text">Instant Financings</p>
                    <p class="text"><small>Get approved in seconds</small></p>
                </li>
                <li class="col-12 col-md-6 col-lg-2 px-0 d-flex flex-column align-items-center"><a class="img-shipping py-2"
                                                                                                   href="#">
                    <img
                        src="https://cdn.shortpixel.ai/spai/w_89+q_glossy+ret_img+to_webp/https://www.theartsmusicstore.com/wp-content/uploads/2020/02/buy-with-confidence.png"
                        alt="hands-logo"/>
                </a>
                    <p class="text">Buy With Confidence</p>
                    <p class="text"><small>Read what our customers say about us</small></p>
                </li>
            </ul>
        </div>

        <section class="category ml-2 mt-3">
            <h2 class="col-12 py-2 h4 tittle">ELECTRIC GUITARS</h2>
            <div class="container-fluid row">
                <div class="d-flex flex-column mb-sm-3 col-sm-12 col-md-6 col-lg-3">
                    <article class="card bg-color5">
                        <div class="card-1 instrument">
                        </div>
                            <div class="card-info p-3">
                            <h2 class="card-title h4 font-weight-bold">Gretsch Guitars</h2>
                            <h3 class="card-subtitle h5 font-weight-bold text-danger">New</h3>
                            <p class="card-description py-2">Gretsch G5422TG Hollow Body Electric Guitar w/ Bigsby - Snow Crest
                                White</p>
                            <div class="card-sale-container d-flex justify-content-between align-center">
                  <span class="btn btn-add"><i class="fas fa-plus secondary-color"></i>
                  </span>
                                <span class="price text-danger">$1,700</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
                <div class="d-flex flex-column mb-sm-3 col-sm-12 col-md-6 col-lg-3">
                    <article class="card bg-color5">
                        <div class="card-2 instrument">
                        </div>
                        <div class="card-info p-3">
                            <h2 class="card-title h4 font-weight-bold">Chapman Guitars</h2>
                            <h3 class="card-subtitle h5 font-weight-bold text-danger">New</h3>
                            <p class="card-description py-2">Chapman ML1 Modern Standard Series v2 Electric Guitar - Midnight Sky
                            </p>
                            <div class="card-sale-container d-flex justify-content-between align-center">
                  <span class="btn btn-add"><i class="fas fa-plus secondary-color"></i>
                  </span>
                                <span class="price text-danger">$1,400</span>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="d-flex flex-column mb-sm-3 col-sm-12 col-md-6 col-lg-3">
                    <article class="card bg-color5">
                        <div class="card-3 instrument">
                        </div>
                        <div class="card-info p-3">
                            <h2 class="card-title h4 font-weight-bold">Heritage Guitars</h2>
                            <h3 class="card-subtitle h5 font-weight-bold text-danger">New</h3>
                            <p class="card-description py-2">Heritage Guitars Artisan Aged Collection H-530 Electric Guitar w/Case -
                                Cherry</p>
                            <div class="card-sale-container d-flex justify-content-between align-center">
                  <span class="btn btn-add"><i class="fas fa-plus secondary-color"></i>
                  </span>
                                <span class="price text-danger">$4,200</span>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="d-flex flex-column mb-sm-3 col-sm-12 col-md-6 col-lg-3">
                    <article class="card bg-color5">
                        <div class="card-4 instrument">
                        </div>
                        <div class="card-info p-3">
                            <h2 class="card-title h4 font-weight-bold">Vance C Guitars</h2>
                            <h3 class="card-subtitle h5 font-weight-bold text-danger">New</h3>
                            <p class="card-description py-2">Vance Custom "Fifty Three" Hollow Electric Guitar w/Case -
                                Bordeaux Cherry </p>
                            <div class="card-sale-container d-flex justify-content-between align-center">
                  <span class="btn btn-add"><i class="fas fa-plus secondary-color"></i>
                  </span>
                                <span class="price text-danger">$3,000</span>
                            </div>
                        </div>
                    </article>
                </div>
            <div class="container-fluid row mt-3">
                <h2 class="col-12 py-2 h4 tittle">KEYBOARDS</h2>
                <div class="d-flex flex-column mb-sm-3 col-sm-12 col-md-6 col-lg-3">
                    <article class="card bg-color5">
                        <div class="card-5 instrument">
                        </div>
                        <div class="card-info p-3">
                            <h2 class="card-title h4 font-weight-bold">Nord</h2>
                            <h3 class="card-subtitle h5 font-weight-bold text-danger">New</h3>
                            <p class="card-description py-2">Nord Electro 6D 61-Key Semi-Weighted Waterfall Keyboard</p>
                            <div class="card-sale-container d-flex justify-content-between align-center">
                  <span class="btn btn-add"><i class="fas fa-plus secondary-color"></i>
                  </span>
                                <span class="price text-danger">$2,800</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
                <div class="d-flex flex-column col-sm-12 col-md-6 col-lg-3">
                    <article class="card bg-color5">
                        <div class="card-6 instrument">
                        </div>
                        <div class="card-info p-3">
                            <h2 class="card-title h4 font-weight-bold">Casio</h2>
                            <h3 class="card-subtitle h5 font-weight-bold text-danger">New</h3>
                            <p class="card-description py-2">Casio Privia PX560MBE 88 note portable stage piano - Metallic
                            </p>
                            <div class="card-sale-container d-flex justify-content-between align-center">
                  <span class="btn btn-add"><i class="fas fa-plus secondary-color"></i>
                  </span>
                                <span class="price text-danger">$1,800</span>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="d-flex flex-column mb-sm-3 col-sm-12 col-md-6 col-lg-3">
                    <article class="card bg-color5">
                        <div class="card-7 instrument">
                        </div>
                        <div class="card-info p-3">
                            <h2 class="card-title h4 font-weight-bold">Yamaha</h2>
                            <h3 class="card-subtitle h5 font-weight-bold text-danger">New</h3>
                            <p class="card-description py-2">Yamaha PSR-E363 Keyboard w/FREE HPH50B HEADPHONES!</p>
                            <div class="card-sale-container d-flex justify-content-between align-center">
                  <span class="btn btn-add"><i class="fas fa-plus secondary-color"></i>
                  </span>
                                <span class="price text-danger">$1,200</span>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="d-flex flex-column mb-sm-3 col-sm-12 col-md-6 col-lg-3">
                    <article class="card bg-color5">
                        <div class="card-8 instrument">
                        </div>
                        <div class="card-info p-3">
                            <h2 class="card-title h4 font-weight-bold">Roland</h2>
                            <h3 class="card-subtitle h5 font-weight-bold text-danger">New</h3>
                            <p class="card-description py-2">Roland GO:KEYS Music Creation Keyboard w/Bluetooth</p>
                            <div class="card-sale-container d-flex justify-content-between align-center">
                  <span class="btn btn-add"><i class="fas fa-plus secondary-color"></i>
                  </span>
                                <span class="price text-danger">$1,700</span>
                            </div>
                        </div>
                    </article>
                </div>
        </section>

        <section class="bottom-section bg-color5 container-fluid row m-0 my-1 px-0 w-100">
            <div class="sign-in col-12 w-100 my-5 d-flex flex-column justify-content-center align-items-center">
                <h3 class="text-center">SIGN UP FOR OUR EMAIL</h3>
                <p class="text-center py-4">GET THE BEST DEALS, SALES AND OFFERS FROM THE BEST ONLINE MUSIC STORE IN
                    FLORIDA!</p>
                <div class="d-flex justify-content-center align-items-center p-0 m-0 w-100">
                    <label>
                        <input class="form-control" type="text" placeholder="Enter your email address" />
                    </label>
                    <button type="button" class="bttn-icon p-0 py-1 m-0 bg-danger border-danger">
                        <span class="form-control">Subscribe</span>
                    </button>
                </div>
            </div>
        </section>

    <footer>
        <div class="top-footer bg-color2 container-fluid row w-100 m-0 px-0">
            <div
                class="footer-content d-flex justify-content-center align-items-center col-sd-12 w-100 m-lg-0 p-lg-0 col-lg-4">
                <div class="footer-col px-4">
                    <h4 class="text-danger pt-3">FINETUNING - BREATHING</h4>
                    <div class="footer-info d-flex justify-content-center align-items-start flex-column text-white pt-2">
                        <p>First opened in 2022, FineTuning - Breathing is an American owned and operated independent music
                            store located in Miami, Florida.</p>
                        <p>We provide the largest range of quality musical instruments with lowest and highest prices, servicing
                            and repairs, rent/buying instruments, product reselling, and more!</p>
                        <ul class="brand-icons d-flex">
                            <li><a class="px-2" href="https://www.facebook.com/" title="Facebook"><i class="fab fa-facebook-f text-danger"></i></a></li>
                            <li><a class="px-2" href="https://www.youtube.com/" title="Youtube"><i class="fab fa-youtube-square text-danger"></i></a></li>
                            <li><a class="px-2" href="https://www.instagram.com/" title="Instagram"><i class="fab fa-instagram-square text-danger"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="container-fluid row w-100 m-0 px-0 pl-4 pl-md-0 mt-3 col-lg-8">
                <div class="footer-col col-sd-12 col-md-3 col-lg-3">
                    <h4 class="text-danger">About</h4>
                    <div class="footer-info d-none d-md-block">
                        <ul class="fmenu">
                            <li><a class="text-white" href="#">About Us - FineTuning</a></li>
                            <li><a class="text-white" href="#">Locations</a></li>
                            <li><a class="text-white" href="#">Career Opportunities</a></li>
                            <li><a class="text-white" href="#">Rent Now!</a></li>
                            <li><a class="text-white" href="#">Work for us!</a></li>
                        </ul>
                    </div>
                </div>

                <div class="footer-col col-sd-12 col-md-3 col-lg-3">
                    <h4 class="text-danger">Support</h4>
                    <div class="footer-info d-none text-white d-md-block">
                        <ul class="fmenu">
                            <li><a class="text-white" href="#">Shipping & Returns</a></li>
                            <li><a class="text-white" href="#">Payment Options</a></li>
                            <li><a class="text-white" href="#">Privacy & Security</a></li>
                            <li><a class="text-white" href="#">Terms & Conditions</a></li>
                            <li><a class="text-white" href="#">Price Match Guarantee</a></li>
                            <li><a class="text-white" href="#">My Account</a></li>
                            <li><a class="text-white" href="#">COVID-19</a></li>
                        </ul>
                    </div>
                </div>

                <div class="footer-col col-sd-12 col-md-3 col-lg-3">
                    <h4 class="text-danger">Contact</h4>
                    <div class="footer-info d-none text-white d-md-block">
                        <address>2562 Capital Circle NW</address>
                        <p><strong>Phone</strong> +1 305-354-6424</p>
                        <p><a class="text-white" href="#">Contact Us</a></p>
                    </div>
                </div>

                <div class="footer-col col.sd-12 col-md-3 col-lg-3">
                    <h4 class="text-danger">Store hours</h4>
                    <div class="footer-info d-none text-white d-md-block">
                        <p><strong>Mon-Thur</strong> 10:00am - 5:30pm</p>
                        <p><strong>Fri</strong> 10:00am - 7:00pm</p>
                        <p><strong>Sat-Sun</strong> Closed</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-footer bg-color2 container-fluid border-top row w-100 m-0 px-0">
            <p class="copyright col-12 d-flex justify-content-center align-items-center text-white px-0 pt-2">FineTuning - Breathing©. All rights reserved.</p>
        </div>
    </footer>
</body>
    );
}

