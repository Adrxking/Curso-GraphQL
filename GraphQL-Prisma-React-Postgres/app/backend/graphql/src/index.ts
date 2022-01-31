//////////////////////////
// IMPORTACION DE PAQUETES
//////////////////////////
import { ApolloServer } from "apollo-server"
import { PrismaClient, Prisma } from "@prisma/client"
//////////////////////////
// IMPORTACION DE CONSTANTES
//////////////////////////
import { typeDefs } from "./schema"
import { Query, Mutation } from "./resolvers/index"

const prisma = new PrismaClient();

// Creacion de interfaz para no perder las ventajas de TypeScript sobre el objeto prisma en el context
export interface Context {
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>
}

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
    },
    context: {
        prisma,
    }
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});  