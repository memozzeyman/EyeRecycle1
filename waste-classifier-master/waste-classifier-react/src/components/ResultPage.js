import '../styles/ResultPage.css'
var React = require("react");

class ResultPage extends React.Component {
    render() {
        let info;
          if (this.props.result['category'] == ['plastic']) {
          info = 
              <div className="container">
                <div className="row center-div predsinfogreen">
                    <div className="col-12 center-div pred-catinfo">Good News! most plastic is widely recycled in the UK, so as long as you put it in a recyclable bin, you should be good to go!</div>
                </div>
              </div>
        }
        else if (this.props.result['category'] == ['metal']){
         info = 
              <div className="container">
                <div className="row center-div predsinfogreen">
                    <div className="col-12 center-div pred-catinfo">Good News! most metal is widely recycled in the UK, make sure containers are cleaned, and aerosols are empty, then you should be good to go!</div>
                </div>
              </div>     
        }
        else if (this.props.result['category'] == ['cardboard']){
         info = 
              <div className="container">
                <div className="row center-div predsinfogreen">
                    <div className="col-12 center-div pred-catinfo">Good News! most cardboard is widely recycled in the UK, so as long as you put it in a recyclable bin, you should be good to go!</div>
                </div>
              </div>    
            
            
        }    
        else if (this.props.result['category'] == ['paper']) {
         info = 
              <div className="container">
                <div className="row center-div predsinfoamber">
                    <div className="col-12 center-div pred-catinfo">Be careful! not all paper is recyclable, paper which is coated in wax, plastic or foil cannot be recycled, so be sure to check! </div>
                </div>
              </div>    
            
            
        }   
        else if (this.props.result['category'] == ['glass']){   
         info = 
              <div className="container">
                <div className="row center-div predsinfoamber">
                    <div className="col-12 center-div pred-catinfo">Be careful! only recyle glass bottles or jars, and make sure they're empty and washed, products such as mirrors or lightbulbs unfortinatley cannot be recycled.</div>
                </div>
              </div>    
            
        }            
        else{}
        return (
            <div className="container">
                <div className="row center-div preds">
                    <div className="col-12 center-div pred-cat"> Predicted Category: {this.props.result['category']}</div>
                </div>
             <div className="container">
        {info}
        
        </div>
                <div className="row center-div probs-outer">
                    <div className="col-12 center-div probs-title">
                        Probabilities for each class:
                    </div>
                    <div className="col-12 center-div probs">
                        <b>Metal: </b> {this.props.result['probs']['metal']}
                    </div>
                    <div className="col-12 center-div probs">
                       <b>Plastic: </b> {this.props.result['probs']['plastic']}
                    </div>
                    <div className="col-12 center-div probs">
                        <b>Cardboard: </b>{this.props.result['probs']['cardboard']}
                    </div>
                    <div className="col-12 center-div probs">
                        <b>Paper: </b>{this.props.result['probs']['paper']}
                    </div>
                    <div className="col-12 center-div probs">
                        <b>Glass: </b> {this.props.result['probs']['glass']}
                    </div>
                    <div className="col-12 center-div probs">
                        <b>Trash:</b>: {this.props.result['probs']['trash']}
                    </div>
                </div>
            </div >
        );
    }
}

export default ResultPage;
