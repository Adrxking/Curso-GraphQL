
//////////////////////////
// DEFINICION DE LOS RESOLVERS
//////////////////////////

exports.Category = {
    products: ({id: categoryId}, {filter}, context) => {
        const products = context.products;

        const categoryProducts = products.filter((product) => product.categoryId === categoryId);
    
        let filteredCategoryProducts = categoryProducts

        // Si existe un parametro de filtros se comprueba que filtros son
        if(filter) {
            // Si el filtro pasado es onSale se hace un filtrado por los productos que tengan el valor del onSale
            if(filter.onSale === true || filter.onSale === false ) {
                filteredCategoryProducts = filteredCategoryProducts.filter((product) => product.onSale === filter.onSale);
            };
        }

        return filteredCategoryProducts;
    }
}