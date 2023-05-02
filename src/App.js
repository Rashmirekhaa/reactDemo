import logo from "./logo.svg";
import "./App.css";
import "./Login/Login";
import "./Netflix/Netflix";
import Login from "./Login/Login";
import Practice from "./Practice/Practice";
import Practice1 from "./Practice1/Practice1";
import Dashboard from "./Dashboard/Dashboard";
import DrawerSidebar from "./Dashboard/Drawer";
import Slot from "./Dashboard/Slot";
import Netflix from "./Netflix/Netflix";
import Training from "./Netflix/Netflix";
import TodoList from "./ToDoList/ToDoList";

function App() {
  const main_section = {
    color: "black",
    fontSize: 200,
    margin: 100,
  };
  return (
    <div>
      {/* <Training></Training> */}
      {/* <Practice1></Practice1> */}
      <TodoList></TodoList>
    </div>
  );
}

export default App;
