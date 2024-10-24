import defaultImg from '~/assets/images/default.png';
import newIcon from '~/assets/images/newIcon.png';

const Product = ({ product }) => {
  return (
    <div className="">
      {product && (
        <div>
          <div className="">
            <div className="bg-white border border-gray-200 rounded-sm mb-5 ">
              <a href="/product-detail" className="relative">
                <img
                  className="rounded-t-sm img-hover"
                  src={product.cover_image ? product.cover_image : defaultImg.src}
                  alt=""
                />
                {product.isNew ? (
                  <span className="absolute top-0 left-0">
                    <img src={newIcon.src} alt="" className="object-fit w-12 rounded-t-sm" />
                  </span>
                ) : (
                  ''
                )}
              </a>
              <div className="p-3 text-xs bg-gray-50">
                <h2 className="font-semibold ">
                  <a href="/product-detail" className="text-third-500 hover:text-third-400">
                    {product.name}
                  </a>
                  <br />
                  <span className=" text-gray-500">{product.category}</span>
                </h2>
                <h5 className="text-gray-900 font-semibold text-md tracking-tight mt-2">
                  <span className="px-2 py-1 bg-gray-200 rounded-sm text-xs text-gray-700">{product.sku}</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
