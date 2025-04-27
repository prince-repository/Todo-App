

import { useEffect } from "react";

export default function TodoForm(props) {
  const {
    value,
    setValue,
    data,
    setData,
    index,
    setIndex,
    notes,
    setNotes,
    date,
    setDate,
    category,
    setCategory,
    priority,
    setPriority,
    lightMode,
  } = props;

  useEffect(() => {
    const getData = localStorage.getItem("todos");
    if (getData) {
      setData(JSON.parse(getData));
    }
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      localStorage.setItem("todos", JSON.stringify(data));
    }
  }, [data]);

  function onHandleSubmit(e) {
    e.preventDefault();
    if (value.trim() === "") return;

    if (index != null) {
      const updatedTodos = [...data];
      updatedTodos[index] = {
        ...updatedTodos[index],
        text: value,
        notes: notes,
        getDate: date,
        category: category || "",
        priority: priority || "",
      };
      console.log("Adding todo", value);

      setData(updatedTodos);
      setIndex(null);
    } else {
      setData([
        ...data,
        {
          text: value,
          notes: notes,
          getDate: date,
          complete: false,
          category: category || "",
          priority: priority || "",
        },
      ]);
    }

    setValue("");
    setNotes("");
    setDate("");
    setCategory("");
    setPriority("");
  }

  return (
    <div className={`flex justify-center mt-5`}>
      <form onSubmit={onHandleSubmit}>
        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3   m-6 gap-4 ">

          {/* Date Input */}
         <input
            type="date"
            value={date}
             onChange={(e) => setDate(e.target.value)}
              className={`outline-none shadow-sm px-10 py-2 shadow-gray-500 transition-all duration-500 rounded
              ${lightMode
               ? "bg-white text-black placeholder-black border border-gray-300"
                : "bg-gray-900 text-white placeholder-white border border-gray-600"
               }
              `}
                />


          {/* Todo Input */}
          <input
            type="text"
            placeholder="enter your todos..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className={`outline-none shadow-sm px-10 py-2 shadow-gray-500 transition-all duration-500
            ${lightMode
              ? "bg-white text-black placeholder-black"
              : "bg-gray-800 text-white placeholder-white"
            }`}
          />

          {/* Notes Textarea */}
          <textarea
            value={notes}
            cols={30}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Enter additional notes (optional)"
            className={`outline-none shadow-sm px-10 py-2 shadow-gray-500 transition-all duration-500 
            ${lightMode
              ? "bg-white text-black placeholder-black"
              : "bg-gray-800 text-white placeholder-white"
            }`}
          />

          {/* Priority Select */}
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className={`outline-none shadow-sm px-10 py-2 shadow-gray-500 transition-all duration-500
            ${lightMode ? "bg-white text-black" : "bg-gray-800 text-white"}`}
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          {/* Category Select */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={`outline-none shadow-sm px-10 py-2 shadow-gray-500 transition-all duration-500
            ${lightMode ? "bg-white text-black" : "bg-gray-800 text-white"}`}
          >
            <option value="">Select Category</option>
            <option value="Work">Work (Office, Job)</option>
            <option value="Personal">Personal (Home, Family)</option>
            <option value="Shopping">Shopping (Groceries, Clothes)</option>
            <option value="Other">Other</option>
          </select>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-white bg-red-500 hover:bg-red-600 px-2 py-2 cursor-pointer font-medium shadow-sm shadow-gray-500"
          >
            {index != null ? "UPDATE TODO" : "ADD TODO"}
          </button>
        </div>
      </form>
    </div>
  );
}

