import React from "react";
import Categories from "../Categories/Categories";
import Product from "../Product/Product";
import "./Shopper.css";

class Shopper extends React.Component
{
    render(){
        return(
            <div className="container">
<div className="shopper">
<Categories></Categories>
<Product>
</Product>
</div>

            </div>
        )
    }
}

export default Shopper