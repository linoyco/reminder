import React, {Component} from 'react';

class Logs extends Component {

    state = {
        textInput: "",
        message:""
    };

    render() {
        return (
            <React.Fragment>
                <div className="form-group shadow-textarea m-4">
                    <h3>Log something</h3>
                    <textarea className="form-control z-depth-1 m-3"
                              rows="5"
                              onChange={(event) => this.inputLogChanges(event)}
                              placeholder="Write something here...">
                    </textarea>
                </div>
                <button className="btn btn-success btn-sm m-3" onClick={this.saveLogChanges}>save changes</button>
                <p className="font-weight-bold m-3 alert-success">{this.state.message}</p>
            </React.Fragment>
        );
    }

    inputLogChanges = (event) => {
        this.setState({textInput: event.target.value.toUpperCase()});
        console.log(this.state.textInput);
    }

    setInputMessage = () => {
        const newLog= this.state.textInput;
        this.setState({textInput: "", message: newLog});
    }

    saveLogChanges = () => {
        this.setInputMessage();
    }
}

export default Logs;
