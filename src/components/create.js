import React, { useState } from "react";
import "../styles/popup.css";

const Create = ({ handleUpdate, show, setShow }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      id: new Date().toLocaleTimeString(),
      title: title,
      desc: desc,
      start: start,
      end: end,
      toStart: true,
      toProgress: false,
      toFinish: false,
    };
    handleUpdate(obj);
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <div className="items">
          <label>Title</label>
          <div>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="items">
          <label>Description</label>
          <div>
            <input
              type="text"
              required
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </div>
        <div className="items">
          <label>Creation Date</label>
          <div>
            <input
              type="date"
              required
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
          </div>
        </div>
        <div className="items">
          <label>DeadLine Date</label>
          <div>
            <input
              type="date"
              required
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
          </div>
        </div>
        <div className="btn">
          <button type="submit">Add Task</button>
        </div>
      </form>
      <div className="implace" onClick={() => setShow(!show)}></div>
    </div>
  );
};

export default Create;
