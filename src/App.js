import React, { Component } from "react";
import TodoItems from "./component/TodoItem/TodoItems";
import AddItem from "./component/AddItem/AddItem";
import "./App.css";
class App extends Component {
  state = {
    items: [
      { id: 1, name: "Mohammed", age: 26 },
      { id: 2, name: "AboRabie", age: 21 },
      { id: 3, name: "Nabeel", age: 17 },
    ],
  };
  deletItem = (id) => {
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items });
  };
  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };
  render() {
    return (
      <div className=" App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deletItem={this.deletItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
