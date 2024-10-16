import Product from '~/components/functional/Product';

const ShowResult = ({ data }) => {
  console.log('show result', data);

  // const defaultImg = '~/assets/images/blog1.png';
  const defaultImg = '/p1.jpg';
  const testData = [
    { name: 'Product 1', code: 'TA603', cover: defaultImg },
    { name: 'Product 2', code: 'TA603', cover: defaultImg },
    { name: 'Product 3', code: 'TA603', cover: defaultImg },
    { name: 'Product 4', code: 'TA603', cover: defaultImg },
    { name: 'Product 5', code: 'TA603', cover: defaultImg },
    { name: 'Product 6', code: 'TA603', cover: defaultImg },
  ];

  return (
    <>
      <div className="p-8 text-lg font-bold">Our Collection of Products</div>

      <div className="pl-8">
        <form>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search An Item..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
      </div>

      <div className="grid grid-cols-4 gap-4 pl-8 pt-8">
        {testData.length > 0
          ? testData.map((product, index) => <Product product={product} key={index} />)
          : 'No Product!'}
      </div>
    </>
  );
};

export default ShowResult;
