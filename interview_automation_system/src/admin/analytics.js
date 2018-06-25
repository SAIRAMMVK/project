import React,{Component} from 'react';
import {Pie} from 'react-chartjs-2';
import './analytics.css';
import Header from '../common/header';

const Graph = (props) => {
const data = {
	labels: [
		'Java',
		'JavaScript',
		'React JS'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};
return(
    <Pie data={data} height={70}/>
);
}

export default class Chart extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <Header/>
                <div className="first-div">
                    <div className="chart" id="chart">
                        <Graph/>
                    </div>
                    <div className="months">
                        <p>Analysis For The Month:</p>
                        <select >
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                        </select>
                    </div>
                </div>
                <div className="second-div">
                   
                </div>
            </div>
        );
    }
}