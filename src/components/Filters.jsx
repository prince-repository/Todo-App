






import { IoFilter } from "react-icons/io5";

export const Filters = (props) => {
  const {
    searchTerm,
    setSearchTerm,
    lightMode,
    filter,
    setFilter,
    dateFilter,
    setDateFilter,
    priorityFilter,
    setPriorityFilter,
    categoryFilter,
    setCategoryFilter,
    setData,
  } = props;

  return (
    <>
{/* <h1 className=" flex jusitfy-start  gap-4 px-4  py-4 text-2xl">
        Filter By <IoFilter className="text-3xl" />
      </h1>          */}
     {/* <section className="flex flex-wrap justify-center gap-4 py-8"> */}

 

    <section className="flex mx-6 gap-6 justify-center">
    
    <div className="max-w-[20]">
    <h1 className=" flex jusitfy-start items-center gap-2 text-3xl p-2 ">
        Filter By <IoFilter className="text-3xl mt-3" />
      </h1>
    </div>
 
   
     <div  className="max-w-[80]  grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6 ">
      {/* Search Input */}
      <div className="flex flex-col ">
        <label className={`mb-1 font-semibold ${lightMode ? "text-black" : "text-white"}`}>
          Search Tasks
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Filter your tasks..."
          className={`px-4 py-2 rounded-xl shadow-md outline-none transition-all duration-300
          ${lightMode
              ? "bg-white text-black placeholder-black border border-gray-300"
              : "bg-gray-800 text-white placeholder-white border border-gray-600"
            }`}
        />
      </div>

      {/* Status Filter */}
      <div className="flex flex-col ">
        <label className={`mb-1 font-semibold ${lightMode ? "text-black" : "text-white"}`}>
          Status
        </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={`px-4 py-2 rounded-xl shadow-md outline-none
          ${lightMode
              ? "bg-white text-black border border-gray-300"
              : "bg-gray-800 text-white border border-gray-600"
            }`}
        >
          <option value="">All</option>
          <option value="complete">Completed</option>
          <option value="incomplete">Incompleted</option>
        </select>
      </div>

      {/* Date Filter */}
      <div className="flex flex-col ">
        <label className={`mb-1 font-semibold ${lightMode ? "text-black" : "text-white"}`}>
          Date
        </label>
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className={`px-4 py-2 rounded-xl shadow-md outline-none
          ${lightMode
              ? "bg-white text-black border border-gray-300"
              : "bg-gray-800 text-white border border-gray-600"
            }`}
        />
      </div>

      {/* Priority Filter */}
      <div className="flex flex-col ">
        <label className={`mb-1 font-semibold ${lightMode ? "text-black" : "text-white"}`}>
          Priority
        </label>
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className={`px-4 py-2 rounded-xl shadow-md outline-none
          ${lightMode
              ? "bg-white text-black border border-gray-300"
              : "bg-gray-800 text-white border border-gray-600"
            }`}
        >
          <option value="all">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Category Filter */}
      <div className="flex flex-col ">
        <label className={`mb-1 font-semibold ${lightMode ? "text-black" : "text-white"}`}>
          Category
        </label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className={`px-4 py-2 rounded-xl shadow-md outline-none
          ${lightMode
              ? "bg-white text-black border border-gray-300"
              : "bg-gray-800 text-white border border-gray-600"
            }`}
        >
          <option value="all">All</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Clear All Tasks Button */}
      <button
        onClick={() => {
          const confirmDelete = window.confirm("Are you sure you want to clear all tasks?");
          if (confirmDelete) {
            setData([]);
            localStorage.setItem("todos", JSON.stringify([]));
          }
        }}
        className="lg:py-3 lg:px-3 py-2 px-2 bg-red-500 hover:bg-red-600 text-white lg:font-bold font-medium  my-5 rounded-3xl shadow-md transition-all cursor-pointer "
      >
        Clear All Tasks
      </button>
      </div>
    </section>
   
   </>
  );
 
};
