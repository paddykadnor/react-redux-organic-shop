import React from "react";
import Image from "../Image/Image";
import Label from "../Label/Label";
import Button from "../Button/Button";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import "./Product.css"


class Product extends React.Component {
    render() {
        return (
            <div className="product">
          {this.props.proReducer && this.props.proReducer.map((product,index)=>{
  return (<div className="productinfo" key={index}>
 <Image width="330px" height="220px" src={product.Image}></Image>
 <Label style={{ fontSize: "22px", fontWeight: "400" }} label={product.productname}></Label>
 <Label style={{ fontSize: "16px", fontWeight: "400" }} label={"₹ " + product.selling_price}></Label>
 <Button className="btn btn-primary" style={{position:"relative",bottom:"-10px",width:"100%"}} value="Add To Cart"></Button>
</div>)
          })}
               
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{

    return state;
    
}

export default withRouter(connect(mapStateToProps)(Product));