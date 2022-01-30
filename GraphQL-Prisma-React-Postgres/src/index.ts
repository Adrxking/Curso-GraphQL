//////////////////////////
// IMPORTACION DE PAQUETES
//////////////////////////
import { ApolloServer } from "apollo-server"
//////////////////////////
// IMPORTACION DE CONSTANTES
//////////////////////////
import { typeDefs } from "./schema"
import { Query } from "./resolvers/index"

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query
    }
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});  