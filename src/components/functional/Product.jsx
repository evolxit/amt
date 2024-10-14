const Product = ({ product }) => {
  // const defaultImg = '~/assets/images/blog1.png';
  return (
    <div className="">
      {product && (
        <div>
          {/* <div>Hello {product.cover}</div> */}
          {/* <img src={product.cover} alt="" /> */}
          <div className="">
            <div className="bg-white shadow-md border border-gray-200 rounded-sm mb-5 ">
              <a href="/product-detail">
                <img className="rounded-t-md img-hover" src={product.cover} alt="" />
              </a>
              <div className="p-3 text-xs bg-white">
                <h2 className="font-semibold">Correction & Adhesion</h2>
                <h5 className="text-gray-900 font-semibold text-md tracking-tight mt-2">
                  <span className="px-2 py-1 bg-gray-200 rounded-sm text-xs text-gray-700">TA1234</span>
                  {/* <span class="float-end">
                  <FloatIcon src={newIcon} alt="" class:list={'newIcon'} />
                </span> */}
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
