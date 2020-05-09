import React from 'react';

class Answer extends React.Component {
 
    
      state = {

        Answers: this.props.answer,
        Clicked: true,
        rightAnswer: this.props.rightAnswer,
        allAnswers: [],
        allRandom: []
          
      };


      shuffle = (a) => {

        let j;
        let x;
        let i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

      componentDidMount = () => {
        

        let responses = [...this.state.Answers];
        let allTogether = [...responses];
        allTogether.push(this.state.rightAnswer);
        let shuffled = this.shuffle(allTogether)
      
        this.setState({

            allAnswers: shuffled
        })
      }

   
      onChoice = () => {
       
        this.setState({ 

          Clicked: false

        });
      
      };
      
      render() {
       
        return (
                       
          <div>
        
              <div>
            { this.state.Clicked ?  this.state.allAnswers.map(answer => {
              return <button onClick={this.onChoice}>{answer}</button> ;                         
            })  : <button > {this.state.rightAnswer}</button> 
             } 
                </div>
           
          </div>

        );
      }
    }
    
    export default Answer;