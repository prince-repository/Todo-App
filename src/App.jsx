// import { Todo } from "./todo/todo";

// function App(){
//   return <section className="w-full h-full flex justify-center  m-10 ">

//   <Todo/>
//   </section>
// }

// export default App;

import TodoForm from "./components/TodoForm";
import { useRef, useState } from "react";
import { TodoList } from "./components/TodoList";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import "./App.css";
import { Filters } from "./components/Filters";

function App() {
  const [value, setValue] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(null);
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [lightMode, SetLightMode] = useState(true);
  const [searchTerm,setSearchTerm]=useState('');
  const [filter,setFilter]=useState("all");
  const [dateFilter, setDateFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");


  function onHandleMode() {
    if (lightMode) {
      SetLightMode(false);
    } else {
      SetLightMode(true);
    }
  }

  return (
    // <section className="flex flex-col  h-full ">
    <section
      className={`flex flex-col h-full min-h-screen transition-all duration-500 
    ${lightMode ? "bg-white text-black" : "bg-gray-900 text-white"}`}
    >
      <div className="flex justify-center items-center  relative  shadow-lg">
        <h1 className="heading-font ">TODO APP</h1>
        <MdSunny
          className={`absolute left-350  text-3xl cursor-pointer 
       ${lightMode === true ? "inline-block" : "hidden"}`}
          values={lightMode}
          onClick={onHandleMode}
        />
        <FaMoon
          className={`  absolute left-350  text-3xl cursor-pointer 
       ${lightMode === false ? "inline-block " : "hidden"}`}
          values={lightMode}
          onClick={onHandleMode}
        />
      </div>

      <TodoForm
        value={value}
        setValue={setValue}
        data={data}
        setData={setData}
        index={index}
        setIndex={setIndex}
        notes={notes}
        setNotes={setNotes}
        date={date}
        setDate={setDate}
        category={category}
        setCategory={setCategory}
        priority={priority}
        setPriority={setPriority}
        lightMode={lightMode}
      />
   
   <Filters   
     searchTerm={searchTerm}
     setSearchTerm={setSearchTerm}
     lightMode={lightMode}
     filter={filter}
     setFilter={setFilter}
     dateFilter={dateFilter}
     setDateFilter={setDateFilter}
     priorityFilter={priorityFilter}
     setPriorityFilter={setPriorityFilter}
     categoryFilter={categoryFilter}
     setCategoryFilter={setCategoryFilter}
     setData={setData}
   />

      <TodoList
        data={data}
        setData={setData}
        setValue={setValue}
        setIndex={setIndex}
        setNotes={setNotes}
        setDate={setDate}
        setCategory={setCategory}
        setPriority={setPriority}
        lightMode={lightMode}
        searchTerm={searchTerm}
        filter={filter}
        dateFilter={dateFilter}
        priorityFilter={priorityFilter}
        categoryFilter={categoryFilter}
      
      />
    </section>
  );
}

export default App;
