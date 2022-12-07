import React from "react";
import "./SellCSS.css";

export default function Instrument() {

    return (
        <div class="search-section my-5 justify-content-center">
            <form action="POST">
                <div class="container form">
                    <div class="d-flex justify-content-center">
                        <select class="form-select rounded-0 w-50 border-danger" aria-label="Default select example">
                            <option selected>All Categories</option>
                            <option value="1">Woodwinds</option>
                            <option value="2">Brasswinds</option>
                            <option value="3">Drums</option>
                        </select>
                        <input type="email" class="form-control" placeholder="Yamaha"/>
                        <input type="email" class="form-control" placeholder="Nairobi">
                            <button type="submit" class="form-control" style="color: red;">SEARCH</button>
                        </input>
                    </div>
                </div>
            </form>
        </div>
    <div class="col-lg-6 col-md-12 col-sm-12">
                <input type="checkbox" value=""/>
                    <label>
                        Brand New
                    </label>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12">
                <input type="checkbox" value=""/>
                    <label>
                        Used
                    </label>
            </div>

    <div class="price-search-area mb-4">
        <h3>Brand</h3>
        <ul class="list-group">
            <li class="list-group-item"><input type="checkbox" value=""> Yamaha</li>
            <li class="list-group-item"><input type="checkbox" value=""> Peavey</li>
            <li class="list-group-item"><input type="checkbox" value=""> Fender</li>
            <li class="list-group-item"><input type="checkbox" value=""> Gibson</li>
            <li class="list-group-item"><input type="checkbox" value=""> Ludwig</li>
            <li class="list-group-item"><input type="checkbox" value=""> Roland</li>
            <li class="list-group-item"><input type="checkbox" value=""> Sonor</li>
        </ul>
    </div>
    <div class="price-search-area mb-4">
        <h3>Price Range</h3>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><input type="checkbox" value=""> 100$ - 100$</li>
            <li class="list-group-item"><input type="checkbox" value=""> 100$ - 200$</li>
            <li class="list-group-item"><input type="checkbox" value=""> 400$ - 600$</li>
            <li class="list-group-item"><input type="checkbox" value=""> 600$ - 800$</li>
            <li class="list-group-item"><input type="checkbox" value=""> 800$ - 900$</li>
            <li class="list-group-item"><input type="checkbox" value=""> + 1000$</li>
        </ul>
    </div>
    <div>
        <h6 class="border-bottom pb-2">138 Results for <b>"Yamaha"</b> Search at <b>"Nairobi"</b> in Category <b>"Drums"</b></h6>
        <div class="row border m-2 p-2 shadow">
            <div class="col-lg-4 col-md-12 col-sm-12">
                <img class="prod-img" src="img/0002667_yamaha-rydeen-5pc-drumkit-hot-red_400.jpeg" alt="bt-speaker"/>
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12">
                <h3 class="helvetica-bold font-weght-bold">Yamaha D-102</h3>
                <p class="product-condition">New</p>
                <p>The Yamaha D-102 features a total of 622 built-in instrument sounds (called Voices).
                    Included with these are special “Live” Voices, which feature actual recorded samples from a grand piano,
                    strings and brass. You can play a huge variety of authentic musical instruments and perform with an amazing sound
                    .</p>
                <div class="row">
                    <div class="col-6">
                        <p class="font-weight-bold">Location: Florida</p>
                        <p>April 24 2022</p>
                    </div>
                    <div class="col-6 text-right pt-3">
                        <div class="btn-group dropup">
                            <button type="button" class="text-white btn btn-post-ad rounded-0 border-0 btn-sm bg-danger" data-toggle="dropdown" aria-expanded="false">
                                Negotiate
                            </button>
                            <span class="text-white">.  </span>
                            <button type="button" class="text-white btn btn-post-ad rounded-0 border-0 btn-sm bg-danger" data-toggle="dropdown" aria-expanded="false">
                                $499
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row border m-2 p-2 shadow">
            <div class="col-lg-4 col-md-12 col-sm-12">
                <img class="prod-img" src="img/CPK-5070-7-600x600-1.jpeg" alt="bt-speaker">
            </div>
            <div class="col-lg-8 col-md-12 col-sm-12">
                <h3>Yamaha CPK-1</h3>
                <p class="product-condition">New</p>
                <p>The CP1 ships with 48 preset 'Performances', effectively patches that showcase nicely all the instrument has to offer.
                    You call these up with 16 dedicated number buttons and three bank buttons, and
                    a further 48 of your own performances go in a dedicated User area. If you need more, so‑called
                    'External' groups of 48 Performances can be saved to and loaded from a memory stick plugged into the
                    front‑panel socket.</p>
                <div class="row">
                    <div class="col-6">
                        <p class="font-weight-bold">Location: Florida</p>
                        <p>August 20, 2022</p>
                    </div>
                    <div class="col-6 text-right pt-3">
                        <div class="btn-group dropup">
                            <button type="button" class="text-white btn btn-post-ad rounded-0 border-0 btn-sm bg-danger" data-toggle="dropdown" aria-expanded="false">
                                Negotiate
                            </button>
                            <span class="text-white">.  </span>
                            <button type="button" class="text-white btn btn-post-ad rounded-0 border-0 btn-sm bg-danger" data-toggle="dropdown" aria-expanded="false">
                                $699
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row border m-2 p-2 shadow">
        <div class="col-lg-4 col-md-12 col-sm-12">
            <img src="img/viber-image.jpg1_.jpeg" alt="bt-piano">
        </div>
        <div class="col-lg-8 col-md-12 col-sm-12">
            <h3 class="helvetica-bold font-weght-bold">Yamaha C2-23</h3>
            <p class="product-condition">New</p>
            <p>The Yamaha C2 grand piano at 5'8” is a piano with an amazing reputation and
                it continues to be preferred by pro players over cheaper and not as exciting GBs as well as
                GC series pianos. Why? It's better wood, better felt, and put simply more professional in sound and
                performance than those pianos</p>
            <div class="row">
                <div class="col-6">
                    <p class="font-weight-bold">Location: Florida</p>
                    <p>September 18 2022</p>
                </div>
                <div class="col-6 text-right pt-3">
                    <div class="btn-group dropup">
                        <div class="btn-group dropup">
                            <button type="button" class="text-white btn btn-post-ad rounded-0 border-0 btn-sm bg-danger" data-toggle="dropdown" aria-expanded="false">
                                Negotiate
                            </button>
                            <span class="text-white">.  </span>
                            <button type="button" class="text-white btn btn-post-ad rounded-0 border-0 btn-sm bg-danger" data-toggle="dropdown" aria-expanded="false">
                                $799
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <div class="row border m-2 p-2 shadow">
        <div class="col-lg-4 col-md-12 col-sm-12">
            <img class="prod-img" src="img/XD80USB-Behringer-1.jpeg" alt="bt-drumkit">
        </div>
        <div class="col-lg-8 col-md-12 col-sm-12">
            <h3 class="helvetica-bold font-weght-bold">Yamaha XD80</h3>
            <p class="product-condition">New</p>
            <p>The user-friendly sound module in the Behringer XD80USB has 175 different sounds,
                15 different drum kit types (10 presets), an inbuilt metronome, and a USB port.
                You may transfer sound from your recording setup to your computer, GarageBand, or any other
                recording program of your choice using the USB interface. Dual zone trigger pads on the drum
                kit provide a dynamic range. </p>
            <div class="row">
                <div class="col-6">
                    <p class="font-weight-bold">Location: Florida</p>
                    <p>November 1st 2022</p>
                </div>
                <div class="col-6 text-right pt-3">
                    <div class="btn-group dropup">
                        <div class="btn-group dropup">
                            <button type="button" class="text-white btn btn-post-ad rounded-0 border-0 btn-sm bg-danger" data-toggle="dropdown" aria-expanded="false">
                                Negotiate
                            </button>
                            <span class="text-white">.  </span>
                            <button type="button" class="text-white btn btn-post-ad rounded-0 border-0 btn-sm bg-danger" data-toggle="dropdown" aria-expanded="false">
                                $1199
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div>
        <ul class="pagination justify-content-center">
            <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
                <a class="page-link" href="#">Next</a>
            </li>
        </ul>
    </div>

    <footer>
        <div>
            <div>
                <div class="footer-col px-4">
                    <h4 class="text-danger pt-3">FINETUNING - BREATHING</h4>
                    <div class="footer-info d-flex justify-content-center align-items-start flex-column text-white pt-2">
                        <p>First opened in 2022, FineTuning - Breathing is an American owned and operated independent music
                            store located in Miami, Florida.</p>
                        <p>We provide the largest range of quality musical instruments with lowest and highest prices, servicing
                            and repairs, rent/buying instruments, product reselling, and more!</p>
                        <ul class="brand-icons d-flex">
                            <li><a class="px-2" href="#" title="Facebook"><i class="fab fa-facebook-f text-danger"></i></a></li>
                            <li><a class="px-2" href="#" title="Youtube"><i class="fab fa-youtube-square text-danger"></i></a></li>
                            <li><a class="px-2" href="#" title="Instagram"><i class="fab fa-instagram-square text-danger"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
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
        <div>
            <p class="text">FuneTuning - Breathing©. All rights reserved.</p>
        </div>
    </footer>
</div>

);
}
