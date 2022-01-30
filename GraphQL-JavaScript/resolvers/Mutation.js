//////////////////////////
// IMPORTACION DE PAQUETES
//////////////////////////
const { v4: uuid } = require("uuid");
const { db } = require("../db");

//////////////////////////
// DEFINICION DE LOS RESOLVERS
//////////////////////////
exports.Mutation = {
    addCategory: (parent, { input }, { categories }) => {
        // Desestructurar el input
        const { name } = input
        
        // Crear la categoria
        const newCategory = {
            // Generar un ID con GraphQL para la categoria
            id: uuid(),
            // El nombre será el nombre que el usuario introduce a traves de los args
            name
        };

        categories.push(newCategory);

        return newCategory;
    },

    addProduct: (parent, { input }, { products }) => {
        // Desestructurar el input
        const { name, image, price, onSale, quantity, categoryId } = input
        
        // Crear el producto
        const newProduct = {
            // Generar un ID con GraphQL para la categoria
            id: uuid(),
            // El nombre será el nombre que el usuario introduce a traves de los args
            name,
            image,
            price,
            onSale,
            quantity,
            categoryId
        };

        products.push(newProduct);

        return newProduct;
    },

    addReview: (parent, { input }, { reviews }) => {
        // Desestructurar el input
        const { title, comment, rating, productId } = input
        
        // Crear el review
        const newReview = {
            // Generar un ID con GraphQL para la review
            id: uuid(),
            // Generamos el date del momento en el que se crea el review
            date: new Date(),
            title,
            comment,
            rating,
            productId
        };

        reviews.push(newReview);

        return newReview;
    },

    // Eliminar una categoria y sus productos dejarlos con categoria null
    deleteCategory: (parent, { id }, { categories, products }) => {
        categories = categories.filter((category) => category.id !== id);
        products = products.map(product => {
            if(product.categoryId === id) return {
                ...product,
                categoryId: null
            } 
            else return product
        })
        return true;
    },
    
    // Eliminar un producto y sus reviews en cascada
    deleteProduct: (parent, { id }, { reviews, products }) => {
        products = products.filter((product) => product.id !== id);
        reviews = reviews.filter((review) => review.productId !== id);
        return true;
    },

    deleteReview: (parent, { id }, { reviews }) => {
        reviews = reviews.filter((review) => review.id !== id);
        return true;
    },

    updateCategory: (parent, { id, input }, { categories }) => {
        const index = categories.findIndex((category) => category.id === id);
        // Cambiar la categoria con ese index a la nueva suministrada por el usuario
        categories[index] = {
            ...categories[index],
            ...input
        };
        return categories[index];
    },

    updateProduct: (parent, { id, input }, { products }) => {
        const index = products.findIndex((product) => product.id === id);
        // Comprobar que existe el producto
        if (index === -1) return null;
        // Cambiar la categoria con ese index a la nueva suministrada por el usuario
        products[index] = {
            ...products[index],
            ...input
        };
        return products[index];
    },

    updateReview: (parent, { id, input }, { reviews }) => {
        const index = reviews.findIndex((review) => review.id === id);
        // Cambiar la categoria con ese index a la nueva suministrada por el usuario
        reviews[index] = {
            ...reviews[index],
            ...input
        };
        return reviews[index];
    },

}