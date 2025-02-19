import newIcon from "~/assets/images/newIcon.png";

const Product = ({ lang = "en", product }) => {
  let productLink = `product-detail?product=${product.id ?? 1}`;
  if (lang !== "en") {
    productLink = `${lang}/${productLink}`;
  }
  productLink = `/${productLink}`;
  return (
    <div className="">
      {product && (
        <div className="bg-white rounded-sm mb-5 w-full">
          <a href={productLink} className="relative">
            <img
              className="rounded-t-sm w-full"
              src={
                product.coverImage
                  ? product.coverImage
                  : "https://placehold.jp/400x400.png"
              }
              alt=""
            />
            {product.isNew ? (
              <span className="absolute top-0 left-0">
                <img
                  src={newIcon.src}
                  alt=""
                  className="object-fit w-12 rounded-t-sm"
                />
              </span>
            ) : (
              ""
            )}
          </a>
          <div className="p-5 text-xs bg-gray-50">
            <h2 className=" ">
              <a
                href={productLink}
                className="text-third-500 text-sm font-semibold hover:text-third-400"
              >
                {lang !== "en" ? product.name_my : product.name}
              </a>
              <br />
              <span className=" text-gray-500">{product.category}</span>
            </h2>
            <h5 className="text-gray-900 font-semibold text-md tracking-tight mt-5">
              <span className=" text-xs text-gray-500">{product.sku}</span>
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
