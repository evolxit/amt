import { useState } from 'react';
import ApiService from '~/services/ApiService';
import BrandFilter from './BrandFilter';
import CategoryFilter from './CategoryFilter';
import ShowResult from './ShowResult';

const ProductLayout = ({ categories, brands }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [result, setResult] = useState([]);

  const handleCategoryChange = async (value) => {
    setSelectedCategory(value);
    const { list } = await ApiService.getResult(value, selectedBrands);
    setResult(list);
  };

  const handleBrandChange = async (value, status) => {
    let brands = [];
    if (status) {
      brands = [...selectedBrands, value];
    } else {
      brands = selectedBrands.filter((id) => id !== value);
    }

    console.log('brands', brands);
    setSelectedBrands(brands);
    const { list } = await ApiService.getResult(selectedCategory, brands);
    setResult(list);
  };

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
          <ShowResult data={result} />
        </div>
      </div>
    </>
  );
};

export default ProductLayout;
