import { z } from "zod";

export const signInFormSchema = z.object({
  name: z.string().nonempty("Обязательное поле"),
  password: z.string().nonempty("Обязательное поле")
});

export type TSignInFormSchema = z.infer<typeof signInFormSchema>;
