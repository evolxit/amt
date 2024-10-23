const CategoryFilter = ({ categories, onValueChange, selectedCategory }) => {
  return (
    <div className="border border-gray-200 p-4">
      <div className="font-bold">Categories</div>
      {categories.length > 0 ? (
        categories.map((category) => (
          <div className="group flex flex-col gap-2 rounded-lg py-3" tabIndex={category.id} key={category.id}>
            <div className="flex cursor-pointer items-center justify-between">
              <span> {category.name} </span>
              <svg
                fill="none"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="h-5 w-5 transition-all duration-500 group-focus:-rotate-180"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </div>
            <div className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
              {category.children.map((child) => (
                <div key={child.id}>
                  <input
                    onClick={() => onValueChange(child.id)}
                    className="peer sr-only"
                    type="radio"
                    value={selectedCategory}
                    name="answer"
                    id={child.id}
                  />
                  <label
                    className="peer-checked:text-third-600 peer-checked:font-semibold p-2 cursor-pointer text-sm text-gray-500 hover:bg-gray-100 block rounded"
                    htmlFor={child.id}
                  >
                    {child.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div>No Category</div>
      )}
    </div>
  );
};

export default CategoryFilter;
