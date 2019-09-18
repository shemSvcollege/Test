import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header'
import Questions from './components/Question';
import Register from './components/Register';
import PieChart from './components/PieChart';
import Bottom from './components/Bottom';
import Introduction from './components/Introduction';
import {mat} from './QuestionsRep/Repository'
export default class App extends Component {
  
  constructor(){
    super();
    this.state={
      questions:mat,
      index:-2,
      lv:1,
      user:{},
      answers:0
    }
  }



  updateAnswer =(trueAnswer,index)=>{

    if(this.state.lv == this.state.questions.length && index == this.state.questions[this.state.lv-1].length-1){
      this.setState({
        questions:this.state.questions,
        index:0,
        lv:this.state.lv+1,
        user:this.state.user,
        answers:this.state.answers
      })
    }
    else if(trueAnswer==true&&this.state.index==this.state.questions[this.state.lv-1].length-1&&this.state.lv!=this.state.questions.length){
      this.setState({
        questions:this.state.questions,
        index:0,
        lv:this.state.lv+1,
        user:this.state.user,
        answers:this.state.answers+(this.state.lv*10)
      })
    }
    else if(trueAnswer==true&&(!(this.state.index==this.state.questions[this.state.lv-1].length-1&&this.state.lv==this.state.questions.length))){
      this.setState({
        questions:this.state.questions,
        index:this.state.index+1,
        lv:this.state.lv,
        user:this.state.user,
        answers:this.state.answers+(this.state.lv*10)
      })
    }
    else if((trueAnswer==false&&(this.state.index==this.state.questions[this.state.lv-1].length-1&&this.state.lv!=this.state.questions.length))){
    
      this.setState({
        questions:this.state.questions,
        index:0,
        lv:this.state.lv+1,
        user:this.state.user,
        answers:this.state.answers
      })

    }
    else{
      this.setState({
        questions:this.state.questions,
        index:this.state.index+1,
        lv:this.state.lv,
        user:this.state.user,
        answers:this.state.answers
      })
    }
  
  }

  updateUser =(user)=>{
    this.setState({
      questions:this.state.questions,
      index:this.state.index+1,
      lv:this.state.lv,
      user:user,
      answers:this.state.answers
    })
  }

  nextPage=()=>{
    this.setState({
      questions:this.state.questions,
      index:this.state.index+1,
      lv:this.state.lv,
      user:this.state.user,
      answers:this.state.answers
    })
  }
  

  show =()=>{
    
    if(this.state.index == -2)
      return <Introduction start={this.nextPage}/>

    else if(this.state.index==-1)
      return <Register addUser={this.updateUser} />
    
    else if(this.state.lv-1<this.state.questions.length){
      return <Questions title={this.state.questions[this.state.lv-1][this.state.index].title}
         a1={this.state.questions[this.state.lv-1][this.state.index].a1} 
         a2={this.state.questions[this.state.lv-1][this.state.index].a2} 
         a3={this.state.questions[this.state.lv-1][this.state.index].a3} 
         a4={this.state.questions[this.state.lv-1][this.state.index].a4}
         res = {this.updateAnswer}
         index = {this.state.index}
         trueAnswer = {this.state.questions[this.state.lv-1][this.state.index].trueAnswer}
         />
    }
    else{
      return <PieChart answers={this.state.answers} option = {this.state.user.option}/>
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.show()}
        <Bottom />
      </div>
    )
  }
}
