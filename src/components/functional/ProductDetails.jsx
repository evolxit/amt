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
        <p className="py-2">
          <strong className="capitalize text-sm">{name}</strong>
          <br />
          {name == 'colors'
            ? variant.map((v) => (
                <span className="inline-block w-5 -mb-1 h-5 rounded-full mr-2" style={{ backgroundColor: v }}></span>
              ))
            : variant.join(', ')}
        </p>
      );
    }
  };

  return (
    product && (
      <div className="">
        <div className="flex mb-10">
          <div className="flex-1">
            <img src={product.coverImage ?? defaultImg.src} className="rounded w-[90%]" />
          </div>
          <div className="flex-1">
            <h1 className="mb-3 font-bold text-xl">{product.name}</h1>
            {product.price !== null && product.price > 0 ? <div>{product.price} ks</div> : ''}
            <p>{product.description}</p>

            {getVariantKeys(product.variants).map((variantName, index) => (
              <div key={index}>
                {/* <p>
                  Key: {variantName} : Value: {JSON.stringify(product.variants[variantName] ?? {})}
                </p> */}
                {showVariantValues(variantName, product.variants[variantName])}
              </div>
            ))}

            <div className="flex my-5 border-t-2 border-t-gray-400 pt-5">
              <div className="w-1/3">
                <p className="mb-2 font-bold">SKU : </p>
                <p className="mb-2 font-bold">Category : </p>
                {/* <p className="mb-2 font-bold">Tag : </p> */}
              </div>
              <div className="w-2/3">
                <p className="mb-2">{product.sku}</p>
                <p className="mb-2">{product.category}</p>
                {/* <p className="mb-2">{product.tag} </p> */}
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
