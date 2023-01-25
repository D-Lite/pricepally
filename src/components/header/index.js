import {
    PeopleOutline,
    ShoppingCart,
    MoreHoriz,
    AccountCircle,
    Home,
    Share,
    ShoppingBasket,
    LocationOn,
    LoginIcon,
    Lock,
    FavoriteBorder,
    ErrorOutline,
    SettingsCell,
    LocationCity,
    Notifications,
    AccountBalanceWallet, ToggleOn, ArrowDropDown
} from "@material-ui/icons";

function Header() {
    return (
        <>
            <div className="desktop-header">
                <header>
                    <div className="navigation-wrap  start-header start-style ">
                        <div className="container">
                            <div className="row">
                                <div className="col-4 col-sm-5 col-md-5">
                                    <ul className="list-unstyled mb-0">
                                        <li className="d-inline-block">
                                            <a className="navbar-brand" href="index.html" target="_blank">
                                                <embed src="assets/images/logo.svg" width="40px" />
                                            </a>
                                        </li>
                                        <li className="d-inline-block">
                                            <div className="search-container">
                                                <form>
                                                    <div className="outer_search">
                                                        <div className="saerch-bar"  id="search_bars">
                                                        <span className="material-icons">
                                                                search
                                                                </span>
                                                            <input type="text" placeholder="Search Food Items or Users" name="search" />
                                                        </div>
                                                        <button className="yellow-bg">SEARCH</button>
                                                    </div>
                                                    <div className="search-dropdown"  id="scrolling">
                                                        <div className="search-items">
                                                            <h6 className="grey-text">FOOD ITEMS</h6>
                                                            <ul className="list-unstyled mb-3">
                                                                <li className="d-inline-block">
                                                                    <img className="seaarch-img" src="assets/images/search-img1.jpg" alt="search-img1" />
                                                                </li>
                                                                <li className="d-inline-block">
                                                                    <h5>Tuwo Rice (25kg)</h5>
                                                                </li>
                                                            </ul>
                                                            <ul className="list-unstyled mb-3">
                                                                <li className="d-inline-block"><img className="seaarch-img" src="assets/images/search-img2.jpg" alt="search-img1" />
                                                                </li>
                                                                <li className="d-inline-block">
                                                                    <h5>Tuwo Rice (50kg)</h5>
                                                                </li>
                                                            </ul>
                                                            <ul className="list-unstyled mb-3">
                                                                <li className="d-inline-block">
                                                                    <img className="seaarch-img" src="assets/images/search-img1.jpg" alt="search-img1" />
                                                                </li>
                                                                <li className="d-inline-block">
                                                                    <h5>Tuwo Rice (25kg)</h5>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                        <div className="search-users">
                                                            <h6 className="grey-text">Users</h6>

                                                            <ul className="list-unstyled mb-3">
                                                                <li className="d-inline-block">
                                                                    <img className="seaarch-list" src="assets/images/list-img1.jpg" alt="search-img1" />
                                                                </li>
                                                                <li className="d-inline-block">
                                                                    <h5>Tumininu Tayo</h5>
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className=" col-8 col-sm-7 col-md-7 ">
                                    <nav className="navbar navbar-expand-md navbar-light float-right text-center ">
                                        <div className="collapse navbar-collapse " id="navbarSupportedContent ">
                                            <ul className="navbar-nav drop-menu ">
                                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                                                    <a className="nav-link active " href="index.html ">
                                                        <p className="mb-0 "><Home /></p>
                                                        <p className="mb-0 ">Home</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                                                    <a className="nav-link " href="# ">
                                                        <p className="mb-0 "><PeopleOutline /></p>
                                                        <p className="mb-0 ">Users</p>
                                                    </a>
                                                </li>

                                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                                                    <a className="nav-link " href="# ">
                                                        <p className="mb-0 "><ShoppingCart /></p>
                                                        <p className="mb-0 ">Cart</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                                                    <a className="nav-link " href="# ">
                                                        <p className="mb-0 "><ShoppingBasket /></p>
                                                        <p className="mb-0 ">Order</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                                                    <a href='#' className="nav-link ">
                                                        <p className="mb-0 "><MoreHoriz /></p>
                                                        <p className="mb-0 ">More <ArrowDropDown /></p>
                                                    </a>
                                                    <ul className='dropdown p-0  nav-clr'>
                                                        <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                            <a href='#' className="nav-link "> <AccountBalanceWallet /> Wallet </a>
                                                        </li>
                                                        <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                            <a href='#' className="nav-link "> <Notifications /> Notifications </a>
                                                        </li>
                                                        <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                            <a href='#' className="nav-link "> <span className="material-icons ">
                                                            share
                                                            </span> Refer and Earn </a>
                                                        </li>
                                                        <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                            <a href='#' className="nav-link "> <FavoriteBorder />Saved Products </a>
                                                        </li>
                                                        <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                            <a href='#' className="nav-link "> <ErrorOutline />Frequently Asked Questions </a>
                                                        </li>
                                                        <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                            <a href='#' className="nav-link "> <SettingsCell />Contact Admin </a>
                                                        </li>
                                                        <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                            <a href='#' className="nav-link "> <LocationCity />Change City</a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 ">
                                                    <a href='#' className="nav-link ">
                                                        <p className="mb-0 "><AccountCircle /></p>
                                                        <p className="mb-0 ">My Account <ArrowDropDown /></p>
                                                    </a>
                                                    <ul className='dropdown p-0 nav-clr'>
                                                        <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                            <a href='#' className="nav-link "> <AccountCircle /> Profile </a>
                                                        </li>
                                                        <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                            <a href='#' className="nav-link "> <LocationOn /> Manage Address </a>
                                                        </li>
                                                        <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                            <a href='#' className="nav-link "> <Lock /> Change Password </a>
                                                        </li>
                                                        <li className="nav-item pl-4 pl-md-0 ml-0 ">
                                                            <a href='#' className="nav-link "> Logout </a>
                                                        </li>

                                                    </ul>
                                                </li>

                                            </ul>
                                        </div>

                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>
            </div>

            <section className="mobile-header">
                <div className="container">
                    <div className="d-flex mb-3">
                        <div className=" justify-content-start">
                            <img className="mobile-logo" src="assets/images/main-logo.svg" alt="mobile-logo" />
                        </div>
                        <div className=" ml-auto justify-content-end">
                            <img className="profile-img" src="assets/images/profile_img.jpg" alt="profile-img" />
                        </div>
                    </div>
                </div>
                <div className="mobile-search">
                    <div className="container">
                        <div className="search-container" data-toggle="modal" data-target="#search-modal">
                            <form>
                                <div className="saerch-bar">
                                    <div>
                                    <span className="material-icons">
                                        search
                                    </span>
                                        <input type="text" placeholder="Search " name="search" />
                                    </div>
                                    {/*<button className="yellow-bg">SEARCH</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header;