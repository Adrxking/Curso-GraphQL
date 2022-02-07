//////////////////////////
// IMPORTACION DE PAQUETES
//////////////////////////
const { ApolloServer } = require("apollo-server");

///////////////////////////
// IMPORTACION DE NUESTROS ARCHIVOS
///////////////////////////
const { db } = require("./db");
const { categories, products, reviews } = db
const { typeDefs } = require("./schema");
const { Category } = require("./resolvers/Category");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { Product } = require("./resolvers/Product");

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
    console.log("🚀 Server is ready at " + url)
})