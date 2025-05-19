import { FiSearch } from 'react-icons/fi'; // using react-icons for the search icon

export default function SearchBar() {
  return (
    <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-[864px] h-full  bg-white">
      <FiSearch className="text-gray-400 text-xl mr-2" />
      <input 
        type="text" 
        placeholder="Search storage locations..." 
        className="flex-1 border-none outline-none text-gray-700 text-[20px] placeholder-gray-400 bg-transparent"
      />
    </div>
  );
}