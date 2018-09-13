import React from "react";
import Button from "../Button/Button";


class Increment extends React.Component{

    
    render(){

        return(
            <div className="increment">
                <Button value="-" className="btn btn-primary" style={{"font-weight":"bold","min-width":"10px"}}></Button> &nbsp;&nbsp;{this.props.Counter} &nbsp;&nbsp;<Button value="+" className="btn btn-primary" style={{"font-weight":"bold","min-width":"10px"}}></Button>
            </div>
        )
    }
    
}

export default Increment;