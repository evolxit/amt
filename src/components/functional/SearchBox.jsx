import { useState } from "react";

const SearchBox = () => {
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    if (query !== "") {
      window.location.href = `/products/?query=${query}`;
    }
  };
  return (
    // https://tailwindflex.com/@eliteai-tools/modal-with-tailwind-css
    <div>
      <button
        className="p-2 rounded-fullcursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="inset-y-0 my-auto h-8 w-8 border-r border-transparent stroke-third-900 hover:stroke-primary-600"
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
      </button>
      {showModal && (
        <div
          id="modal"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="fixed inset-0 bg-black/50"></div>
          <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Search Box
              </h3>
              <button
                id="closeModalButton"
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setShowModal(false)}
              >
                <svg
                  className="h-4 w-4 inline-block ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  ariaHidden="true"
                  dataSlot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="query" className="sr-only">
                  Search
                </label>
                <input
                  type="query"
                  id="query"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-third-700 bg-white text-gray-900 placeholder-gray-400"
                  placeholder="enter product name or sku"
                  defaultValue={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={handleSearch}
                  id="submitUrlButton"
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md bg-third-900 hover:bg-third-700"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
