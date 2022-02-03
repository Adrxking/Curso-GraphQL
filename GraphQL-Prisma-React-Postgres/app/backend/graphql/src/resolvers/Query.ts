//////////////////////////
// IMPORTACION DE CONSTANTES
//////////////////////////
import { Context } from './../index';

//////////////////////////
// DEFINICION DE LOS RESOLVERS
//////////////////////////
export const Query = {

    me: (_: any, __: any, { userInfo, prisma }: Context) => {
        // Comprobar si existe el usuario
        if(!userInfo) return null;

        // Devolver la info del usuario
        return prisma.user.findUnique({
            where: {
                id: userInfo.userId,
            }
        })
    },

    profile: async (_: any, { userId }: { userId: string }, { prisma }: Context) => {
        // Devolver el perfil
        return prisma.profile.findUnique({
            where: {
                userId: Number(userId)
            }
        })
    },

    posts: async (
        _: any, 
        __: any, 
        { prisma }: Context
    ) => {
        const posts = await prisma.post.findMany({
            where: {
                published: true
            },
            orderBy: [
                {
                    createdAt: "desc"
                },
                {
                    title: "desc"
                }
            ]
        });
        return posts
    }
}
