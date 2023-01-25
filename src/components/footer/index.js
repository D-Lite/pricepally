function Footer () {
    return (
        <>
        <footer class="ml-2 mr-2 footer-wrapper d-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="row">
                            <div class="col-lg-4">
                                <h5>Categories</h5>
                                <ul class="list-unstyled">
                                    <li><a href="#">Food Stuff</a></li>
                                    <li><a href="#">Packaged Food</a></li>
                                    <li><a href="#">Fruits & Nuts</a></li>
                                    <li><a href="#">Meat, Poultry & Sea Food</a></li>
                                    <li><a href="#">Oils & Spices</a></li>
                                    <li><a href="#">Soup & Stew Ingredients</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <h5>Company</h5>
                                <ul class="list-unstyled">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Refer & Earn</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Make a List</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-4">
                                <h5>Policy</h5>
                                <ul class="list-unstyled">
                                    <li><a href="#">COVID 19 Policy</a></li>
                                    <li><a href="#">Return Policy</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <h5 class="white-head">Join our mailing list & receive exclusives</h5>
                        <div class="form-group">
                            <input type="text" name="" placeholder="First Name" class="form-control" />
                                <input type="text" name="" placeholder="Last Name" class="form-control" />
                        </div>
                        <div class="input-group mb-3 join-bg">
                            <input type="text" class="form-control" placeholder="Enter your email address" />
                                <div class="input-group-append join-btn">
                                    <a href="#"> <span class="input-group-text">Join List</span> </a>
                                </div>
                        </div>
                        <h6>Connect with us on</h6>
                        <ul class="list-unstyled social-icons">
                            <li class="d-inline-block">
                                <a href="#">
                                    <embed src="assets/images/facebook.svg" width="25px" />
                                </a>
                                <a href="#">
                                    <embed src="assets/images/instagram.svg" width="25px" />
                                </a>
                                <a href="#">
                                    <embed src="assets/images/twitter.svg" width="25px" />
                                </a>
                                <a href="#">
                                    <embed src="assets/images/youtube.svg" width="25px" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p class="text-center"><small>© 2021 Pricepally All Rights Reserved </small></p>
            </div>
        </footer>

        <div class="modal fade" id="preorderModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <b>Pre Order</b>
                    </div>
                    <div class="modal-body pl-3 pt-0 pr-3 preordermodal-text">
                        <div class="row">
                            <div class="col-8 col-md-6 col-lg-6">
                                <div class="form-group">
                                    <label>Enter Quantity</label>
                                    <input type="text" class="form-control" placeholder="e.g 10" />
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4">
                                <p>Price</p>
                                <h4>₦0</h4>
                            </div>
                        </div>
                        <div class="modal-w m-auto mt-4 mb-3 text-center">
                            <p class="mb-2">Delivery Date: July 23rd 2021</p>
                            <div class="mb-5">
                                <button type="button" class="yellow-bg text-uppercase add-btn">ADD TO CART</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="modal booknow-modal-bottom fade" id="booknowModal" tabIndex="-1" role="dialog" aria-labelledby="booknowModal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <b>Pre Order</b>
                    </div>
                    <div class="modal-body pl-3 pt-0 pr-3 preordermodal-text">
                        <div class="row">
                            <div class="col-8 col-md-6 col-lg-6">
                                <div class="form-group">
                                    <label>Enter Quantity</label>
                                    <input type="text" class="form-control" placeholder="e.g 10" />
                                </div>
                            </div>
                            <div class="col-4 col-md-4 col-lg-4">
                                <p>Price</p>
                                <h4>₦0</h4>
                            </div>
                        </div>
                        <div class="modal-w m-auto mt-4 mb-3 text-center">
                            <p class="mb-2">Delivery Date: July 23rd 2021</p>
                            <div class="mb-5">
                                <button type="button" class="yellow-bg text-uppercase add-btn">ADD TO CART</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="modal modal-full fade fillter-modal-bg" id="fillter-modal" tabIndex="-1" role="dialog" aria-labelledby="fillter-modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" data-dismiss="modal"><i class='material-icons'>west</i> Filter
                        </h5>
                    </div>
                    <div class="modal-body select-bg">
                        <ul class=" list-unstyled clearfix mb-0">
                            <li>
                                <div class="form-group mb-0">
                                    <select class="form-control">
                                        <option>Categories</option>
                                        <option>Soup & stew ingredients</option>
                                        <option>Foodstuffs</option>
                                        <option>Meat, Poultry & Seafood</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <div class="form-group mb-0">
                                    <select class="form-control">
                                        <option>Sub Categories</option>
                                        <option>Grains</option>
                                        <option>Tubers & Roots</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <div class="form-group mb-0">
                                    <select class="form-control">
                                        <option>Sort By: Price (Low to High)</option>
                                        <option>Price (Low to High)</option>
                                        <option>Price (High to Low)</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                        <div class="text-center">
                            <div class="filter-main-btn">
                                <div class="btneffects-bg">
                                    <button type="button" class="border-btneffects text-uppercase existpally-btn">Apply</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="loader-bg">
            <div class="spinner spinner--steps icon-spinner" aria-hidden="true"></div>
        </div>

        <footer class="d-block d-lg-none mobile-footer">
            <div class="container">
                <div class="d-flex text-center justify-content-center">
                    <div class="mobile-icon">
                        <a class="nav-link active" href="index.html">
                            <p class="mb-0"><i class="material-icons-outlined">home</i></p>
                            <p class="mb-0">Home</p>
                        </a>
                    </div>
                    <div class="mobile-icon">
                        <a class="nav-link" href="my_account_profile.html">
                            <p class="mb-0"><span class="material-icons">
                                    people_outline
                                </span></p>
                            <p class="mb-0">Users</p>
                        </a>
                    </div>
                    <div class="mobile-icon">
                        <a class="nav-link" href="cart.html">
                            <p class="mb-0"><span class="material-icons-outlined">
                                    shopping_cart
                                </span></p>
                            <p class="mb-0">Cart</p>
                        </a>
                    </div>
                    <div class="mobile-icon">
                        <a class="nav-link" href="orders.html">
                            <p class="mb-0"><span class="material-icons-outlined">
                                    shopping_bag
                                </span></p>
                            <p class="mb-0">Orders</p>
                        </a>
                    </div>
                    <div class="mobile-icon">
                        <a href="more.html" class="nav-link">

                            <p class="mb-0 more_ic"><span class="material-icons">
                                    more_horiz
                                </span></p>
                            <p class="mb-0">More </p>
                            <span class="yellow_cir float-right">2</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

        <div id="moreModal-wrapper">
            <div class="container">
                <div class="moremodal-bg">
                    <div class="moremodal-header">
                        <div class="container">
                            <div class="d-flex">
                                <div class="w-50 justify-content-start">
                                    <div class="p-1  ">
                                        <h5 class="mb-0 morehead">₦GN 24,500</h5>
                                        <p class="mb-0 more-phr">Wallet Balance</p>
                                    </div>
                                    <hr class="more-border" />
                                        <div class="p-1">
                                            <h6 class="mb-0 morehead">₦GN 1,000</h6>
                                            <p class="mb-0 more-phr">Pending Balance</p>
                                        </div>

                                </div>
                                <div class="ml-auto justify-content-end align-self-center">
                                    <a href="#">
                                        <button class="yellow-bg text-uppercase">Go to wallet</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <ul class="list-unstyled ">
                            <li class="more-outline mb-3">
                                <a href="make_list.html">
                                    <span class="material-icons-round align-middle">
                                        format_list_bulleted
                                    </span>
                                    <span class="morelist-text pl-2">Make a List</span>
                                </a>
                            </li>
                            <li class="more-outline mb-3">
                                <a href="my_account_profile.html">
                                    <span class="material-icons-outlined align-middle">
                                        account_circle
                                    </span>
                                    <span class="morelist-text pl-2">Profile</span>
                                </a>
                            </li>
                            <li class="more-outline mb-3">
                                <a href="refer_earn.html">
                                    <span class="material-icons align-middle">
                                        share
                                    </span>
                                    <span class="morelist-text pl-2">Refer and Earn</span>
                                </a>
                            </li>
                            <li class="more-outline mb-3">
                                <a href="saved-products.html">
                                    <span class="material-icons align-middle">
                                        favorite_border
                                    </span>
                                    <span class="morelist-text pl-2">Saved Products</span>
                                </a>
                            </li>
                            <li class="more-outline mb-3">
                                <a href="notification.html">
                                    <span class="material-icons  align-middle">
                                        notifications_none
                                    </span>
                                    <span class="morelist-text pl-2">Notifications</span>
                                    <span class="yellow_cir float-right">2</span>
                                </a>
                            </li>
                            <li class="more-outline mb-3">
                                <a href="#">
                                    <span class="material-icons align-middle">
                                        settings_cell</span>
                                <span class="morelist-text pl-2">Contact Admin</span>
                        </a>
                    </li>
                    <li class="more-outline mb-3">
                        <a href="Freq-Quest.html">
                                    <span class="material-icons  align-middle">
                                        error_outline</span>
                            <span class="morelist-text pl-2">Frequently Asked Questions</span>
                        </a>
                    </li>
                    <li class="more-outline mb-3">
                        <a href="#">
                                    <span class="material-icons-outlined align-middle rotate-ic">
                                        repeat
                                    </span>
                            <span class="morelist-text pl-2">Return Policy</span>
                        </a>
                    </li>
                    <li class="more-outline mb-3">
                        <a href="#">
                                    <span class="material-icons-outlined align-middle">
                                        privacy_tip
                                    </span>
                            <span class="morelist-text pl-2">Privacy Policy</span>
                        </a>
                    </li>
                    <li class="more-outline mb-3">
                        <a href="#">
                                    <span class="material-icons-outlined align-middle  rotate-ic">
                                        note
                                    </span>
                            <span class="morelist-text pl-2">Terms & Conditions</span>
                        </a>
                    </li>
                    <li class="more-outline mb-3">
                        <a href="#">
                                    <span class="material-icons-outlined  align-middle">
                                        login
                                    </span>
                            <span class="morelist-text pl-2">Logout</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
        </div>

</div>

    <div class="modal modal-full fade search-modal-bg show" id="search-modal" tabIndex="-1" role="dialog" aria-labelledby="search-modal" aria-modal="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="search-header Mobheader-fixed">
                    <div class="d-flex">
                        <div class="justfiy-content-start search-outer-wrap">
                            <a href="#">
                                    <span>
                                   <i class="material-icons align-top" data-dismiss="modal">west</i>
                                        <input type="text" placeholder="Search" class="search-tabs align-top" />
                                    </span>
                                <button class="yellow-bg">SEARCH</button>
                            </a>
                        </div>
                        <div class="ml-auto justify-content-end">
                            <ul class="list-unstyled mb-0">
                            </ul>
                        </div>
                    </div>
                    <ul class="nav nav-tabs delivery-tabs" id="deliveryTab" role="tablist">
                        <li class="nav-item ">
                            <a class="nav-link active" id="" data-toggle="tab" href="#Mobfood-tab" role="tab" aria-controls="Mobfood-tab" aria-selected="true">Food Items</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="Mobuser-tab" data-toggle="tab" href="#users" role="tab" aria-controls="payment" aria-selected="false">Users</a>
                        </li>
                    </ul>
                </div>
                <div class="modal-body p-0">
                    <div class="tab-content" id="deliveryTabContent">
                        <div class="tab-pane fade show active Mobfood-tab mobile-search-food" id="Mobfood-tab" role="tabpanel" aria-labelledby="Mobfood-tab-tab">
                            <h6 class="result-found-wrap">2 Results</h6>
                            <div class="d-flex mb-3">
                                <div class="justify-content-start pr-2">
                                    <img class="search-img" src="assets/images/search-img1.jpg" alt="search-img1" />

                                </div>
                                <div class="justify-content-end">
                                    <h6 class="">Tuwo Rice (50kg)</h6>
                                </div>
                            </div>
                            <div class="d-flex mb-3">
                                <div class="justify-content-start pr-2">
                                    <img class="search-img" src="assets/images/search-img2.jpg" alt="search-img1" />

                                </div>
                                <div class="justify-content-end">
                                    <h6 class="">Titus 20kg (Full Carton)
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade payment-bg" id="users" role="tabpanel" aria-labelledby="Mobuser-tab">
                            <h6 class="mb-2">3 Results</h6>
                            <div class="d-flex align-content-between flex-wrap myfollowers mb-4">
                                <div class="p-2"><img class="follow-img" src="assets/images/followers1.jpg" alt="follwers-img1" /></div>
                                <div class="p-2 align-self-center">
                                    <h6>Florence Jackson</h6>
                                </div>
                                <div class="ml-auto p-2 align-self-center"><a href="#" class="follow-btn text-uppercase">Follow
                                </a></div>
                            </div>
                            <div class="d-flex align-content-between flex-wrap myfollowers mb-4">
                                <div class="p-2"><img class="follow-img" src="assets/images/followers1.jpg" alt="follwers-img1" /></div>
                                <div class="p-2 align-self-center">
                                    <h6>Florence Jackson</h6>
                                </div>
                                <div class="ml-auto p-2 align-self-center"><a href="#" class="follow-btn text-uppercase">Follow
                                </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Footer;