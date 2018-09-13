import React from "react";
import "./Categories.css";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class Categories extends React.Component {
    render() {

        return (
            <div className="categories">
                <div className="categoriestype">
                    All Categories
       </div>
                <div className="categorieslist">
                    <ul>
                        {
                            this.props.catReducer == null ? "Loading" : this.props.catReducer.map((category, index) => {
                                return <Link to={"/"} key={index}><li >{category.name}</li></Link>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}

export default withRouter(connect(mapStateToProps)(Categories));