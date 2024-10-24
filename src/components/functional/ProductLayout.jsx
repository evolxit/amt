import { useEffect, useState } from 'react';
import ApiService from '~/services/ApiService';
import BrandFilter from './BrandFilter';
import CategoryFilter from './CategoryFilter';
import ShowResult from './ShowResult';

const ProductLayout = ({ categories, brands }) => {
  const [selectedCategory, setSelectedCategory] = useState({ id: '', name: '' });
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [result, setResult] = useState([]);

  const queryString = window.location.search;
  const searchParams = new URLSearchParams(queryString);
  const category = searchParams.get('category') ?? '';
  const brand = searchParams.get('brand') ?? '';

  const handleCategoryChange = async (value, name, type = 'state') => {
    let category = value;
    if (type == 'state') {
      setSelectedCategory({ id: category, name: name });
    } else {
      setSelectedCategory({ id: '', name: '' });
      category = '';
    }

    const { list } = await ApiService.getResult(category, selectedBrands);
    setResult(list);
  };

  const handleBrandChange = async (value, status) => {
    let brands = [];
    if (status) {
      brands = [...selectedBrands, value];
    } else {
      brands = selectedBrands.filter((id) => id !== value);
    }

    setSelectedBrands(brands);
    const { list } = await ApiService.getResult(selectedCategory.id, brands);
    setResult(list);
  };

  const all = async (category, brand) => {
    if (category) {
      let selected = null;

      categories.find((cat) => {
        if (cat.id == category) {
          selected = { id: cat.id, name: cat.name };
          return true;
        }

        const childCategory = cat.children?.find((c) => c.id == category);

        if (childCategory) {
          selected = { id: childCategory.id, name: childCategory.name };
          return true;
        }

        return false;
      });

      if (selected) {
        setSelectedCategory(selected);
      } else {
        console.log('Category not found');
      }
    }

    const { list } = await ApiService.getResult(category ?? '', brand ?? []);
    setResult(list);
  };

  // const clearFun = () => {
  //   setSelectedCategory({ id: '', name: '' });
  //   setSelectedBrands([]);
  // };

  useEffect(() => {
    all(category, brand);
  }, [category, brand]);

  return (
    <>
      <div className="flex">
        <div className="w-1/4">
          <BrandFilter brands={brands} onValueChange={handleBrandChange} />
          <CategoryFilter
            categories={categories}
            onValueChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="w-3/4">
          {/* <span
            onClick={clearFun}
            className="float-right mt-5 border border-gray-200 rounded px-3 py-2 text-sm cursor-pointer hover:bg-blue-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 inline mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
            Clear All
          </span> */}
          <ShowResult data={result} />
        </div>
      </div>
    </>
  );
};

export default ProductLayout;
