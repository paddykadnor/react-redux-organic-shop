import React from "react";
import Label from "../Label/Label";
import Image from "../Image/Image";
import Button from "../Button/Button";
import Increment from "../Increment/Increment";
import "./Cart.css";


class Cart extends React.Component {
    render() {

        return (

            <div className="container cartcontainer">
                <h2>Shopping Cart</h2>
                <div class="cartname">
                    <div className="cartclear">
                        <Label style={{ textAlign: "left" }} label="You have 0 Item in your shopping cart"></Label>
                        <Label style={{ textAlign: "left", marginRight: "20px", cursor: "pointer" }} label="Clear Cart"></Label>
                    </div>
                    <div className="cartinfo table table-light">
                        <div className="row">
                            <div className="col">

                            </div>
                            <div className="col">
                                Product
                </div>
                            <div className="col">
                                Quantity
                </div>
                            <div className="col">
                                Price
                </div>
                        </div>
                        <div className="row">
                            <div className="col">
<Image  style={{"border-radius":"26px"}} width="46px" height="46px"></Image>
                            </div>
                            <div className="col">
                               Spinach
                </div>
                            <div className="col">
                            <Increment Counter="1"></Increment>
                </div>
                            <div className="col">
                                ₹ 4.00
                </div>
                        </div>
                        <div className="row">
                            <div className="col">
<Image  style={{"border-radius":"26px"}} width="46px" height="46px"></Image>
                            </div>
                            <div className="col">
                               Spinach
                </div>
                            <div className="col">
                            <Increment Counter="1"></Increment>
                </div>
                            <div className="col">
                                ₹ 4.00
                </div>
                        </div>
                        <div className="row">
                            <div className="col">
<Image  style={{"border-radius":"26px"}} width="46px" height="46px"></Image>
                            </div>
                            <div className="col">
                               Spinach
                </div>
                            <div className="col">
                            <Increment Counter="1"></Increment>
                               
                </div>
                            <div className="col">
                                ₹ 4.00
                </div>
                        </div>
                        <div className="row">
                          <Button className="btn btn-primary" value="Checkout"></Button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Cart