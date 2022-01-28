
//////////////////////////
// DEFINICION DE LOS RESOLVERS
//////////////////////////

exports.Product = {
    category: ({ categoryId }, args, { categories }) => {
      return categories.find((category) => category.id === categoryId);
    }
}