
//////////////////////////
// DEFINICION DE LOS RESOLVERS
//////////////////////////

exports.Query = {
    hello: (parent, args, context) => "World",
    products: (parent, args, {products}) => products,
    product: (parent, args, {products}) => {
        const { id } = args.id;
        return products.find((product) => product.id === id);
    },
    categories: (parent, args, {categories}) => categories,
    category: (parent, { id }, {categories}) => {
      return categories.find((category) => category.id === id);
    }
}