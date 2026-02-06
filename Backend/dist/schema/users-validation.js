import { z } from "zod";
export const signupSchema = z.object({
    firstName: z.string().min(3, " user-firstName must be 3 char.."),
    lastName: z.string().min(3, "user-lastName must be 3 char..."),
    email: z.string().email("InaValid email address"),
    password: z.string().min(6, "user-password must be 6 char...")
});
export const signinSchema = z.object({
    email: z.string().email("InaValid email address"),
    password: z.string().min(6, "user-password must be 6 char...")
});
//# sourceMappingURL=users-validation.js.map