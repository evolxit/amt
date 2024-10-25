import defaultImg from '~/assets/images/default.png';

const BrandList = ({ brands }) => {
  return (
    <div className="xl:w-10/12 mx-auto pt-10">
      <div className="mx-auto mb-5">
        <h3 className="font-bold text-3xl text-black">Brands</h3>
      </div>
      <div className="w-full mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4 gap-y-10 place-items-center">
        {brands.length > 0 &&
          brands.map((brand) => (
            <div className="w-full" key={brand.id}>
              <a href={`/products?brand=${brand.id}`} className="hover:text-blue-500">
                <img className="rounded-t-sm img-hover" src={defaultImg.src} alt="" />
              </a>
              <h2 className="text-center font-semibold text-sm mt-5">{brand.name}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BrandList;
