import React from "react";
import "./TodoItems.css";
const TodoItems = (props) => {
  const { items, deletItem } = props;
  let length = items.length;
  const ListItems = length ? (
    items.map((items) => {
      return (
        <div key={items.id}>
          <span className="name">{items.name}</span>
          <span className="age">{items.age}</span>
          <span className="action icon" onClick={() => deletItem(items.id)}>
            &times;
          </span>
        </div>
      );
    })
  ) : (
    <p>There Is No Item To Show</p>
  );
  return (
    <div className="ListItems">
      <div>
        <span className="name title">Name</span>
        <span className="age title">Age</span>
        <span className="action title">Action</span>
      </div>

      {ListItems}
    </div>
  );
};
export default TodoItems;
