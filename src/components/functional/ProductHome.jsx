import { useState } from 'react';
import BrandFilter from './BrandFilter';
import CategoryFilter from './CategoryFilter';
import ShowResult from './ShowResult';

const ProductHome = ({ categories, brands }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [result, setResult] = useState([]);

  console.log('outer brands', selectedBrands);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    // call api with value direct
    setResult(['apple', 'orange', 'banana', value]);
  };

  const handleBrandChange = (value, status) => {
    if (status) {
      setSelectedBrands([...selectedBrands, value]);
    } else {
      setSelectedBrands(selectedBrands.filter((id) => id !== value));
    }

    // call api with value direct
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

export default ProductHome;
