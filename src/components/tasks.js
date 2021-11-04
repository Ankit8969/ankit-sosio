import React from "react";
import { Link } from "react-router-dom";
import "../styles/task.css";

const Tasks = ({
  item,
  list,
  setList,
  handleDelete,
  handleChangeList,
  handleEdit,
}) => {
  const { title, desc } = item;

  const handleChange = (current) => {
    const ind = list.findIndex((data) => data.id === item.id);
    let temp = list;

    temp[ind][current] = true;
    if (current !== "toStart") temp[ind]["toStart"] = false;
    if (current !== "toProgress") temp[ind]["toProgress"] = false;
    if (current !== "toFinish") temp[ind]["toFinish"] = false;

    handleChangeList(temp, current);
  };

  return (
    <div className="task">
      <div className="title">{title}</div>

      <Link to={`/view/${item.id}`}>
        <div className="desc">{desc}</div>
      </Link>

      <div className="btn-group">
        <button onClick={() => handleChange("toProgress")}>PROGRESS</button>
        <button onClick={() => handleChange("toFinish")}>FINISH</button>
        <button onClick={() => handleDelete(item)}>DELETE</button>
        <button onClick={() => handleEdit(item)}>EDIT</button>
      </div>
    </div>
  );
};

export default Tasks;
