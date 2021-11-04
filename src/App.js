import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Create from "./components/create";
import Tasks from "./components/tasks";
import "./styles/task.css";
import Edit from "./components/edit";
import { Route, Switch } from "react-router";
import NewPage from "./components/newPage";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) return JSON.parse(localStorage.getItem("list"));
  else return [];
};

const App = () => {
  const [show, setShow] = useState(false);
  const [list, setList] = useState(getLocalStorage());
  const [currItem, setCurrItem] = useState("toStart");
  const [currList, setCurrList] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [editable, setEditable] = useState({});

  useEffect(() => {
    let tempList = list.filter((item) => item[currItem] === true);
    setCurrList(tempList);
  }, [currItem, list]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  /* when you add any task  this function add new task to our array*/
  const handleUpdate = (item) => {
    setList([...list, item]);
    setShow(!show);
  };

  const handleChangeList = (temp, str) => {
    setList(temp);
    localStorage.setItem("list", JSON.stringify(temp));
    const arr = list.filter((data) => data[currItem] === true);
    setCurrList(arr);
  };

  const handleDelete = (item) => {
    let temp = list.filter((data) => data.id !== item.id);
    setList(temp);
    setCurrList(temp);
  };

  const handleEdit = (item) => {
    setEditable(item);
    setShowEdit(!showEdit);
  };

  const handleEditItem = (item) => {
    let ind = list.findIndex((data) => data.id === item.id);
    let temp = list;
    temp[ind] = item;
    setList(temp);
    localStorage.setItem("list", JSON.stringify(temp));
    setShowEdit(!showEdit);
  };

  return (
    <div className="box">
      {show ? (
        <Create handleUpdate={handleUpdate} show={show} setShow={setShow} />
      ) : (
        ""
      )}

      {showEdit ? (
        <Edit
          editable={editable}
          setEditable={setEditable}
          handleEdit={handleEditItem}
          setShowEdit={setShowEdit}
          showEdit={showEdit}
        />
      ) : (
        ""
      )}
      <Switch>
        <Route path="/" exact>
          <Navbar
            show={show}
            setShow={setShow}
            currItem={currItem}
            setCurrItem={setCurrItem}
          />
          <section>
            {currList.length ? (
              currList.map((item) => (
                <Tasks
                  key={item.id}
                  item={item}
                  list={list}
                  setList={setList}
                  handleDelete={handleDelete}
                  handleChangeList={handleChangeList}
                  handleEdit={handleEdit}
                />
              ))
            ) : (
              <h2> Currently you don't have any task {currItem}</h2>
            )}
          </section>
        </Route>
        <Route
          path="/view/:id"
          render={() => <NewPage currList={currList} />}
        />
      </Switch>
    </div>
  );
};

export default App;
