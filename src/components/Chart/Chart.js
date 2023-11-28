import React from "react";
import ChartBar from './ChartBar';
const Chart = props => {
    const dataPointValues=props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum =Math.max(...dataPointValues);
    return <div className="chart"> 
    {props.dataPoints.map(dataPoint=>
         <ChartBar
         key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={totalMaximum} 
          label={dataPoint.label}/>)}
    //maxvalue : Every ChartBar plots the value relation to max value  in the entire chart and that is unique value which is same for all ChartBars
    //we wil need to derive the value
//every dataPoint has a unique id or also we use lable the label should be unique so then every chat bar have its own unique lable
// we can also use lable as a unquie identifier as special key word key props

    </div>


}
export default Chart;