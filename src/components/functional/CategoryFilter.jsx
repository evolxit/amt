const CategoryFilter = ({ categories, onValueChange, selectedCategory }) => {
  return (
    <div className="border border-gray-200 p-4">
      <div className="font-bold">Categories</div>
      {categories.length > 0 ? (
        categories.map((category) => (
          <select
            value={selectedCategory}
            onChange={(event) => onValueChange(event.target.value)}
            className="w-full py-3 my-2 rounded bg-white"
            key={category.id}
          >
            <option value="" className="p-2 border-0">
              {category.name}
            </option>
            {category.children.map((child) => (
              <option key={child.id} value={child.id} className="p-2">
                {child.name}
              </option>
            ))}
          </select>
        ))
      ) : (
        <div>No Category</div>
      )}
    </div>
  );
};

export default CategoryFilter;
