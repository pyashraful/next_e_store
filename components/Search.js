import SearchIcon from "../public/SearchIcon.svg";

export default function Search() {
  return (
    <div className=" pl-3 border-2 w-[550px] flex justify-between items-center rounded-full focus-within:ring focus-within:ring-violet-300 overflow-hidden">
      <div>
        <SearchIcon />
      </div>
      <div className="w-full">
        <input
          className="w-full p-3 border-none focus:outline-none"
          type="search"
          placeholder="Search"
        />
      </div>
      <div>
        <button className="bg-green-600 p-3">Search</button>
      </div>
    </div>
  );
}
