import { useEffect, useState } from 'react';
import defaultImg from '~/assets/images/default.png';
import ApiService from '~/services/ApiService';

const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);
const productId = searchParams.get('product') ?? '';

const ProductDetails = () => {
  const [product, setProduct] = useState('');
  useEffect(() => {
    getProduct(productId);
  }, []);

  // let keys = [];

  const getProduct = async (productId) => {
    const { list } = await ApiService.getProduct(productId);
    console.log('list', list);
    // keys = Object.keys(list.variants);
    // console.log('keys', keys);
    setProduct(list);
  };

  // const getVariants = (variants) => {
  //   return Object.keys(variants);
  // };

  // console.log(product.variants);
  // const keys = Object.keys(product.variants);
  // console.log('keys', keys);

  return (
    <div className="">
      <div className="flex mb-10">
        <div className="flex-1">
          <img src={product.coverImage ?? defaultImg.src} />
        </div>
        <div className="flex-1">
          <h1 className="mb-3 font-bold text-xl">{product.name}</h1>
          <p>6500 ks</p>
          <p>{product.description}</p>

          {/* {product.variants.colors[0]} */}

          {/* {Array.isArray(product.variants) &&
            product.variants.length > 0 &&
            product.variants.map((variant, index) => (
              <div key={index}>
                <span>{index}</span>
                {variant.color}
              </div>
            ))} */}

          {/* {(product.variants || []).map((variant, index) => (
            <div key={index}>
              <p>{variant}</p>
            </div>
          ))} */}

          {/* {getVariants(product.variants)} */}

          {/* {Object.keys(product.variants).map((key, index) => (
            <div key={index}>
              <p>Key: {key}</p>
              <p>Value: {product.variants[key]}</p>
            </div>
          ))} */}

          <div className="flex">
            <div className="w-1/3">
              <p>SKU</p>
              <p>Category</p>
              <p>Tag</p>
            </div>
            <div className="w-2/3">
              <p>{product.sku}</p>
              <p>{product.category}</p>
              <p>{product.tag}</p>
            </div>
          </div>
        </div>
      </div>
      <iframe
        height="315"
        src="https://www.youtube-nocookie.com/embed/DaxL4gYwUrU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        className="w-full mb-5 rounded-sm"
        allowFullScreen
      ></iframe>

      <div>
        <h1 className="font-semibold text-lg my-3 underline">Description</h1>
        <p className="text-sm text-gray-500">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
