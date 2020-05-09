import React from 'react';
import Answer from '../Answers/Answers';
import { Link } from 'react-router-dom';


class RoundOne extends React.Component {

    state = {

        title: 'Round 1 - General Knowledge',
        data: [],
        allAnswers: [],
        correctAnswers: 0
    }

    //count time?

    componentDidMount = () => {

      
      return fetch(`https://opentdb.com/api.php?amount=2&category=9&difficulty=easy&type=multiple`)
        .then((response) => (response.json())
        .then(questions => {
            const myquestions = questions.results;
            
            //const allAns = questions.results
         
            this.setState({
                data: myquestions
            })
          })
      )     
    }
 /*   getAll = () => {

        
        let correctData = this.state.data.map(answers => answers.correct_answer);
        let incorrectData = this.state.data.map(ans => ans.incorrect_answers);
        let newArr = [...this.state.allAnswers]
        newArr.push(correctData);
        let completeArr = [...newArr];
        completeArr.push(incorrectData);
  
        this.setState({

          allAnswers: completeArr,
         
        })
  
        console.log(incorrectData);
    } */

   

    render(){

    return (
    <div className="App">
      <h1>{this.state.title}</h1>
      
       { <div>
        {
          this.state.data.map( (data, index) => {
            console.log(data);
          return <div className="card"> 
                      <h2> {data.question}</h2> 
                     <Answer key={index} id={index} rightAnswer={data.correct_answer} answer={data.incorrect_answers}  />
                 </div>
          })
         }
        </div> }
    </div>
  );
 }
}

export default RoundOne;
