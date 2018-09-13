import React from "react";


class Button extends React.Component
{
    render(){
        return(
            <button className={this.props.className} style={this.props.style}>{this.props.value}</button>
        )
    }
}

export default Button