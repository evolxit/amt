import newIcon from '~/assets/images/newIcon.png';

const Product = ({ product }) => {
  // const defaultImg = '~/assets/images/blog1.png';
  // const newIcon = '~/assets/images/newIcon.png';
  return (
    <div className="">
      {product && (
        <div>
          {/* <div>Hello {product.cover}</div> */}
          {/* <img src={product.cover} alt="" /> */}
          <div className="">
            <div className="bg-white border border-gray-200 rounded-sm mb-5 ">
              <a href="/product-detail" className="relative">
                <img className="rounded-t-sm img-hover" src={product.cover} alt="" />
                {product.isNew ? (
                  <span className="absolute bottom-2 left-2">
                    <img src={newIcon.src} alt="" className="object-fit w-12 -mt-5" />
                  </span>
                ) : (
                  ''
                )}
              </a>
              <div className="p-3 text-xs bg-gray-50">
                <h2 className="font-semibold">Correction & Adhesion</h2>
                <h5 className="text-gray-900 font-semibold text-md tracking-tight mt-2">
                  <span className="px-2 py-1 bg-gray-200 rounded-sm text-xs text-gray-700">TA1234</span>
                  {/* {product.isNew ? (
                    <span class="float-end">
                      <img src={newIcon.src} alt="" className="object-fit w-12 -mt-5" />
                    </span>
                  ) : (
                    ''
                  )} */}
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
