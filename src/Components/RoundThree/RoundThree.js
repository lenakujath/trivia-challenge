import React from 'react';
import Answer from '../Answers/Answers';
import { Link } from 'react-router-dom';


class RoundThree extends React.Component {

    state = {

        title: 'Round 3 - Music Knowledge',
        data: [],
        allAnswers: [],
       
    }

    componentDidMount = () => {

      
      return fetch(`https://opentdb.com/api.php?amount=5&category=12&difficulty=hard&type=multiple`)
        .then((response) => (response.json())
        .then(questions => {
            const myquestions = questions.results;
            
         
            this.setState({
                data: myquestions
            })
          })
      )     
    }

    render(){

    return (
    <div className="App">
      <h1>{this.state.title}</h1>
      
       { <div>
        {
          this.state.data.map( (data, index) => {
            
          return <div className="question"> 
                      <h2> {data.question}</h2> 
                     <Answer key={index} id={index} rightAnswer={data.correct_answer} answer={data.incorrect_answers}  />
                 </div>
          })
         }
        </div> }
        <Link to="theend">Wrap it up!</Link>
    </div>
  );
 }
}

export default RoundThree;