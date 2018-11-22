export default function productReducer(
  prevState = {
    products: [{ id: 1, title: "iphone xs", price: 1200, stock: 2 }]
  },
  action
) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        products: [
          { id: 2, title: "iphone xs max", price: 1400, stock: 1 },
          { id: 3, title: "pixel 3", price: 800, stock: 10 },
          { id: 4, title: "Note 9", price: 900, stock: 8 }
        ]
      };
    case "SELL":
      let { products } = prevState;
      let index = products.findIndex(p => p.id === action.id);
      let productToUpdate = { ...products[index] };
      productToUpdate.stock--;
      products.splice(index, 1);
      products.splice(index, 0, productToUpdate);
      return {
        products: [...products]
      };
    default:
      return prevState;
  }
}
