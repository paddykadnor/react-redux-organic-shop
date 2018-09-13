import React, { Component } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header/Header";
import Shopper from "./Shopper/Shopper";
import {connect} from "react-redux";
import {getCategory,getProduct} from "./Actions/catAction";
import Cart from "./Cart/Cart";
import {Switch,Route} from "react-router-dom";
import { library } from  "@fortawesome/fontawesome-svg-core";
import { faShoppingCart, faLeaf   } from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart,faLeaf);
class App extends Component {
  componentDidMount = ()=>
  {
    this.props.dispatch(getCategory());
    this.props.dispatch(getProduct());
  }
  render() {
    return (
      <div className="App">
        
          <Header></Header>
        <Switch>
          <Route exact path="/" component={Shopper}></Route>
          <Route path="/Cart" component={Cart}></Route>
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
