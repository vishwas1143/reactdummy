import React from "react";
import './ChartBar.css';

const ChartBar = props => {
    let barFillHeight ='0%';

    if(props.maxValue >0) {
        barFillHeight = Math.round((props.value/props.maxValue)*100)+'%';

    }
    return (
        <div> 
            <div className="chart-bar">
                <div className="chart-bar_inner">

                </div>
                <div className="char-bar_fill"
                style={{height:barFillHeight }}>

                </div>

            </div>
            <div className="chart-bar_label">{props.label}</div>
            //style it is default attribute in html  style need javascript object as a value because  we dont need any special braces.
        </div>
    )
}