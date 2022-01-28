const { gql } = require("apollo-server");

//////////////////////////
// DEFINICION DE LOS SCHEMAS
//////////////////////////
// Existen los siguientes tipos
// String, Int, Float, Boolean, ID
exports.typeDefs = gql`
    type Query {
        hello: String
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
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
    }

    type Category {
      id: ID!
      name: String!
      products: [Product!]! # Relacionar los productos con la categoria  
    }
    
`;