import z, { core } from "zod";

export type ZodArray<T> = z.ZodType<T, T, core.$ZodTypeInternals<T, T>>;
