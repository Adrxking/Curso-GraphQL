//////////////////////////
// IMPORTACION DE PAQUETES
//////////////////////////
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");
const { db } = require("./db");
const { categories, products } = db

//////////////////////////
// DEFINICION DEL SERVIDOR
//////////////////////////

const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query, 
      Product,
      Category
    },
    context: {
      categories, products
    }
});

//////////////////////////
// LANZAR EL SERVIDOR
//////////////////////////
server.listen().then(({url})=> {
    console.log("Server is ready at " + url)
})