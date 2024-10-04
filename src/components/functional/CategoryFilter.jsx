import { useEffect, useState } from 'react';

const token = import.meta.env.VITE_API_TOKEN;
const base = import.meta.env.VITE_BACKEND_PATH;

const CategoryFilter = () => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    const serviceUrl = base + 'api/v1/services';
    try {
      const response = await fetch(serviceUrl, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      const categoryData = data.list;

      console.log(categoryData);

      setCategories(categoryData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    console.log('useEffect Hello');
  }, []);

  //   getData();

  return (
    <>
      <div>Categories</div>
      {categories.length > 0 ? categories.map((category) => <div>{category.title}</div>) : <div>No category</div>}
    </>
  );
};

export default CategoryFilter;
