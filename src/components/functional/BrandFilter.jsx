const BrandFilter = ({ brands, onValueChange }) => {
  return (
    <>
      <div className="border border-gray-200 p-4 my-8">
        <div className="font-bold">Brands</div>
        {brands.length > 0 ? (
          brands.map((brand, index) => (
            <label className="inline-flex items-center mt-3 mr-3" key={index}>
              <input
                type="checkbox"
                value={brand.id}
                onChange={(event) => onValueChange(event.target.value, event.target.checked)}
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-700">{brand.name}</span>
            </label>
          ))
        ) : (
          <div>No Brand</div>
        )}
      </div>
    </>
  );
};

export default BrandFilter;
