import defaultImg from '~/assets/images/default.png';

const CategoryList = ({ categories }) => {
  return (
    <div className="xl:w-10/12 mx-auto pt-10">
      <div className="mx-auto mb-5">
        <h3 className="font-bold text-3xl text-black">Our Categories</h3>
      </div>
      <div className="w-full mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4 gap-y-10">
        {categories &&
          categories.map((category) => (
            <div
              key={category.id}
              className="relative flex flex-col text-gray-700 bg-gray-50 rounded-sm hover:bg-blue-50"
            >
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-sm">
                <img className="rounded-t-sm img-hover" src={defaultImg.src} alt="" />
              </div>
              <div className="p-6 pt-3">
                <p className="block font-sans text-lg antialiased font-medium leading-relaxed text-blue-gray-900 mb-2">
                  {category.name}
                </p>
                <div className="font-sans antialiased font-normal leading-normal text-gray-700 opacity-75">
                  <ul className="list-disc px-3 text-xs">
                    {category.children.length > 0 &&
                      category.children.map((child) => (
                        <li className="py-1" key={child.id}>
                          <a href={`/products?category=${child.id}`} className="hover:text-blue-500">
                            {child.name}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;