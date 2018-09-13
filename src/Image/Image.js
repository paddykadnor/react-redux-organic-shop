import React from "react";
import "./Image.css";

class Image extends React.Component{

    render(){
        
        return (
            
            <img src="https://cdn.pixabay.com/photo/2016/03/26/16/44/tomatoes-1280859_960_720.jpg" width={this.props.width} height={this.props.height} style={this.props.style} alt=""></img>
            
        )
    }
}

export default Image