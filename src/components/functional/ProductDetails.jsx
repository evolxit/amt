import { useEffect, useState } from 'react';
import defaultImg from '~/assets/images/default.png';
import ApiService from '~/services/ApiService';

const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);
const productId = searchParams.get('product') ?? '';

const ProductDetails = () => {
  const [product, setProduct] = useState();
  useEffect(() => {
    getProduct(productId);
  }, []);

  const getProduct = async (productId) => {
    const { list } = await ApiService.getProduct(productId);
    console.log('list', list);
    setProduct(list);
  };

  const getVariantKeys = (variants) => {
    return Object.keys(variants);
  };

  const showVariantValues = (name, variant) => {
    if (name !== '' && name !== null) {
      return (
        <p>
          <strong>{name}</strong> : {variant.join(', ')}
        </p>
      );
    }
  };

  return (
    product && (
      <div className="">
        <div className="flex mb-10">
          <div className="flex-1">
            <img src={product.coverImage ?? defaultImg.src} />
          </div>
          <div className="flex-1">
            <h1 className="mb-3 font-bold text-xl">{product.name}</h1>
            <p>6500 ks</p>
            <p>{product.description}</p>

            {getVariantKeys(product.variants).map((variantName, index) => (
              <div key={index}>
                <p>
                  Key: {variantName} : Value: {JSON.stringify(product.variants[variantName] ?? {})}
                </p>
                {showVariantValues(variantName, product.variants[variantName])}
              </div>
            ))}

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
    )
  );
};

export default ProductDetails;
