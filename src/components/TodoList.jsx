// import { MdEdit, MdDelete } from "react-icons/md";

// export function TodoList({
//   data,
//   setData,
//   setValue,
//   setIndex,
//   setNotes,
//   setDate,
//   setCategory,
//   setPriority,
//   lightMode,
//   searchTerm,
//   filter,
//   dateFilter,
//   priorityFilter,
//   categoryFilter,
// }) {
//   function onHandleDelete(index) {
//     const updatedData = data.filter((_, idx) => idx !== index);
//     setData(updatedData);
//     localStorage.setItem("todos", JSON.stringify(updatedData));
//   }

//   function onHandleUpdate(idx) {
//     setValue(data[idx].text);
//     setIndex(idx);
//     setNotes(data[idx].notes);
//     setDate(data[idx].getDate);
//     setCategory(data[idx].category);
//     setPriority(data[idx].priority);
//   }

//   function onHnadleComplete(index) {
//     const updateData = [...data];
//     updateData[index].complete = !updateData[index].complete;
//     setData(updateData);
//   }

//   const FilterTodos = data.filter((item) => {
//     if (
//       searchTerm &&
//       !item.text.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//       return false;
//     if (filter === "complete" && !item.complete) return false;
//     if (filter === "inComplete" && item.complete) return false;
//     if (dateFilter && item.getDate !== dateFilter) return false;
//     if (priorityFilter !== "all" && item.priority !== priorityFilter)
//       return false;
//     if (categoryFilter !== "all" && item.category !== categoryFilter)
//       return false;
//     return true;
//   });

//   return (
//     <ul className="flex flex-col w-full md:w-3/4 mx-auto mt-6 space-y-4">
//       {
//       FilterTodos.length===0? <div 
//       className="text-center text-yellow-500 text-5xl mt-8">
//               🧐 No tasks found!
//           </div>  :   
//    FilterTodos.map((item, idx) => (
//         <li
//           key={idx}
//           className={`flex flex-col md:flex-row md:items-center md:justify-between gap-3 rounded-xl px-5 py-4 shadow-md transition-transform hover:scale-[1.02]
//           ${
//             lightMode
//               ? "bg-white shadow-gray-300"
//               : "bg-gray-800 shadow-gray-700"
//           }
//           `}
//         >
//           <div className="flex items-center gap-3">
//             <input
//               type="checkbox"
//               checked={item.complete}
//               onChange={() => onHnadleComplete(idx)}
//               className="w-6 h-6 cursor-pointer"
//             />
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 flex-1">
//             <p
//               className={`text-base font-semibold ${
//                 item.complete
//                   ? "line-through text-gray-400"
//                   : lightMode
//                   ? "text-black"
//                   : "text-white"
//               }`}
//             >
//               <strong className="mr-1 text-lg">Date:</strong> {item.getDate}
//             </p>
//             <p
//               className={`text-base font-semibold ${
//                 item.complete
//                   ? "line-through text-gray-400"
//                   : lightMode
//                   ? "text-black"
//                   : "text-white"
//               }`}
//             >
//               <strong className="mr-1 text-lg">Task:</strong> {item.text}
//             </p>
//             <p
//               className={`text-base font-semibold ${
//                 item.complete
//                   ? "line-through text-gray-400"
//                   : lightMode
//                   ? "text-black"
//                   : "text-white"
//               }`}
//             >
//               <strong className="mr-1 text-lg">Priority:</strong>{" "}
//               {item.priority}
//             </p>
//             <p
//               className={`text-base font-semibold ${
//                 item.complete
//                   ? "line-through text-gray-400"
//                   : lightMode
//                   ? "text-black"
//                   : "text-white"
//               }`}
//             >
//               <strong className="mr-1 text-lg">Category:</strong>{" "}
//               {item.category}
//             </p>
//             <p
//               className={`text-base font-semibold ${
//                 item.complete
//                   ? "line-through text-gray-400"
//                   : lightMode
//                   ? "text-black"
//                   : "text-white"
//               }`}
//             >
//               <strong className="mr-1 text-lg">Notes:</strong> {item.notes}
//             </p>
//           </div>

//           <div className="flex items-center space-x-4 mt-2 md:mt-0">
//             <MdEdit
//               onClick={() => onHandleUpdate(idx)}
//               className={`text-2xl cursor-pointer transition-colors ${
//                 lightMode
//                   ? "text-blue-600 hover:text-blue-800"
//                   : "text-blue-400 hover:text-blue-300"
//               }`}
//               title="Edit"
//             />
//             <MdDelete
//               onClick={() => onHandleDelete(idx)}
//               className={`text-2xl cursor-pointer transition-colors ${
//                 lightMode
//                   ? "text-red-600 hover:text-red-800"
//                   : "text-red-400 hover:text-red-300"
//               }`}
//               title="Delete"
//             />
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }



























import { MdEdit, MdDelete } from "react-icons/md";

export function TodoList({
  data,
  setData,
  setValue,
  setIndex,
  setNotes,
  setDate,
  setCategory,
  setPriority,
  lightMode,
  searchTerm,
  filter,
  dateFilter,
  priorityFilter,
  categoryFilter,
}) {
  function onHandleDelete(index) {
    const updatedData = data.filter((_, idx) => idx !== index);
    setData(updatedData);
    localStorage.setItem("todos", JSON.stringify(updatedData));
  }

  function onHandleUpdate(idx) {
    setValue(data[idx].text);
    setIndex(idx);
    setNotes(data[idx].notes);
    setDate(data[idx].getDate);
    setCategory(data[idx].category);
    setPriority(data[idx].priority);
  }

  function onHnadleComplete(index) {
    const updateData = [...data];
    updateData[index].complete = !updateData[index].complete;
    setData(updateData);
  }

  const FilterTodos = data.filter((item) => {
    if (
      searchTerm &&
      !item.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
      return false;
    if (filter === "complete" && !item.complete) return false;
    if (filter === "inComplete" && item.complete) return false;
    if (dateFilter && item.getDate !== dateFilter) return false;
    if (priorityFilter !== "all" && item.priority !== priorityFilter)
      return false;
    if (categoryFilter !== "all" && item.category !== categoryFilter)
      return false;
    return true;
  });

  return (
    <ul className="flex flex-col w-full md:w-3/4  mx-auto mt-6 space-y-4">
      {
      FilterTodos.length===0? <div 
      className="text-center text-yellow-500 text-5xl mt-8">
              🧐 No tasks found!
          </div>  :   
   FilterTodos.map((item, idx) => (
        <li
          key={idx}
          className={`flex flex-col md:flex-row md:items-center md:justify-between gap-3 rounded-xl px-5 py-4 shadow-md transition-transform hover:scale-[1.02]
          ${
            lightMode
              ? "bg-white shadow-gray-300"
              : "bg-gray-800 shadow-gray-700"
          }
          `}
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => onHnadleComplete(idx)}
              className="w-6 h-6 cursor-pointer"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 flex-1">
            <p
              className={`text-base font-semibold ${
                item.complete
                  ? "line-through text-gray-400"
                  : lightMode
                  ? "text-black"
                  : "text-white"
              }`}
            >
              <strong className="mr-1 text-lg">Date:</strong> {item.getDate}
            </p>
            <p
              className={`text-base font-semibold ${
                item.complete
                  ? "line-through text-gray-400"
                  : lightMode
                  ? "text-black"
                  : "text-white"
              }`}
            >
              <strong className="mr-1 text-lg">Task:</strong> {item.text}
            </p>
            <p
              className={`text-base font-semibold ${
                item.complete
                  ? "line-through text-gray-400"
                  : lightMode
                  ? "text-black"
                  : "text-white"
              }`}
            >
              <strong className="mr-1 text-lg">Priority:</strong>{" "}
              {item.priority}
            </p>
            <p
              className={`text-base font-semibold ${
                item.complete
                  ? "line-through text-gray-400"
                  : lightMode
                  ? "text-black"
                  : "text-white"
              }`}
            >
              <strong className="mr-1 text-lg">Category:</strong>{" "}
              {item.category}
            </p>
            <p
              className={`text-base font-semibold ${
                item.complete
                  ? "line-through text-gray-400"
                  : lightMode
                  ? "text-black"
                  : "text-white"
              }`}
            >
              <strong className="mr-1 text-lg">Notes:</strong> {item.notes}
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <MdEdit
              onClick={() => onHandleUpdate(idx)}
              className={`text-2xl cursor-pointer transition-colors ${
                lightMode
                  ? "text-blue-600 hover:text-blue-800"
                  : "text-blue-400 hover:text-blue-300"
              }`}
              title="Edit"
            />
            <MdDelete
              onClick={() => onHandleDelete(idx)}
              className={`text-2xl cursor-pointer transition-colors ${
                lightMode
                  ? "text-red-600 hover:text-red-800"
                  : "text-red-400 hover:text-red-300"
              }`}
              title="Delete"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
