import React, {Component} from "react";

import './Step.css';



class Step extends Component {

   


    render() {
        return (
            <div className="step">
                <input type="number" />
                <button>Krok:</button>
                
            </div>
        )
    }
}

export default Step;