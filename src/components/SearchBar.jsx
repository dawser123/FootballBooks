import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
const SearchBar = ({clubName}) => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault()
    clubName(inputValue.trim());
  };
  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto mt-1 flex items-center justify-center rounded-xl bg-black py-3 "
    >
      <label
        htmlFor="inputSearch"
        className="mx-2 hidden text-2xl text-primary-text-color  sm:block  "
      >
        <IoSearchSharp />
      </label>
      <input
        value={inputValue}
        onChange={handleInput}
        autoComplete="off"
        id="inputSearch"
        className="w-full border-transparent px-5 bg-black sm:px-1 text-primary-text-color outline-none placeholder:text-primary-text-color"
        placeholder="Search for a club"
        type="text"
      />
      <button className="mx-2 text-2xl  text-primary-text-color sm:hidden ">
        <IoSearchSharp />
      </button>
      <button className="mx-2 hidden rounded-xl border border-primary-text-color bg-primary-text-color px-6 text-xl text-black duration-300 hover:bg-black hover:text-primary-text-color sm:block">
        Search
      </button>
    </form>
  );
};
export default SearchBar;
