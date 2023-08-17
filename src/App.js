import { CONST } from "./static";
import NewActivity from "./NewActivity";
import ActiveList from "./ActiveList";
import './App.css';
import {useState} from "react";

function App() {
  const [activeList, setActiveList] = useState([]);

  const addActivity = (activity) => {
    setActiveList([...activeList, {text: activity, checked: false}]);
  }

  const checked = (index) => {
    const newActiveList = [...activeList];
    newActiveList[index].checked = !newActiveList[index].checked;
    setActiveList(newActiveList);
  }

  const deleteActivity = (index) => {
    const newActiveList = [...activeList];
    newActiveList.splice(index, 1);
    setActiveList(newActiveList);
  }

  return (
    <div className="App">
        <h1>{CONST.TODO_LIST}</h1>
        <NewActivity setActiveList={(active) => addActivity(active)}/>
        <ActiveList
            activeList={activeList}
            checked={(index) => checked(index)}
            deleteActivity={(index) => deleteActivity(index)}
        />
    </div>
  );
}

export default App;
