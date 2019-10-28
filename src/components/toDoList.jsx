import React, {Component} from 'react';
import Item from "./item";

class toDoList extends Component {

    state = {
        itemList: ["Go to school", "Home works"],
        id: 0,
        message: "",
        addToList: ""
    };

    render() {
        return (
            <React.Fragment>
                <div>
                    <input type="text" className="form-control m-3"
                           placeholder="Create new task!" onChange={(event) => this.onHandleChange(event)}/>
                    <button className="btn btn-success btn-sm m-3" onClick={this.sendToList}>Send to list!</button>
                    <br/>
                    <ul> {this.showItems()} </ul>
                </div>
            </React.Fragment>
        );
    }

    showItems = () => {
        return this.state.itemList.map((task, idx) => <Item key={idx}
                                                            itemId={idx}
                                                            onDelete={this.handleDelete}
                                                            onFinish={this.handleFinish}
                                                            task={task}/>
        );
    }

    onHandleChange = (event) => {
        this.setState({
            addToList: event.target.value
        });
    }

    sendToList = () => {
        console.log("the addToList value: " + this.state.addToList);

        const newList = this.state.itemList.concat([this.state.addToList]);
        this.setState({
            itemList: newList
        });
    }

    handleDelete = itemId => {
        console.log("delete called", itemId);
        let items = this.state.itemList;
        items.splice(itemId, 1);
        this.setState({items});
    }

    handleFinish = itemId => {
        this.setState({id: itemId});
        console.log("finish called", itemId, this.state.id);
        alert("Well done! "+ '\n' +  "this task is going to be deleted...." + '\n' + "bye bye");
        this.handleDelete(itemId);
    }
}

export default toDoList;
