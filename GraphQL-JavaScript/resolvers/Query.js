//////////////////////////
// DEFINICION DE LOS RESOLVERS
//////////////////////////

exports.Query = {
    hello: () => { return "World" },
    // Obtener todos los productos
    products: (parent, {filter}, {products, reviews}) => {
      let filteredProducts = products
      
        // Si existe un parametro de filtros se comprueba que filtros son
        if(filter) {
            // Desestructuramos la variable filter
            const { onSale, avgRating } = filter

            // Si el filtro pasado es onSale se hace un filtrado por los productos que tengan el valor del onSale
            if(onSale === true || onSale === false ) {
                filteredProducts = filteredProducts.filter((product) => product.onSale === onSale);
            };
            
            // Comprobar que el valor de avgRating es 1,2,3,4 o 5
            if([1,2,3,4,5].includes(avgRating)) {
                // Loop para cada producto
                filteredProducts = filteredProducts.filter((product) => {
                    // Variable que contendra la suma de las puntuaciones de cada producto
                    let sumRating = 0;
                    // Variable que contendra el numero de reviews de cada producto
                    let numberOfReviews = 0;
                    // Para cada review
                    reviews.forEach((review) => {
                        // Si la review tiene el mismo product id que el producto le sumamos la valoracion
                        if (review.productId === product.id) {
                            sumRating += review.rating;
                            numberOfReviews++;
                        };
                    });
                    // Obtener la media de las puntuaciones por review
                    const avgProductRating = sumRating/numberOfReviews;

                    // Devolver los productos con una media de valoraciones igual o superior a la devuelta
                    return avgProductRating >= avgRating;
                });
            }
        }
      
      return filteredProducts
    },
    product: (parent, { id }, {products}) => {
        // Obtener el producto con el id suministrado
        return products.find((product) => product.id === id);
    },
    // Obtener todas las categorias
    categories: (parent, args, {categories}) => categories,
    category: (parent, { id }, {categories}) => {
        // Obtener la categoria con el id suministrado
      return categories.find((category) => category.id === id);
    }
}