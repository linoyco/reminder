import React, {Component} from 'react';

class Home extends Component {

    state = {
        imageUrl: "https://picsum.photos/200",
    };

    render() {
        return (
            <React.Fragment>
                <div className="text-sm-center m-5">
                    <h1>Welcome!</h1>
                    <br/>
                    <img src={this.state.imageUrl} alt=""/>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
