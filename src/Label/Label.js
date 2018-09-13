import React from "react";
import "./Label.css";


class Label extends React.Component {

    render() {
        return (
            <div className="label" style={this.props.style}>
                {this.props.label}
            </div>
        )
    }
}

export default Label