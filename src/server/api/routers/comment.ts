import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const commentRouter = createTRPCRouter({
  getAll: publicProcedure.input(z.string().cuid()).query(({ ctx, input }) => {
    return ctx.prisma.comment.findMany({
      where: {
        confessionId: input,
      },
    });
  }),
  newComment: publicProcedure
    .input(z.object({ cid: z.string().cuid(), content: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.comment.create({
        data: {
          content: input.content,
          confessionId: input.cid,
        },
      });
    }),
});

// export const confessionRouter = createTRPCRouter({
//   getAll: publicProcedure.query(({ ctx }) => {
//     return ctx.prisma.confession.findMany();
//   }),
//   getOne: publicProcedure.input(z.string().cuid()).query(({ ctx, input }) => {
//     return ctx.prisma.confession.findFirst({
//       where: {
//         id: input,
//       },
//     });
//   }),
//   getFirstMany: publicProcedure.input(z.number()).query(({ ctx, input }) => {
//     return ctx.prisma.confession.findMany({
//       take: input,
//     });
//   }),
//   newConfession: publicProcedure
//     .input(
//       z.object({
//         content: z.string(),
//         author: z.string().nullable(),
//       })
//     )
//     .mutation(async ({ ctx, input }) => {
//       return await ctx.prisma.confession.create({
//         data: {
//           content: input.content,
//           author: input.author,
//         },
//       });
//     }),
//   // getRandom: publicProcedure.input(z.number()).query(({ ctx, input }) => {
//   //   return ctx.prisma.confession.findFirst({ where: { id: input } });
//   // }),
//   // getConfessionCount: publicProcedure.query(async ({ ctx }) => {
//   //   const count = await ctx.prisma.confession.count();
//   //   return count;
//   // }),
// });

// // export const exampleRouter = createTRPCRouter({
// //   hello: publicProcedure
// //     .input(z.object({ text: z.string() }))
// //     .query(({ input }) => {
// //       return {
// //         greeting: `Hello ${input.text}`,
// //       };
// //     }),
// //   getAll: publicProcedure.query(({ ctx }) => {
// //     return ctx.prisma.example.findMany();
// //   }),
// // });
