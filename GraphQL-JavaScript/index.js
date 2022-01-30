//////////////////////////
// IMPORTACION DE PAQUETES
//////////////////////////
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");
const { db } = require("./db");
const { categories, products, reviews } = db

//////////////////////////
// DEFINICION DEL SERVIDOR
//////////////////////////

const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query, 
      Mutation,
      Product,
      Category
    },
    context: {
      categories, 
      products,
      reviews
    }
});

//////////////////////////
// LANZAR EL SERVIDOR
//////////////////////////
server.listen().then(({url})=> {
    console.log("Server is ready at " + url)
})