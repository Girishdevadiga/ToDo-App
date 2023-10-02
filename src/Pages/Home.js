import { useState } from "react";
import Navbar from "../Components/Navbar";
import Task from "../Components/Task";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const addHandler = (event) => {
    let text = document.getElementById("taskInput").value;
    if(text.trim()!==''){
      setTasks((tasks) => {
        return [...tasks, text];
      });
    }

    document.getElementById("taskInput").value = "";
    //console.log(tasks);
  };

  const deleteHandler = (val) => {
    //console.log(val);
    let updatedTasks = [...tasks];
    updatedTasks = updatedTasks.filter((ele) => {
      return ele !==val;
    });
    console.log(updatedTasks);
    setTasks(updatedTasks);
  };

  const keyHandler = (event) => {
    if(event.key==='Enter'){
      addHandler();
    }
  };

  return (
    <div onKeyUp={keyHandler} >
      <Navbar></Navbar>
      <div className=" container d-flex flex-column align-items-center">
        <div className="input-prompt container m-3 d-flex flex-column align-items-center pt-3 border border-2 border-primary rounded form-group w-100 ">
          <input
            className="w-50 form-control "
            type="text"
            name=""
            id="taskInput"
            autoComplete="off"
            placeholder="Enter task to add"
          />
          <button onClick={addHandler} className="btn btn-primary w-25 m-3">
            Add
          </button>
        </div>
      </div>

      <div className="container d-flex flex-column align-items-center">
        {tasks.map((ele, index) => {
          return (
            <>
              <Task
                value={ele}
                key={index}
                deleteHandler={deleteHandler}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
