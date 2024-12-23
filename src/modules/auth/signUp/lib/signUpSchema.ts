import { z } from "zod";

import { formatePhone } from "./formatePhone";

export const signUpSchema = z
  .object({
    firstName: z.string(),
    secondName: z.string(),
    phone: z.string().refine((phone) => {
      const formatedPhone = formatePhone(phone);
      return formatedPhone.length === 12;
    }, "Неверный номер телефона."),
    role: z.string(),
    mail: z.string().email({ message: "Неверный адрес электронной почты" }),
    password: z.string(),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"]
  });
