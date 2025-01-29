import { useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    if (query !== "") {
      window.location.href = `/products/?query=${query}`;
    }
  };
  return (
    // https://www.creative-tim.com/twcomponents/component/search-bar-6
    <div className="relative flex flex-col justify-center overflow-hidden">
      <div className="relative rounded-2xl bg-white px-3 ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-5">
        <div className="mx-auto max-w-md">
          <div className="relative flex flex-row border border-third-900 rounded-full">
            <div className="relative mx-auto w-max">
              <input
                type="search"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="search product by name or sku"
                className="peer cursor-pointer relative z-10 h-12 w-12 bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:pl-16 focus:pr-4"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-third-900 px-3.5 peer-focus:border-third-900 peer-focus:stroke-third-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <button
              onClick={handleSearch}
              className="inline-block text-center text-xs text-white font-bold px-4 py-2 rounded-full bg-third-900 mx-auto cursor-pointer hover:bg-primary-600"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
