import { useEffect, useState } from "react";
import ApiService from "~/services/ApiService";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const [productId, setProductId] = useState("");
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const updateProductId = () => {
      const queryString = window.location.search;
      const searchParams = new URLSearchParams(queryString);
      const newProductId = searchParams.get("product") ?? "";
      setProductId(newProductId);
    };

    updateProductId();
  }, []);

  useEffect(() => {
    if (productId !== "") {
      getProduct(productId);
    }
  }, [productId]);

  const getProduct = async (productId) => {
    const { list } = await ApiService.getProduct(productId);
    // console.log("product: ", list.images.length);
    setProduct(list);
    setMainImage(list.coverImage);
  };

  const getVariantKeys = (variants) => {
    return Object.keys(variants);
  };

  const showVariantValues = (name, variant) => {
    if (name !== "" && name !== null) {
      return (
        <p className="py-2 ">
          <strong className="capitalize text-sm">{name}</strong>
          <br />
          {name == "colors" ? (
            variant.map((v, index) => (
              <span
                key={index}
                className="inline-block w-5 -mb-1 h-5 rounded-full mr-2 "
                style={{ backgroundColor: v }}
              ></span>
            ))
          ) : (
            <span className="text-gray-500 text-sm">{variant.join(", ")}</span>
          )}
        </p>
      );
    }
  };

  const imageClick = (path) => {
    setMainImage(path);
  };

  return (
    product && (
      <div className="">
        <div className="md:flex mb-10">
          <div className="md:flex-1 mb-5 md:mb-0">
            <img
              src={mainImage}
              alt="Product"
              className="w-full md:w-[90%] h-auto rounded-lg shadow-md mb-4"
              id="mainImage"
            />
            <div className="flex gap-4 py-4 overflow-x-auto">
              {product.images.length >= 1 &&
                product.images.map((photo, index) => (
                  <span key={index} onClick={() => imageClick(photo)}>
                    <img
                      src={photo}
                      alt={`Thumbnail ${index + 1}`}
                      className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    />
                  </span>
                ))}
            </div>
          </div>
          <div className="md:flex-1">
            <h1 className="mb-3 font-bold text-xl">{product.name}</h1>
            {product.price !== null && product.price > 0 ? (
              <div>{product.price} ks</div>
            ) : (
              ""
            )}
            <p
              className="text-sm text-gray-500 my-3"
              style={{ whiteSpace: "pre-line" }}
            >
              {product.description}
            </p>

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
              <div className="w-2/3 text-gray-500 text-sm">
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
      </div>
    )
  );
};

export default ProductDetails;
