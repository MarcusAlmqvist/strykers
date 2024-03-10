import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const stryktipsRouter = createTRPCRouter({
  createCoupon: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        type: z.string(),
        status: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) =>
      ctx.db.stryktips.create({
        data: {
          name: input.name,
          description: input.description,
          type: input.type,
          status: input.status,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          userId: ctx.session.user.id,
        },
      }),
    ),

  getLatest: protectedProcedure.input(z.object({})).query(({ ctx }) =>
    ctx.db.stryktips.findFirst({
      where: {
        userId: ctx.session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    }),
  ),

  getAll: protectedProcedure.input(z.object({})).query(({ ctx }) =>
    ctx.db.stryktips.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    }),
  ),
});
