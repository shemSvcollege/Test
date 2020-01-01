import React, { Component } from 'react';
import {Pie,Doughnut,Bar} from 'react-chartjs-2';

export default class PieChart extends Component {
    
    constructor(props){
        super(props);
        this.state={
            labels:['QA','IT','FRONR-END'],
            datasets: [{
                data:[20,50,10],
                backgroundColor:['blue','yellow','green']
            }]
        }
    }

    componentWillMount(){
        if(this.props.option == 'qa'&&this.props.answers < 150){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[65,20,0],
                    backgroundColor:['blue','yellow','green']
                }]
            })   
        }
        else if(this.props.option == 'qa'&&this.props.answers >= 150&&this.props.answers < 300){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[75,50,20],
                    backgroundColor:['blue','yellow','green']
                }]
            })   
        }
        else if(this.props.option == 'qa'&&this.props.answers >= 300){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[90,50,80],
                    backgroundColor:['blue','yellow','green']
                }]
            })   
        }
        else if(this.props.option == 'it'&&this.props.answers < 150){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[50,65,0],
                    backgroundColor:['blue','yellow','green']
                }]
            })   
        }
        else if(this.props.option == 'it'&&this.props.answers >= 150&&this.props.answers < 300){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[50,75,20],
                    backgroundColor:['blue','yellow','green']
                }]
            })   
        }
        else if(this.props.option == 'it'&&this.props.answers >= 300){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[50,90,80],
                    backgroundColor:['blue','yellow','green']
                }]
            })   
        }
        else if(this.props.option == 'fe'&&this.props.answers < 150){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[65,30,30],
                    backgroundColor:['blue','yellow','green']
                }]
            })   
        }
        else if(this.props.option == 'fe'&&this.props.answers >= 150&&this.props.answers < 300){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[85,50,70],
                    backgroundColor:['blue','yellow','green']
                }]
            })   
        }
        else if(this.props.option == 'fe'&&this.props.answers >= 300){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[90,80,90],
                    backgroundColor:['blue','yellow','green']
                }]
            })   
        }
        else if(this.props.option == 'none'&&this.props.answers < 150){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[65,20,0],
                    backgroundColor:['blue','yellow','green']
                }]
            })   
        }
        else if(this.props.option == 'none'&&this.props.answers >= 150&&this.props.answers < 300){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[75,50,20],
                    backgroundColor:['blue','yellow','green']
                }]
            })   
        }
        else if(this.props.option == 'none'&&this.props.answers >= 300){
            this.setState({
                labels:this.state.labels,
                datasets: [{
                    data:[100,70,90],
                    backgroundColor:['blue','yellow','green']
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
                <div className='scholarshipBtn' onClick={()=>{this.props.scholarship()}}>
                    בקשה למלגה
                </div>
            </div>
        )
    }
}
