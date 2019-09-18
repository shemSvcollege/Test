import React, { Component } from 'react';
import {Pie,Doughnut,Bar} from 'react-chartjs-2';

export default class PieChart extends Component {
    
    constructor(props){
        super(props);
        this.state={
            labels:['QA','IT','DEVOPS','FRONR-END'],
            datasets: [{
                data:[2000,5000,2000,1000],
                backgroundColor:['red','blue','green','purple']
            }]
        }
    }

    componentWillMount(){
        if(this.props.option == 'qa'&&this.props.answers < 210){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[8000,1000,500,500],
                    backgroundColor:['red','blue','green','purple']
                }]
            })   
        }
        else if(this.props.option == 'qa'&&this.props.answers >= 210){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[5000,0,2500,2500],
                    backgroundColor:['red','blue','green','purple']
                }]
            })   
        }
        else if(this.props.option == 'it'&&this.props.answers < 210){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[1000,8000,500,500],
                    backgroundColor:['red','blue','green','purple']
                }]
            })   
        }
        else if(this.props.option == 'it'&&this.props.answers >= 210){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[0,5000,2500,2500],
                    backgroundColor:['red','blue','green','purple']
                }]
            })   
        }       
        else if(this.props.option == 'fe'&&this.props.answers < 300){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[4000,2500,500,3000],
                    backgroundColor:['red','blue','green','purple']
                }]
            })   
        }
        else if(this.props.option == 'fe'&&this.props.answers >= 300){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[0,0,1000,9000],
                    backgroundColor:['red','blue','green','purple']
                }]
            })   
        }
        else if(this.props.option == 'dev'&&this.props.answers < 300){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[2500,4000,3000,500],
                    backgroundColor:['red','blue','green','purple']
                }]
            })   
        }
        else if(this.props.option == 'dev'&&this.props.answers >= 300){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[0,0,9000,1000],
                    backgroundColor:['red','blue','green','purple']
                }]
            })   
        }
        else if(this.props.option == 'none'&&this.props.answers < 150){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[7000,3000,0,0],
                    backgroundColor:['red','blue','green','purple']
                }]
            })   
        }
        else if(this.props.option == 'none'&&this.props.answers >= 150&&this.props.answers < 300){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[5000,5000,0,0],
                    backgroundColor:['red','blue','green','purple']
                }]
            })   
        }
        else if(this.props.option == 'none'&&this.props.answers >= 300){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[1500,1500,0,7000],
                    backgroundColor:['red','blue','green','purple']
                }]
            })   
        }
        
    }
    
    render() {
        return (
            <div>
                <h1 style={{marginTop:'5%'}} className='App'>תוצאות המבחן</h1>
                <Bar 
                data={{
                    labels:this.state.labels,
                    datasets:this.state.datasets
                }}
                height='80%' width='100%'
                />
            </div>
        )
    }
}
