import "./App.css";
import { useState } from "react";

function App() {
  let [target, setTarget] = useState("");
  let [set, showSet] = useState([]);
  let [update, setUpdate] = useState(true);
  const [Edit, setEdit] = useState();

  let AddTask = () => {
    if (target.length === 0) {
      alert("Please Enter Task");
    } else if (target && !update) {
      showSet(
        set.map((e) => {
          if (e.id === Edit) {
            return { ...set, name: target };
          }
          return e;
        })
      );
      setUpdate(true);
      setTarget("");
      setEdit(null);
    } else {
      const allInput = { id: new Date().getTime(), name: target };
      let added = [...set, allInput];
      showSet(added);
      setTarget("");
    }
  };

  let Remove = (index) => {
    let filtered = set.filter((value) => index !== value.id);
    showSet(filtered);
    console.log(filtered);
  };

  let EditTask = (id) => {
    const newEditOne = set.find((value) => {
      return value.id === id;
    });
    console.log(newEditOne);
    setUpdate(false);
    setTarget(newEditOne.name);
    setEdit(id);
  };

  let clearAllData = () => {
    showSet([]);
  };

  return (
    <>
      <div className="container-fluid">
        <h1 className="heading">To Do List</h1>
        <div className="box">
          <div className="input1">
            <input
              type="text"
              className="form-control"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
            {update ? (
              <button className="btn btn-danger mx-2" onClick={AddTask}>
                Add
              </button>
            ) : (
              <button className="btn btn-danger mx-2" onClick={AddTask}>
                Update
              </button>
            )}
          </div>
        </div>
      
      <div className="container">
        {set.map((e, i) => (
          <div className="heading1">
            <h5>{e.name}</h5>
            <div className="heading2">
              <i
                class="fa-solid fa-pen-to-square"
                onClick={() => EditTask(e.id)}
              ></i>
              <i class="fa-solid fa-trash" onClick={() => Remove(e.id)}></i>
            </div>
          </div>
        ))}

      </div>
      
      <div className="button-wrapper">
          <button className="btn btn-danger mx-2" onClick={clearAllData}>
            clearAll
          </button>
        </div>
        </div>
    </>
  );
}

export default App;
