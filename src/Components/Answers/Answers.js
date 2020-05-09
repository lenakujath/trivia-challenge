import React from 'react';

class Answer extends React.Component {
 
    
      state = {
 
        wrongAnswers: this.props.answer,
        //checking for a click event
        notClicked: true,
        rightAnswer: this.props.rightAnswer,
        //the array were right and wrong answers are mixed together
        allAnswers: [],
        // the shuffeld array
        allRandom: [],
      
          
      };

      //Using a shuffle function to randomize the place of the right answer

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

      
    // when the component is loaded, the previously seperate properties of the right and the wrong answers are pushed into one array
    // the occurrance of the right answer gets randomized by using the shuffle() on the array
     
      componentDidMount = () => {
        

        let responses = [...this.state.wrongAnswers];
        let allTogether = [...responses];
        allTogether.push(this.state.rightAnswer);
        let shuffled = this.shuffle(allTogether)
      
        this.setState({

            allAnswers: shuffled,
            
        })
      }

      //by checking with a boolean if a choice has been made, a ternary can later be used to display exlusively the right answer
      //after a click event

      onChoice = (event) => {

        this.setState({ 

          notClicked: false,

        });    
      };
      
      render() {
       
        return (
                       
          <div>
        
              <div>
              {/*The ternary controls, by checking if a click event did happen if we see all possible options, or the 
              right answer at the end */}
            { this.state.notClicked ?  this.state.allAnswers.map((answer, index) => {
              return <button onClick={this.onChoice}>{answer}</button> ;                         
            })  : <button> {this.state.rightAnswer}</button> 
             } 
                </div>
           
          </div>

        );
      }
    }
    
    export default Answer;