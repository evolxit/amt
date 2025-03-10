import { buildRequest, buildUrl } from "~/utils/helpers";

async function getCategories() {
  const requestOptions = buildRequest("GET");
  const url = buildUrl("/v1/categories");
  const response = await fetch(url, requestOptions);
  return await response.json();
}

async function getBrands() {
  const requestOptions = buildRequest("GET");
  const url = buildUrl("/v1/brands");
  const response = await fetch(url, requestOptions);
  return await response.json();
}

async function getProducts() {
  const requestOptions = buildRequest("GET");
  const url = buildUrl("/v1/brands");
  const response = await fetch(url, requestOptions);
  return await response.json();
}

async function getResult(category, brands, page, searchkey) {
  const requestOptions = buildRequest("GET");
  const url = buildUrl("/v1/search", {
    category: category,
    brands: brands,
    searchkey: searchkey,
    page: page,
  });
  const response = await fetch(url, requestOptions);
  return await response.json();
}

async function getProduct(productId) {
  const requestOptions = buildRequest("GET");
  const url = buildUrl("/v1/products/" + productId);
  const response = await fetch(url, requestOptions);
  return await response.json();
}

async function getPopularProducts() {
  const requestOptions = buildRequest("GET");
  const url = buildUrl("/v1/popular-products");
  const response = await fetch(url, requestOptions);
  return await response.json();
}

const ApiService = {
  getCategories,
  getBrands,
  getProducts,
  getResult,
  getProduct,
  getPopularProducts,
};

export default ApiService;
