
//////////////////////////
// DEFINICION DE LOS RESOLVERS
//////////////////////////

exports.Category = {
    products: ({id: categoryId}, args, context) => {
        const products = context.products;
        return products.filter((product) => product.categoryId === categoryId);
    }
}