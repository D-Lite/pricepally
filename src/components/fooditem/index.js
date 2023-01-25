import {useEffect, useState} from "react";
import {getProducts} from "@/api/ProductSlider";
import {ArrowRightAlt, FavoriteBorderSharp} from "@material-ui/icons";

function Fooditem() {

    const [allProducts, setAllProducts] = useState()

    const getAllProducts = async () => {
        const res = await getProducts()
        if(res) {
            setAllProducts(res?.products)
        }
    }

    useEffect( () => {
        getAllProducts()
    }, []);

    return (
        <>
            <section className="food-items-bg  d-none d-lg-block webfoodTab-view">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-5">
                            <ul className="nav nav-tabs foodtabs" id="foodTab" role="tablist">
                                <li className="nav-item ">
                                    <a className="nav-link active" id="" data-toggle="tab" href="#pally" role="tab" aria-controls="pally" aria-selected="true">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="recommended-tab" data-toggle="tab" href="#recommended" role="tab" aria-controls="recommended" aria-selected="false">Pally</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="pre-orders-tab" data-toggle="tab" href="#pre-orders" role="tab" aria-controls="pre-orders" aria-selected="false">Recommended</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <form className="form-inline select-bg float-right">
                                <div className="form-group mb-0">
                                    <select className="form-control border-right-0">
                                        <option>Categories</option>
                                        <option>Soup & stew ingredients</option>
                                        <option>Foodstuffs</option>
                                        <option>Meat, Poultry & Seafood</option>
                                    </select>
                                </div>
                                <div className="form-group mb-0">
                                    <select className="form-control  border-right-0">
                                        <option>Sub Categories</option>
                                        <option>Grains</option>
                                        <option>Tubers & Roots
                                        </option>
                                    </select>
                                </div>
                                <div className="form-group mb-0">
                                    <select className="form-control">
                                        <option>Sort By: Price (Low to High)</option>
                                        <option>Price (Low to High)</option>
                                        <option>Price (High to Low)</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                    <hr className="border-bottom" />


                    <div className="row ">
                        <div className="col-lg-12">
                            <div className="tab-content main" id="foodTabContent">
                                <div className="tab-pane fade show active " id="pally" role="tabpanel" aria-labelledby="pally-tab">
                                    <h6 className="inner-head">{allProducts?.length} Available Deals</h6>
                                    <div className="">
                                        <div className="row">
                                            {allProducts?.map((product) => {
                                                return (
                                                    <div key={product.product_id} className="col-md-6 col-lg-3">
                                                        <div className="pally-inner ">
                                                            <div className="products-img-wrapper  mb-3 pointer">
                                                                <a href="#">
                                                                    <div className="heart-icon">
                                                        <span className="material-icons">
                                                            <FavoriteBorderSharp />
                                                        </span>
                                                                    </div>
                                                                    <img className="mb-3 product-img" src={product.product_images} alt={product.product_name} />
                                                                </a>
                                                            </div>

                                                            <div className="pally-content">
                                                                <a href="#" className="inner-head">
                                                                    <h5 className="mb-2">{product.product_name}</h5>
                                                                </a>
                                                                <a href="#" className="red-bg">
                                                                    <ArrowRightAlt />
                                                                    {product.product_discount}% | In Season</a>
                                                                <h5 className="mb-2 mt-2 font-weight-bold simhead">₦{product.unit_cost} <small>per
                                                                    slot (slot size per person goes here)</small></h5>
                                                                <h6 className="mb-2">Time left: 68:50:52</h6>
                                                                <ul className="list-unstyled pallylist-bg mb-2">
                                                                    <li className="d-inline-block pally-left">
                                                                        <img className="list-img" src="assets/images/list-img1.jpg" alt="list-img1" />
                                                                    </li>
                                                                    <li className="d-inline-block pally-left">
                                                                        <img className="list-img" src="assets/images/list-img3.jpg" alt="list-img2" />
                                                                    </li>
                                                                    <li className="d-inline-block pally-left">
                                                                        <img className="list-img" src="assets/images/list-img3.jpg" alt="list-img3" />
                                                                    </li>
                                                                    <li className="d-inline-block pally-left">
                                                                        <img className="list-img" src="assets/images/list-img1.jpg" alt="list-img1" />
                                                                    </li>
                                                                    <li className="d-inline-block">
                                                                        <small>2 slots left</small>
                                                                    </li>
                                                                </ul>
                                                                <a href="#">
                                                                    <button type="button" className="brown-btn  text-uppercase btn-effects pally-slot-btn">BUY
                                                                        SLOT</button>
                                                                </a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                )
                                            })}

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="load-bg text-center mb-5 d-none d-lg-block">
                                <a href="#">
                                    <button typ="button" className="load-more text-uppercase ">
                                        Load more items
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Fooditem;