const BrandList = ({ brands }) => {
  return (
    <div className="mx-auto pt-10">
      <div className="w-full mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4 gap-y-10 place-items-center">
        {brands.length > 0 &&
          brands.map((brand) => (
            <div className="w-full h-full border-gray-300" key={brand.id}>
              <a href={`/products?brand=${brand.id}`} className="hover:text-blue-500 border h-full rounded-sm flex">
                <img className="rounded-sm self-center m-auto" src={brand.image} alt="" />
              </a>
              {/* <h2 className="text-center font-semibold text-sm mt-5">
                <a href={`/products?brand=${brand.id}`} className="hover:text-blue-500">
                  {brand.name}
                </a>
              </h2> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default BrandList;
