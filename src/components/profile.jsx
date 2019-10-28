import React, {Component} from 'react';

class Profile extends Component {

    state = {
        fullName: "",
        idNumber: "",
        phoneNumber: "",
        address: "",
        newProfile: ""
    };

    render() {
        return (
            <React.Fragment>
                <div className="m-4">
                    <h3>Your profile:</h3>
                    <input type="text" className="form-check m-3" onChange={(event) => this.onName(event)}
                           placeholder="Full name"/>
                    <input type="text" className="form-check m-3" onChange={(event) => this.onId(event)}
                           placeholder="id number"/>
                    <input type="text" className="form-check m-3" onChange={(event) => this.onPhone(event)}
                           placeholder="Phone number"/>
                    <input type="text" className="form-check m-3" onChange={(event) => this.onAddress(event)}
                           placeholder="Address"/>
                    <button className="btn btn-success btn-sm m-3" onClick={this.saveButton}>Save</button>
                </div>

                <p>{this.state.newProfile}</p>
            </React.Fragment>
        );
    }

    onName = (event) => {
        this.setState({fullName: event.target.value});
        console.log(this.state.fullName);
    }
    onId = (event) => {
        this.setState({idNumber: event.target.value});
        console.log(this.state.idNumber);
    }
    onPhone = (event) => {
        this.setState({phoneNumber: event.target.value});
        console.log(this.state.phoneNumber);
    }
    onAddress = (event) => {
        this.setState({address: event.target.value});
        console.log(this.state.address);
    }

    saveButton = () => {
        console.log("Full name: " + this.state.fullName +'\n'+
            " Id: " + this.state.idNumber +'\n'+
            " Phone: " + this.state.phoneNumber +'\n'+
            " Address: " + this.state.address);

        this.setState({newProfile: "Full name: " + this.state.fullName +
                                        " Id: " + this.state.idNumber +
                                        " Phone: " + this.state.phoneNumber +
                                        " Address: " + this.state.address});
    }

    printProfile = () => {

    }

}

export default Profile;
