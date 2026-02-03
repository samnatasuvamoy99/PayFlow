import { z } from "zod";
export const signupSchema = z.object({
    firstName: z.string().min(3, " user-firstName must be 3 char.."),
    lastName: z.string().min(3, "user-lastName must be 3 char..."),
    userName: z.string().min(5, "user-userName at least 3 char"),
    email: z.string().email("InaValid email address"),
    password: z.string().min(6, "user-password must be 6 char...")
});
export const signinSchema = z.object({
    userName: z.string().min(5, "user-userName must be 5 char.."),
    email: z.string().email("InaValid email address"),
    password: z.string().min(6, "user-password must be 6 char...")
});
//# sourceMappingURL=users-schema.js.map