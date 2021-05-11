import '../styles/LandingPage.css'
import ResultPage from '../components/ResultPage';
import Logo from '../resources/Logo.png';
var React = require("react");


class LandingPage extends React.Component {
    render() {
        let image, results;
        if (this.props.img) {
            image = <div className="row"><div className="col-12 center-div"><img src={this.props.img} className="center-div image-preview" /></div></div>
        } else {
            image = <div className="row"></div>
        }
        if (this.props.currentStep == 3) {
            results =
                <div className="row spinner">
                    <div className="col-12 center-div">
                        <button class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Detecting Material
                        </button>
                    </div>
                </div>
        } else if (this.props.currentStep == 1) {
            results = <ResultPage result={this.props.response} />
        } else {
            results = <div></div>
        }
        return (
            <div className="container">
                <div className="row">
                    <h1 className="col-12 header">
                      <img src={Logo} alt='website logo' /> 
                    </h1>
            
                </div>
                <div className="row">
                    <div className="col-12 message">
                        This simple waste image classifier can identify the following materials from an image:
                       <div> Metal, Plastic, Paper, Cardboard or Trash</div>
                                   <div>*Ensure your image is set against a neutral background (white or grey) and that you focus the object in the centre.</div>
                        <div>Upload your image below:</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 center-div choose-file">
                        <input type="file" name="file" id="file" class="choose" onChange={this.props.handleChange} />
                        <label for="file">Choose a file</label>
                    </div>
            
                     </div>
                {image}
                {results}
            </div>
        );
    }
}

export default LandingPage;
