import React, { useState, useEffect } from "react";
import "../styles/popup.css";

const Edit = ({ editable, handleEdit, setShowEdit, showEdit }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    setTitle(editable.title);
    setDesc(editable.desc);
    setStart(editable.start);
    setEnd(editable.end);
  }, [editable]);

  useEffect(() => {
    editable.title = title;
    editable.desc = desc;
    editable.start = start;
    editable.end = end;
  }, [title, desc, start, end, editable]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="popup">
      <form onSubmit={() => handleSubmit()}>
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
          <button onClick={() => handleEdit(editable)}>Update Task</button>
        </div>
      </form>
      <div className="implace" onClick={() => setShowEdit(!showEdit)}></div>
    </div>
  );
};

export default Edit;
