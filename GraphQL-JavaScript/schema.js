const { gql } = require("apollo-server");

//////////////////////////
// DEFINICION DE LOS SCHEMAS
//////////////////////////
// Existen los siguientes tipos
// String, Int, Float, Boolean, ID
exports.typeDefs = gql`
    type Query {
        hello: String
        products(filter: ProductsFilterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Mutation {
        addCategory(input: AddCategoryInput!): Category!
        addProduct(input: AddProductInput!): Product!
        addReview(input: AddReviewInput!): Review!

        # Crear una mutacion que elimina categorias y devuelve como respuesta true o false
        deleteCategory(id: ID!): Boolean!
        deleteProduct(id: ID!): Boolean!
        deleteReview(id: ID!): Boolean!

        updateCategory(id: ID!, input: UpdateCategoryInput): Category
        updateProduct(id: ID!, input: UpdateProductInput): Product
        updateReview(id: ID!, input: UpdateReviewInput): Review
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        category: Category!
        reviews: [Review!]!
    }

    type Category {
        id: ID!
        name: String!
        products(filter: ProductsFilterInput): [Product!]! # Relacionar los productos con la categoria
      
    }
    
    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }

    input ProductsFilterInput {
        onSale: Boolean
        avgRating: Int
    }

    # Especificamos los campos que necesita introducir el usuario como args para la categoria
    input AddCategoryInput {
        name: String!
    }

    input UpdateCategoryInput {
        name: String!
    }


    # Especificamos los campos que necesita introducir el usuario como args para el producto
    input AddProductInput {
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        categoryId: ID!
    }

    input UpdateProductInput {
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        categoryId: ID
    }

    # Especificamos los campos que necesita introducir el usuario como args para la review
    input AddReviewInput {
        title: String!
        comment: String!
        rating: Int!
        productId: ID!
    }

    input UpdateReviewInput {
        title: String!
        comment: String!
        rating: Int!
        productId: ID!
    }
`;