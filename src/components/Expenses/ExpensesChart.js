import React from "react";
import Chart from "../Chart/Chart";
const ExpenseChart = props => {
    const dataPoints =[
        {label :'jan',value:0},
        {label: 'feb',value:0},
        {label: 'Mar',value:0},
        {label: 'Apr',value:0},
        {label: 'May',value:0},
        {label: 'Jun',value:0},
        {label: 'July',value:0},
        {label: 'Aug',value:0},
        {label: 'Sept',value:0},
        {label: 'Oct',value:0},
        {label: 'Nov',value:0},
        {label: 'Dec',value:0},
        
        
    ];
    for(const expense of props.expenses) {
        const expenseMonth = expense.data.getMonth();//starting at 0 0 is jan
        ChartDatapoints[expenseMonth].value+=expense.amount;
    }
    return <Chart dataPoints={ChartDatapoints}/>
}
export default ExpenseChart;