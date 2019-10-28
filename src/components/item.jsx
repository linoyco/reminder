import React, {Component} from 'react';

class Item extends Component {

    state = {};

    render() {
        return (
            <li>
                <React.Fragment>
                    {this.props.task}
                    <button type="button" className="btn btn-outline-success btn-sm m-3"
                            onClick={() => this.props.onFinish(this.props.itemId)}>Finish</button>
                    <button type="button" className="btn btn-outline-danger"
                            onClick={() => this.props.onDelete(this.props.itemId)}>X</button>
                </React.Fragment>
            </li>
        );
    }
}

export default Item;