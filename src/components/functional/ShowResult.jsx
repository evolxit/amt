import Product from "~/components/functional/Product";

const ShowResult = ({ data }) => {
  return (
    <>
      <div className="pl-0 py-8 md:p-8 text-lg font-bold">
        Our Collection of Products
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:pl-8 pt-8">
        {data.length > 0 ? (
          data.map((product, index) => (
            <Product product={product} key={index} />
          ))
        ) : (
          <div className="text-gray-400 text-sm">No Product!</div>
        )}
      </div>
    </>
  );
};

export default ShowResult;
