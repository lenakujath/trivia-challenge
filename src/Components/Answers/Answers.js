import React from 'react';

class Answer extends React.Component {
 
    
      state = {

        Answers: this.props.answer,
        Clickcheck: true,
        rightAnswer: this.props.rightAnswer
      };
    
      // Event on button
      onAnswer = () => {
       
        this.setState({ 

          Clickcheck:false

        });
      
      };
      
      render() {
       
        return (
         
          <div>
              
            { this.state.Clickcheck ?  this.state.Answers.map(ans => {
              return <button onClick={this.onAnswer}>{ans}</button>;
                      
            }) : <button > {this.state.rightAnswer}</button>  } 
    
          </div>
       
        );
      }
    }
    
    export default Answer;