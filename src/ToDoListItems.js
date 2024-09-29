function ToDoListItems({ value, onDelete }) {
  return (
    <div>
      <li>
        {value}
        <span
          onClick={() => onDelete(value)}
          style={{ cursor: "pointer", marginLeft: "10px", color: "red" }}
        >
          &times; {/* This is the delete button */}
        </span>
      </li>
    </div>
  );
}

export default ToDoListItems;
